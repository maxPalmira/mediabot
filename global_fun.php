<?php 

      function translit($str) {
        $rus = array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я');
        $lat = array('A', 'B', 'V', 'G', 'D', 'E', 'E', 'Gh', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'C', 'Ch', 'Sh', 'Sch', 'Y', 'Y', 'Y', 'E', 'Yu', 'Ya', 'a', 'b', 'v', 'g', 'd', 'e', 'e', 'gh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', 'y', 'y', 'y', 'e', 'yu', 'ya');
        return str_replace($rus, $lat, $str);
      }  

    function insertMedia($name_backend,$type,$path,$image,$sort,$name_frontend,$status,$parent_dir_id) {

        global $dbh;

        $pdo_query = "INSERT INTO media_data (name_backend , type , path , image , sort , name_frontend , status , parent_media_id , views) VALUES (:name_backend , :type , :path , :image , :sort , :name_frontend , :status , :parent_media_id , :views)";

        $exec = $dbh->prepare($pdo_query);
		
		if ($exec->execute([
			':name_backend' => $name_backend,
			':type' => $type,
			':path' => $path,
			':image' => $image,
			':sort' => $sort,
			':name_frontend' => $name_frontend,
			':status' => $status,
			':parent_media_id' => $parent_dir_id,
			':views' => 0,
		])) {
			echo "row was inserted successfully " . PHP_EOL;
		}

	
      }

     function updateMedia($name_backend,$type,$path,$image,$sort,$name_frontend,$status,$parent_dir_id,$media_id) {

        global $dbh;

        $query = "UPDATE media_data SET name_backend = '".$name_backend."', type = '".$type."', path = '".$path."', image = '".$image."', sort = '".$sort."', name_frontend = '".$name_frontend."', status = '".$status."', parent_media_id = '".$parent_dir_id."' WHERE media_id =  '".$media_id."'";
        //$result = mysql_query($query) or die('Query failed: ' . mysql_error());

        $result = $dbh->query($query);
        return $result;     
      }
      
      function selectMedia($sort) {

        global $dbh;
        $param = $sort === 0 ? "sort" : $sort;
        // echo $param;

        $query = "SELECT * from media_data ORDER BY $param ASC";
        // $result = mysql_query($query) or die('Query failed: ' . mysql_error());
        $result = $dbh->query($query);
        return $result;        
      } 

      function deleteMedia($media_id) {

        global $dbh;

        $query = "DELETE from media_data WHERE media_id = '".$media_id."'";
        //$result = mysql_query($query) or die('Query failed: ' . mysql_error());

        $result = $dbh->query($query);
        return $result;        
      }