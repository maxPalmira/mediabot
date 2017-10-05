var mediabot = {
    init: function() {
        // NOTE: the order of the following calls is important!

        this.vars();

        // this.popSlider();

        this.mainMenu();

        this.setEventHandlers();
    },
    vars: function () {
        window$ = $(window);

        // mediabot.movieTemplate
            var li = $('#catalog-films li');
            li.show();
            this.movieTemplate = li;
            li.remove();

        this.noThumbSrc = 'images/no-video.jpg';


    },

    movieTemplate: '', 
    noThumbSrc: '', 

    setEventHandlers: function() {

        // click on a folder
        $('.main-nav .main-a').click(function(){
            var a = $(this);
            var li = a.parent();
            a.addClass('active');
            a.siblings('.navsub').slideDown(200);
            $('.navsub-a').removeClass('active');

            var otherLi = li.siblings();
            otherLi.children('.main-a').removeClass('active');
            otherLi.children('.navsub').slideUp(200);
        });

        // click on a subfolder
        $('.navsub .navsub-a').click(function(){
            $('.navsub .navsub-a').removeClass('active');
            $(this).addClass('active');
        })


        // handling thumbnail errors
        this.movieTemplate.find('img').on('error', function() {
            console.log('error, this -', this)
            if (this.src.match(/\.jpg/)) {
                var newSrc = this.src.replace('.jpg','.png');
                this.src = newSrc;
            }
            else {
                this.src = mediabot.noThumbSrc;
            }
        })

        // click on either a folder or a subfolder - pulling movies
        $('.navsub .navsub-a, .main-nav .main-a').click(function(){
            var video_path = $(this).data('path');
            var title = $(this).text();

            $.ajax({
                    url: 'show_videofiles.php',
                    type: 'post', 
                    data: {
                        video_path: video_path
                    },
                    success: function(data) {

                        console.log('success', data);


                        var path, split, nameWithExt, match, name, thumb, downloadingImage;
                        var result = [];

                        for(var i = 0; i < data.length; i++){
                            path =  data[i];
                            split = path.split('/');
                            nameWithExt = split[split.length-1];
                            match = nameWithExt.match(/\..+?$/);
                                if (match) {
                                    name = nameWithExt.slice(0, match.index)
                                }
                                else {
                                    name = nameWithExt
                                }

                            thumb = 'thumbnails/' + name + '.jpg';


                            result.push(mediabot.populateMovieTemplate(path, name, thumb)); 
                        }


                        // console.log(str);
                        var titleHtml = '<h2>' + title + '</h2>';
                        if (result.length) {
                            $('#catalog-films').html(titleHtml).append(result);
                        }
                        else {
                            $('#catalog-films').html(titleHtml + "<div class='empty'>Пусто</div>");
                        }
                    },
                    error: function() {
                        console.error('Ajax failed');
                    } 
            });
        });

        $(document).on('click', '.openvideo', function(e) {
            e.preventDefault();

            var player = $('#player-template').clone().show();
            player.attr('id', 'player');
            var source = player.children('source');

            var videoSrc = $(this).data('src');
            var videoName = $(this).data('name');
            var videoImage = $(this).data('thumb');
            // var media_id = $(this).attr('data-id');
                            
            if (videoSrc.match('.m3u8')) {
                source.attr('type', 'application/x-mpegURL')
            }
            else {
                source.attr('type', 'video/mp4')
            }

            source.attr('src', videoSrc)

            $('body').append(player);

            videojs('player', {
                controls: true,
                autoplay: false,
                preload: 'auto',
                html5: {
                    hls: {
                        withCredentials: true
                    }
                }
            });


            $('#video-overlay').fadeIn(400, function() { 

                $('#player').show().animate({opacity: 1}, 200);
            });
                         
        }); 

        $('#video-overlay').click(function(){
            $('#player').animate({opacity: 0}, 200, function(){
                    $(this).hide();
                    $(this).html('');
                    $('#video-overlay').fadeOut(400);
                    videojs('player').dispose();
            });
        });

    },

    populateMovieTemplate: function(moviePath, movieName, thumb) {

        var clone = this.movieTemplate.clone(true);

        clone.data('src',moviePath); //the b4500
        clone.data('name', movieName);
        clone.data('thumb', thumb);

        clone.find('img').attr('src', thumb);
        clone.find('h3 a').text(movieName);
        clone.find('a').attr('href', 'http://localhost/mediaserver/' + moviePath);
        clone.find('a').attr('type', 'application/x-mpegURL'); //this is not for all movies, just checking for hls. test now.
        return clone;
    },

    popSlider: function() {
        $('.popbar-slider__slides').bxSlider({
            pager: false,
            maxSlides: 10,
            minSlides: 1,
            moveSlides: 1,      
            nextText: '<i class="ic-next"></i>',
            prevText: '<i class="ic-prev"></i>', 
        });
    },
    mainMenu: function () {
        var self = this;
        mainMenu$ = $('.main-nav');    
        $('.menu-btn').on('click', function() {
            $(this).toggleClass('active');
            mainMenu$.toggleClass('active');
        })
        window$.on('resize', function(){
            if(window$.width() > 992) {
                mainMenu$.removeAttr('style');
            }
        }); 
    }   
};


$(document).ready(function (){
    mediabot.init();

    $('ul.main-nav li > span').first().click() // temp

});



// looks like this function isn't used anywhere
/*
function transliterate(word){

        var answer = "";
        var a = {}

        a["Ё"]="E";a["Й"]="Y";a["Ц"]="C";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";a["Ш"]="Sh";a["Щ"]="Sch";a["З"]="Z";a["Х"]="H";a["Ъ"]="Y";
        a["ё"]="e";a["й"]="y";a["ц"]="c";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="y";
        a["Ф"]="F";a["Ы"]="Y";a["В"]="V";a["А"]="А";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";a["Д"]="D";a["Ж"]="Gh";a["Э"]="E";
        a["ф"]="f";a["ы"]="y";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="gh";a["э"]="e";
        a["Я"]="Ya";a["Ч"]="Ch";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="Y";a["Б"]="B";a["Ю"]="Yu";
        a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="y";a["б"]="b";a["ю"]="yu";

        for (i = 0; i < word.length; ++i){

                answer += a[word[i]] === undefined ? word[i] : a[word[i]];
        }   
        return answer;
}
*/
