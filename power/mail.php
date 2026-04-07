<?php
echo "test";

$url= "https://api.apispreadsheets.com/data/10134/";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$postJSON = json_encode(["data"=> ["name"=>$_POST['name'],"email"=>$_POST['email'],"Message"=>$_POST['message']]]);
curl_setopt($curl,CURLOPT_URL, $url);
curl_setopt($curl,CURLOPT_POST, true);
curl_setopt($curl,CURLOPT_POSTFIELDS, $postJSON);

curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-type: application/json"));

$result = curl_exec($curl);

$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($http_code == 201){
	echo "inserted";
}
else{
	echo "not inserted";
}
curl_close($curl);

$sub = "Power House Form Submission";
$to ='victormathieux@gmail.com';
// $to ='dilawar.ali84@gmail.com';
$headers = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: Power House <hello@pwerhouse.com>' . "\r\n";
$message .= '<html><body>' ;
$message .= '<table>';
$message .= '<tr><td>Hi,<br><br>A new user has just submitted the contact form</td></tr>';
$message .= '<tr><td>&nbsp;</td></tr>';
$message .= '<tr><td><b>Name:</b> '.$_POST['name'].'</td></tr>';
$message .= '<tr><td><b>Email:</b> '.$_POST['email'].'</td></tr>';
$message .= '<tr><td><b>Message:</b> '.$_POST['message'].'</td></tr>';
$message .= '<table>';
$message .= '</body></html>';

mail($to, $sub, $message, $headers);

?>
  
