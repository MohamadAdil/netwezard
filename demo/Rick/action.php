        <?php
$to = "info@altrium.io";
$subject = "HTML email";

$message = "
<html>
<head>
<title>Contact Details</title>
</head>
<body>
<p>you have got New mail</p>
<table>
<tr>
<th>Name</th>
<th>Email</th>
<th>Message</th>
</tr>
<tr>
<td>.$_POST['name']</td>
<td>.$_POST['mail']</td>
<td>.$_POST['message']</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <demo@example.com>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";

mail($to,$subject,$message,$headers);
?> 
        ?>
       

       <?php 
if(isset($_POST['submit'])){
    $to = "rishiverma828@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $mail = $_POST['email'];
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
