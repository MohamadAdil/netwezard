<?php
session_cache_limiter( 'nocache' );
$subject = 'demo '; // Subject of your email
$to = "r.singh.negi85gmail.com";  //Recipient's E-mail

$headers  = 'MIME-Version: 1.0' . "\n";
$headers .= "From: Dilawar <dilawar.ali84@gmail.com>". "\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\n";

$message = 'svcx xcvcx d';

if (@mail($to, $subject, $message))
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