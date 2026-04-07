<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$brief= $_POST['brief'];
 
$to = "kanika.bagga@copancs.com";
$subject = "Copan Digital Email Submission";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// brief = user entered brief
$txt ="Name = ". $name . "\r\nEmail = "
    . $email . "\r\nMessage = " . $brief;
 
$headers = "From: info@copancs.com" . "\r\n" .
            "CC: dilawar@copancs.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:/get-in-touch.html?formSubmitted=success");
?>