<?php
header ('Content-Type: image/png');

//get data from posting
$id = $_POST["id"];
$width = $_POST["width"];
$height = $_POST["height"];
$grid_string = $_POST["grid"];
$time = $_POST["time"];

$grid = explode(",", $grid_string);

//setting new size
$grid_width = 80;
$grid_height = 60;

$output_filename = $id.$time.".png";
$command = "gm montage -tile ".$width."x".$height." -geometry 80x60+2.5+2.5";

//now, do iteration and place images to the $new_img!!
for ($i = 0; $i < $width * $height; $i++) {
	// pattern of this grig
	$pattern = $grid[$i];

	if ($pattern == -1) {
		$pattern = 16; // blank == erased
	}
	
	$src_filename = $id.'-'.$pattern.'.jpg';
	
	$command .= " ".$src_filename;
}

// for output
$command .= " ".$output_filename;

$result = exec($command);

echo "OK";
?>
