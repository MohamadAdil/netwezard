    <?php
$to = "rishiverma";
$subject = "you have got New Mail from Altrium";

$message = "
<html>
<head>
<title>You have got new mail</title>
</head>
<body>
<strong>Name:</strong>
<span>".$_POST['name']."</span> <br>
<strong> Email ID: </strong><span> ".$_POST['email']."</span> <br>
<strong>Message:</strong> <span> ".$_POST['message']." </span>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <Altrium>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";

mail($to,$subject,$message,$headers);
?> 
       

   <?php 
if(isset($_POST['submit'])){
    $to = "email@example.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>