<?php 
    header("Content-Type: application/json; charset=utf-8", true);

    include("file_marker.php");

    function extractFileNameFrom($value)
    {
        $split = explode('.', $value);
        $temp = explode('_', $split[0]);
        return $temp[0];
    }

    function finalisePath($path) {
        //$split = explode("mediaserver".DIRECTORY_SEPARATOR, $path);
        //$string = "http://localhost/mediaserver".DIRECTORY_SEPARATOR.$split[1];
        $string = $path;
        return $string;
    }

    $path = $_REQUEST['video_path'];

    $file_paths = getDirContents($path);

    // var_dump($file_paths);
    echo json_encode($file_paths);

?>