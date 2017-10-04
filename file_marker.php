	<?php 

/*
	NOTE : change the parameter for getDirContents to the location of admin2/files		
*/

	// require_once 'db.php';
	// require_once 'global_fun.php';

	function getDirContents($dir, &$results = array()){
	    $files = scandir($dir);

	    foreach($files as $key => $value){
	    	if ($value[0] == '.') {
	    		continue;
	    	}

	        $path = $dir . DIRECTORY_SEPARATOR . $value;

	        if(!is_dir($path)) {

	        	if (isMp4($path)) {
	            	$results[] = $path;
	        	}

	        } else {
	            getDirContents($path, $results);
	        }
	    }

	    return $results;
	}

	function isMp4($path) {
		$extension = pathinfo($path);
		if (array_key_exists('extension', $extension) && ($extension['extension']=="mp4" || $extension['extension']=='m3u8')) {
			return true;
		}
		else {
			return false;
		}
	}

	// var_dump(getDirContents('admin2/files'));
	// var_dump(getDirContents('films'));

 ?>