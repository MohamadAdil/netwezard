<html>
<head>
<title>Thank You - Masjid Qureshyan - Bijnor Uttar Pradesh India</title>
</head>
<body>

<?php

$pname=$_REQUEST["fname"];
$email=$_REQUEST["email"];
$tnum=$_REQUEST["phone"];
$message=$_REQUEST["message"];

require_once('process/class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP(); // telling the class to use SMTP

try {
  $mail->Host       = "mail.netwezard.com"; // SMTP server
  $mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
  $mail->SMTPAuth   = true;                  // enable SMTP authentication
  $mail->Host       = "mail.netwezard.com"; // sets the SMTP server
  $mail->Port       = 25;                    // set the SMTP port for the GMAIL server
  $mail->Username   = "info@netwezard.com"; // SMTP account username
  $mail->Password   = "Subh@123";        // SMTP account password
  $mail->AddAddress('dilawar.ali84@gmail.com', 'LIRB');
  $mail->SetFrom($email, $pname);
  $mail->AddReplyTo($email, $pname);
  $mail->Subject = $pname. ' wants to contact Qureshyan Masjid';
  $mail->Body = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
<title>Untitled Document</title>
</head>

<body>
<table width=\"800\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">
  <tr>
    <td colspan=\"2\"><h1 style=\"font-family: Arial, Helvetica, sans-serif;font-size: 25px;font-weight: normal;color: #666;text-decoration: underline;margin: 0 10px 30px;\">Enquiry for Qureshyan Masjid</h1></td>
  </tr>
  <tr>
    <td style=\"width: 210px;padding: 10px;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: bold;border: 1px solid #333;border-bottom: 0px solid #333;\" valign=\"top\">Name of the Person:</td>
    <td style=\"width: 547px;padding: 10px;border: 1px solid #333;border-bottom: 0px solid #333;border-left: 0px solid #333;background: #f6f6f6;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: normal;color: #444;\" valign=\"top\">$pname</td>
  </tr>
  <tr>
    <td style=\"width: 210px;padding: 10px;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: bold;border: 1px solid #333;border-bottom: 0px solid #333;\" valign=\"top\">E-mail ID:</td>
    <td style=\"width: 547px;padding: 10px;border: 1px solid #333;border-bottom: 0px solid #333;border-left: 0px solid #333;background: #f6f6f6;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: normal;color: #444;\" valign=\"top\">$email</td>
  </tr>
  <tr>
    <td style=\"width: 210px;padding: 10px;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: bold;border: 1px solid #333;border-bottom: 0px solid #333;\" valign=\"top\">Telephone / Mobile Number:</td>
    <td style=\"width: 547px;padding: 10px;border: 1px solid #333;border-bottom: 0px solid #333;border-left: 0px solid #333;background: #f6f6f6;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: normal;color: #444;\" valign=\"top\">$tnum</td>
  </tr>
  <tr>
    <td style=\"width: 210px;padding: 10px;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: bold;border: 1px solid #333;border-bottom: 1px solid #333;\" valign=\"top\">Message:</td>
    <td style=\"width: 547px;padding: 10px;border: 1px solid #333;border-bottom: 1px solid #333;border-left: 0px solid #333;background: #f6f6f6;font-family: Arial, Helvetica, sans-serif;font-size: 13px;font-weight: normal;color: #444;\" valign=\"top\">$message</td>
  </tr>
</table>

</body>
</html>";
//$body                = preg_replace('/[\]/','',$body);

  $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
  $mail->WordWrap = 80;
  $mail->IsHTML(true);
  //$mail->MsgHTML();
  //$mail->AddAttachment('images/valid.png');      // attachment
  $mail->Send();
  echo "<script language='javascript' type='text/javascript'>location.href='thank-you.html'</script>";
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}
?>

</body>
</html>