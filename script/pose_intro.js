// JavaScript Document
function leftClicked() {
	var session_key = getValueFromLocation(  'session_key' );
	window.location = 'canvas.html?session_key='+session_key;
}

function rightClicked() {
	window.location = 'pose.html'+window.location.search;
}