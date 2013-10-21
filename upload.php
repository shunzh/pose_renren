<?php
	$name = $_GET["name"];
	$jpeg_data = file_get_contents("php://input");
	
	if (!$jpeg_data) {
		die('Fail to read jpeg file!');
	}

	$filename = $name.'.jpg';
	$result = file_put_contents( $filename, $jpeg_data );
	if (!$result) {
		die('Fail to put contents');
	}
	else {
		echo 'OK';
	}
?>
