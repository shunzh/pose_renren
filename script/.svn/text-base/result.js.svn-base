var session_key;
var width;
var height;
var grid;

getData();
sendGridToServer();

function getData() {
	width = parseInt( getValueFromLocation( 'width' ) );
	height = parseInt( getValueFromLocation( 'height' ) );
	grid = getValueFromLocation( 'grid' );
	session_key = getValueFromLocation( 'session_key' );
}

function sendGridToServer() {
	var time = new Date().getTime();
	
	$.post("operation.php",
		{ id : session_key.slice(2, 12), width : width, height : height, grid : grid, time: time },
		function(data) {
			if (data == "OK") {
				$("#result").html('<img src="'+session_key.slice(2, 12)+time+'.png"></img>');
				$("#msg").html('<img src="img/success.png" width="50" height="50" />照片生成成功！<br />请上传到相册，或者右键->另存为保存图片，本应用不会保存您的照片（服务器每小时清除一次）。');
				$("#nav div.right").show();
			}
			else {
				$("#msg").html('对不起，服务器发生了错误;(');
			}
		});
}

function forwardToRenren() {
	$("#msg").html('<img width="50" height="49" src="img/waiting.gif" />正在上传到人人相册，请稍候……');
	$.post("forward_to_renren.php",
		{ session_key : session_key, photo_name : session_key.slice(2, 12)+time+'.png' },
		function(data) {
			if (data.indexOf('<error_code>') != -1) {
				$("#msg").html("操作失败，请重试，或者下载然后自行上传。抱歉！");
			}
			else {
				$("#msg").html('<img src="img/success.png" width="50" height="50" />上传成功！（已经上传到您的手机相册）');
			}
		});
}

function leftClicked() {
	window.location = 'start.html?session_key='+session_key+"&restart=yes";
}