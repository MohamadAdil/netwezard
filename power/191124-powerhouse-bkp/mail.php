<?php
echo "test";
$sub = "Power House Form Submission";
$to ='victormathieux@gmail.com';
$headers = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: Power House <hello@pwerhouse.com>' . "\r\n";
$message .= '<html><body><p>Hi,<br> A new user has just submitted the contact form</p>' ;
$message .= '<tr><td><b>Name:</b> '.$_POST['name'].'</td></tr>';
$message .= '<tr><td><b>Email:</b> '.$_POST['email'].'</td></tr>';
$message .= '<tr><td><b>message:</b> '.$_POST['message'].'</td></tr></body></html>';

mail($to, $sub, $message, $headers);

?>
  
