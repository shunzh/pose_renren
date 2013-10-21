// JavaScript Document
var width;
var height;
var grid;
var patternChoice; // if pattern i appears, set patternChoice[i] = 1
var currentPose; // initialize this array, to let the camera know which pose should be snaped
var secondLeft; // for countdown

setCamera();
getData(); //get data from GET when loaded
setPatternChoice();

/**
 * initializing camera data
 */
function setCamera() {
	webcam.set_swf_url( 'webcam/webcam.swf' );
	webcam.set_quality( 90 );
	webcam.set_shutter_sound( true, 'webcam/shutter.mp3' );
	
	//set html to the camera element
	$( '#camera' ).html( webcam.get_html( 360, 270, 80, 60 ) );
	
	webcam.set_hook( 'onComplete', 'cameraComplete' );
	webcam.set_hook( 'onError', 'cameraError' );
}

/**
 * set Flash Player
 */
function setPlayer() {
	$( '#player' ).html( '<object type="application/x-shockwave-flash" data="dewplayer.swf" width="200" height="20" id="dewplayer" name="dewplayer"> <param name="wmode" value="tranparent" /><param name="movie" value="dewplayer.swf" /> <param name="flashvars" value="mp3=mp3/chrismas.mp3&amp;autostart=1&amp;autoreplay=1" /> </object>' );
}

/**
 * get data from GET
 */
function getData() {
	width = parseInt( getValueFromLocation( 'width' ) );
	height = parseInt( getValueFromLocation( 'height' ) );
	grid = splitParseInt( getValueFromLocation( 'grid' ) );
	session_key = getValueFromLocation( 'session_key' );
}

/**
 * to figure out which pattern is needed
 */
function setPatternChoice() {
	patternChoice = new Array();
	
	// initialize
	for (var i = 0; i < 16; i++) {
		patternChoice[i] = 0;
	}
	patternChoice[16] = 1; // we must take photo of your original pose
	
	for (var i = 0; i < width * height; i++) {
		if (grid[i] == -1) {
			// here, temporarily, we use 16(erasing) to represent blank
			patternChoice[16] = 1;
		}
		else {
			patternChoice[grid[i]] = 1;
		}
	}
}

/**
 * a string split numbers with ','. return the array containing numbers
 */
function splitParseInt(str) {
	var array = str.split(",");
	var ans = new Array();
	
	for (var i = 0; i < array.length; i++) {
		ans[i] = parseInt(array[i]);
	}
	
	return ans;
}

/**
 * called when starting to capture the (next) pose~
 */
function poseIteration() {
	// check the next pose~
	currentPose++;
	
	if (currentPose > 16) {
		// when we finish
		$(".nav-process").hide();
		$(".nav-finish").show();
		$("#timer").html('<img width="50" height="50" src="img/success.png"></img>嗯，都搞定啦！');
		return;
	}
	
	// find the next one registered in patternChoice
	while (!patternChoice[currentPose]) {
		currentPose++;
	}	
	
	// TODO we currently use icons to display sample gesture
	$("#sample").css("background-image", "url(img/gesture/"+currentPose+".png)");

	// tell webcam where to send photo	
	webcam.set_api_url( 'upload.php?name='+session_key.slice(2, 12)+'-'+currentPose );
	
	// show overlay to let user know where to pose
	$( '#overlay' ).css('background-image', 'url(img/overlay/'+currentPose+'.png)');
	$( '#overlay' ).show();
	
	// now, get ready to count down, 5 4 3 2 1 ~
	setCountdown();
}

/** 
 * called by poseIteration. to count down from 00:05
 */
function setCountdown() {
	$('#timer').empty();
	
	secondLeft = 5;
	IECountdown();
}

function IECountdown() {
	if (secondLeft == 0) {
		cameraSnap();
	}
	else {
		$('#timer').html('<h1 style="display:inline;">'+secondLeft+'</h1>秒之后自动拍照哟亲~~~');
		secondLeft -= 1;
		setTimeout('IECountdown()', 1000);
	}
}

function cameraSnap() {
	webcam.snap(); //at zero, kacha!
	$("#timer").html('<img width="50" height="49" src="img/waiting.gif" />照片处理中……');
}
/**
 * for camera operation.
 * when this photo complete, call the next one
 */
function cameraComplete(msg) {
	if (msg=='OK') {
		webcam.reset();
		poseIteration();
	}
	else {
		alert('奇怪，服务器写入时发生错误……:(');
	}
}

/**
 * for camera operation.
 * when something wrong..
 */
function cameraError() {
	alert("抱歉，拍照时发生了错误……:(");
} 

/**
 * First, this will call poseIteration
 * then, poseIteration will find the corret pose to shoot, then call setCountdown
 * after 5 secs, countdown element will call snap
 * then, onComplete will call poseIteration
 * poseIteration will find if we have finish all~
 */
function startClicked() {
	//hide itself
	$(".nav-pre").hide();
	$(".nav-process").show();
	
	setPlayer();
	
	currentPose = -1; // start at 0, and poseIteration will +1 first
	poseIteration();
}

function leftClicked() {
	window.location = 'pose.html'+window.location.search;
}

function rightClicked() {
	window.location = 'result.html'+window.location.search;
}