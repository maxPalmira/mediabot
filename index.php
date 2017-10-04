<?php

/*
    1.NOTE : at line 160, change the data-src path to the location of admin2/
    2.IMP : copy the folder Filymy to files/ this is important.
    3.The root folder for the media files is admin2/files -> just for info
*/


    include('root_config.php');
    // include('db.php');
    include('global_fun.php');
    include('file_marker.php');

    /*function selectMedia() {

        global $dbh;
        $query = "SELECT * from media_data WHERE status = 1 ORDER BY sort ASC";
        // $result = mysql_query($query) or die('Query failed: ' . mysql_error());
        $result = $dbh->query($query);

        return $result;

    }*/ 

    /*
    function selectChildMedia($id) {

        global $dbh;
        $query = "SELECT * from media_data WHERE parent_media_id = '". $id ."' and status = 1 ORDER BY sort ASC";

        $result = $dbh->query($query);
        // $result = mysql_query($query) or die('Query failed: ' . mysql_error());
        return $result; 
    }

    function selectPopular() {
        global $dbh;
        $query = "SELECT * from media_data WHERE type = 1 and views >= 0 ORDER BY views DESC LIMIT 10";
        //$result = mysql_query($query) or die('Query failed: ' . mysql_error());
        $result = $dbh->query($query);
        return $result;
    }

    function addViews($media_id) {

        global $dbh;
        $query = "UPDATE media_data SET views = views+1 WHERE media_id='".$media_id."'";
        //$result = mysql_query($query) or die('Query failed: ' . mysql_error());
        $result = $dbh->query($query);
        return $result;
    }
    */


    function getCategories() //depends on file_marker.php
    {
        $file_paths = getDirContents('films');

        var_dump($file_paths)   ;

        $categories = array();

        for ($i=0; $i < count($file_paths); $i++) {
            if(!isMp4($file_paths[$i]))continue;

            $split = explode(DIRECTORY_SEPARATOR, $file_paths[$i]);
            // end($split);
            $present_category = $split[count($split)-3];
            $subcategories = array();
                for ($j=0; $j <count($file_paths) ; $j++) { 
                    if(!isMp4($file_paths[$j]))continue;

                    $temp_split = explode(DIRECTORY_SEPARATOR, $file_paths[$j]);
                    // end($split);
                    $temp_category = $temp_split[count($temp_split)-3];

                    $subcat = $temp_split[count($temp_split)-2];
                    if($temp_category==$present_category) {
                        array_push($subcategories,$subcat);
                    }
                }
            $subcategories = array_unique($subcategories, SORT_REGULAR);


            // var_dump($subcategories);
            $categories[$present_category]=$subcategories;
            
        }
        $categories = array_unique($categories, SORT_REGULAR);
        return $categories;
    }

    /*function translit($str) {
        $rus = array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я');
        $lat = array('A', 'B', 'V', 'G', 'D', 'E', 'E', 'Gh', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'C', 'Ch', 'Sh', 'Sch', 'Y', 'Y', 'Y', 'E', 'Yu', 'Ya', 'a', 'b', 'v', 'g', 'd', 'e', 'e', 'gh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', 'y', 'e', 'yu', 'ya');
        return str_replace($rus, $lat, $str);
      }*/

    /*
        if(isset($_GET['addViews'])) {
            $media_id = $_POST['media_id'];
            addViews($media_id);
        }
    */
    
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title>Mediabot</title>
    <meta name="description" content="Custom HTML5 video controls and WebVTT captions.">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="images/favicon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/main.css">
    <link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="css/px-video.css" /> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    

    </head>
