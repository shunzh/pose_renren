<?php
header("Content-Type: multipart/form-data; boundary=SoMeTeXtWeWiLlNeVeRsEe");

$session_key = $_POST['session_key'];
$photo_name = $_POST['photo_name'];
date_default_timezone_set( 'Asia/Shanghai' );

$ch = curl_init();
$params = array(
	'api_key' => $HIDDEN,
	'method' => 'photos.upload',
	'v' => '1.0',
	'call_id' => time(),
	'session_key' => $session_key
);

//����sig
$params['sig'] = rr_generate_sig($params, $HIDDEN);

//����sigʱ��Ҫ��Ҫ�ϴ����ļ��������ڡ����Էŵ�sig�����������
$params['upload'] = '@'.$photo_name;
curl_setopt($ch, CURLOPT_URL, "http://api.renren.com/restserver.do");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_exec($ch);

function rr_generate_sig($params, $secret) {
	ksort($params);
	$sig = '';
	foreach($params as $key=>$value) {
		$sig .= "$key=$value";
	}
	$sig .= $secret;
	
	return md5($sig);
}
?>
