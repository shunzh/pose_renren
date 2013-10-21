// JavaScript Document
// get seesion_key and store it in cookie
var session_key = getValueFromLocation('session_key');
var restart = getValueFromLocation('restart');
if (restart == "yes") {
	Renren.init({appId:168846});
	sendFeed();
}

function sendFeed() {
  var uiOpts = {
	  url : "feed",
	  display : "iframe",
	  params : {
		"url":"http://apps.renren.com/posemakeup/",
		"name":"大家也来玩POSE拼图吧！",
		"description":"这个应用可以把你摆的POSE拼成你想要的图案，有好多图案可以选择，也可以自己DIY，太神奇了！",
		"image":"http://venus.menie.us/pose/img/logo.png",
		"action_name": "来试试吧！",
		"action_link":"http://apps.renren.com/posemakeup/"
	  },
	  onSuccess: function(r){},
	  onFailure: function(r){} 
  };
  Renren.ui(uiOpts);
}
	
function rightClicked() {
	if (session_key == '') {
		// if fail to get this, show error, refuse to direct
		alert('session_key error. Please Reload.');
	}
	else {
		window.location = "canvas.html?session_key="+session_key;
	}
}