<body class="catalog-page">
    <div class="wrapper">
        <header>
            <div class="header-top">
                <div class="container">
                    <div class="logo">
                        <h1><a href="<?php echo 'https://'.$_SERVER['HTTP_HOST'].'/media'; ?>">Mediabot<span>.</span></a></h1>
                    </div>
                    <div class="header-icon">
                        <img src="images/autolux-logo.png" alt="Логотип Автолюкс">
                    </div>
                </div>
            </div>
            <nav class="main-nav-h">
                    <button class="menu-btn"><span></span><i>Меню</i></button>  
                    
                    <?php 
                        // $categories = getCategories(); 
                        function dir_contains_subdirs($dir) {
                            $result = false;
                            if($dh = opendir($dir)) {
                                while(!$result && ($file = readdir($dh)) !== false) {
                                    if ($file[0] == '.') continue; // skip everything starting with dot 
                                    $result = is_dir($dir . DIRECTORY_SEPARATOR .$file);
                                }

                                closedir($dh);
                            }

                            return $result;
                        }


                        function listFolderFiles($dir, $class='main-nav'){
                            $paths = scandir($dir);

                            if (!dir_contains_subdirs($dir)) return; // prevent empty ordered elements

                            echo '<ul class="' . $class . '">';

                            foreach($paths as $name) {

                                $path = ($dir . '/' . $name);

                                if (is_dir($path) AND $name[0] != '.') {
                                    echo '<li>';

                                    echo "<span class='main-a' data-path='" . $path . "'>" . $name . '</span>';

                                    if(is_dir($dir.'/'.$name)) { // if this is a folder list subfolders 
                                        listFolderFiles($dir.'/'.$name, 'navsub');
                                    }

                                    echo '</li>';
                                }
                            }

                            echo '</ul>';
                        }

                        listFolderFiles('films' );

                    ?>

            </nav>
        </header>
        <div class="main">
            <div class="catalog">

<video id="myplayer" class="video-js vjs-default-skin" controls preload="auto">
  <!-- <source src="http://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" type="application/x-mpegURL"> -->
  <!-- <source src="http://localhost/mediaserver/films/Фильмы/hls-example/playlist.m3u8" type="application/x-mpegURL"> -->
  <source src="http://localhost/mediaserver/films/Movies/hls-example/chunklist-b450000.m3u8" type="application/x-mpegURL">
</video>

                <ul class="catalog__list catalog__items" id="catalog-films">    
                    <li class="openvideo" data-src="" data-name="" data-thumb="" style="display:none;">
                        <div class="image-h">
                            <a href="">
                                <img src="" alt="">
                            </a>
                        </div>
                        <div class="text-h">
                            <h3>
                                <a href=""></a>
                            </h3>
                        </div>
                    </li>
                </ul>
            </div>
            
            <?php
            /*
                $row = selectPopular();
                if($row->fetchColumn() > 0) {

            ?>
                <div class="popbar">
                    <h2>Популярное</h2>
                    <div class="popbar-slider">
                        <ul class="popbar-slider__slides catalog__items">
                            <?php 
                                while($popular = $row->fetch()) {
                            ?>
                                <li id="openvideo" data-id="<?php echo $popular['media_id'];?>">
                                    <div class="image-h">
                                        <a>
                                            <img src="<?php echo $popular['image'] !== 0 ? $popular['image'] : 'images/no-video.jpg'; ?>" alt="<?php echo $popular['name_frontend'];?>">
                                        </a>
                                    </div>
                                    <div class="text-h">
                                        <h3>
                                            <a 
                                                id="video-data" 
                                                data-src="<?php echo '/home/loagkglr/video-nabludenie.com.ua/media/'.translit($popular['path']).'/'.$popular['name_backend'];?>"
                                            >
                                                <?php echo $popular['name_frontend'];?>
                                            </a>
                                        </h3>
                                    </div>
                                </li>
                            <?php
                            }
                            ?>
                        </ul>
                    </div>
                </div>
            <?php
               
            }*/
            ?>
            

            </div>
        
            <!-- <div id="player"></div> -->
            <video id="player" class="video-js vjs-default-skin vjs-big-play-centered"></video>
       
            <div id="video-overlay"></div>
        </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.bxslider.min.js"></script>
    <script src="js/main.js"></script>
    <script src="//vjs.zencdn.net/5.4.6/video.min.js"></script>
    <!-- <script src="js/videojs-contrib-hls.min.js"></script> -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.11.0/videojs-contrib-hls.min.js"></script>


            <script>
            var player = videojs('myplayer',function(){});
            </script>

</body>
</html>