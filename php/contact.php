<?php
session_cache_limiter( 'nocache' );
$subject = $_POST['subject']; // Subject of your email
$to = "dilawar.ali84@gmail.com";  //Recipient's E-mail


$headers  = 'MIME-Version: 1.0' . "\n";
$headers .= 'From: Net Wezard <info@netwezard.com>'. "\n"; 
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\n";

$message  = ' Name :'.$_POST['name'].'<br/>';
$message  .= ' Email :'.$_POST['email'].'<br/>';
$message  .= ' Subject :'.$_POST['subject'].'<br/>';
$message  .= ' Company :'.$_POST['company'].'<br/>';
$message  .= ' Message :'.$_POST['message'].'<br/>';


if (@mail($to, $subject, $message, $headers))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
	// header('Location: ../index.html');
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>