<?php

error_reporting(E_ALL ^ E_NOTICE);

/*

Thank you for choosing FormToEmail by FormToEmail.com

Version 2.5 April 16th 2009

COPYRIGHT FormToEmail.com 2003 - 2009

You are not permitted to sell this script, but you can use it, copy it or distribute it, providing that you do not delete this copyright notice, and you do not remove any reference or links to FormToEmail.com

For support, please visit: http://formtoemail.com/support/

You can get the Pro version of this script here: http://formtoemail.com/formtoemail_pro_version.php
---------------------------------------------------------------------------------------------------

FormToEmail-Pro (Pro version) Features:

Check for required fields
Attach file uploads
Upload files to the server
Securimage CAPTCHA support
reCAPTCHA support
textCAPTCHA support
identiPIC photo CAPTCHA
HTML output option
Use email templates
Show date and time submitted
Create Message ID
CSV output to attachment or file
Autoresponder (with file attachment)
Show sender's IP address
Block IP addresses
Block web addresses or rude words
Block gibberish (MldMtrPAgZq etc)
Block gobbledegook characters (Å ð ç etc)
Pre-populate the form
Show errors on the form page
Check for a set cookie
Set encoding (utf-8 etc)
Ignore fields
Sort fields
Auto redirect to "Thank You" page
HTML template for "Thank You" page
No branding
Free upgrades for life

---------------------------------------------------------------------------------------------------

Confused by PHP and PERL scripts?  Don't have PHP on your server?  Can't send email from your server?

Try our remotely hosted form service:

http://FormToEmailRemote.com

---------------------------------------------------------------------------------------------------

FormToEmail DESCRIPTION

FormToEmail is a contact-form processing script written in PHP. It allows you to place a form on your website which your visitors can fill out and send to you.  The contents of the form are sent to the email address (or addresses) which you specify below.  The form allows your visitors to enter their name, email address and comments.  The script will not allow a blank form to be sent.

Your visitors (and nasty spambots!) cannot see your email address.  The script cannot be hijacked by spammers.

When the form is sent, your visitor will get a confirmation of this on the screen, and will be given a link to continue to your homepage, or other page if you specify it.

Should you need the facility, you can add additional fields to your form, which this script will also process without making any additional changes to the script.  You can also use it to process other forms.  The script will handle the "POST" or "GET" methods.  It will also handle multiple select inputs and multiple check box inputs.  If using these, you must name the field as an array using square brackets, like so: <select name="fruit[]" multiple>.  The same goes for check boxes if you are using more than one with the same name, like so: <input type="checkbox" name="fruit[]" value="apple">Apple<input type="checkbox" name="fruit[]" value="orange">Orange<input type="checkbox" name="fruit[]" value="banana">Banana

** PLEASE NOTE **  If you are using the script to process your own forms (or older FormToEmail forms) you must ensure that the email field is named correctly in your form, like this for example: <input type="text" name="email">.  Note the lower case "email".  If you don't do this, the visitor's email address will not be available to the script and the script won't be able to check the validity of the email, amongst other things.  If you are using the form code below, you don't need to check for this.

This is a PHP script.  In order for it to run, you must have PHP (version 4.1.0 or later) on your webhosting account, and have the PHP mail() function enabled and working.  If you are not sure about this, please ask your webhost about it.

SETUP INSTRUCTIONS

Step 1: Put the form on your webpage
Step 2: Enter your email address and (optional) continue link below
Step 3: Upload the files to your webspace

Step 1:

To put the form on your webpage, copy the code below as it is, and paste it into your webpage:

<form action="FormToEmail.php" method="post">
<table border="0" style="background:#ececec" cellspacing="5">
<tr align="left"><td>Name</td><td><input type="text" size="30" name="name"></td></tr>
<tr align="left"><td>Email address</td><td><input type="text" size="30" name="email"></td></tr>
<tr align="left"><td valign="top">Comments</td><td><textarea name="comments" rows="6" cols="30"></textarea></td></tr>
<tr align="left"><td>&nbsp;</td><td><input type="submit" value="Send"><font face="arial" size="1">&nbsp;&nbsp;Created with <a href="http://FormToEmail.com">FormToEmail.com</a></font></td></tr>
</table>
</form>

Step 2:

Enter your email address.

Enter the email address below to send the contents of the form to.  You can enter more than one email address separated by commas, like so: $my_email = "info@example.com"; or $my_email = "bob@example.com,sales@example.co.uk,jane@example.com";

*/

$my_email = "dilawar.ali84@gmail.com";

$from_email = "";

/*

Optional.  Enter the continue link to offer the user after the form is sent.  If you do not change this, your visitor will be given a continue link to your homepage.

If you do change it, remove the "/" symbol below and replace with the name of the page to link to, eg: "mypage.htm" or "http://www.elsewhere.com/page.htm"

*/

$continue = "thank-you.php";

/*

Step 3:

Save this file (FormToEmail.php) and upload it together with your webpage containing the form to your webspace.  IMPORTANT - The file name is case sensitive!  You must save it exactly as it is named above!

THAT'S IT, FINISHED!

You do not need to make any changes below this line.

*/

$errors = array();

// Remove $_COOKIE elements from $_REQUEST.

if(count($_COOKIE)){foreach(array_keys($_COOKIE) as $value){unset($_REQUEST[$value]);}}

// Validate email field.

if(isset($_REQUEST['email']) && !empty($_REQUEST['email']))
{

$_REQUEST['email'] = trim($_REQUEST['email']);

if(substr_count($_REQUEST['email'],"@") != 1 || stristr($_REQUEST['email']," ") || stristr($_REQUEST['email'],"\\") || stristr($_REQUEST['email'],":")){$errors[] = "Email address is invalid";}else{$exploded_email = explode("@",$_REQUEST['email']);if(empty($exploded_email[0]) || strlen($exploded_email[0]) > 64 || empty($exploded_email[1])){$errors[] = "Email address is invalid";}else{if(substr_count($exploded_email[1],".") == 0){$errors[] = "Email address is invalid";}else{$exploded_domain = explode(".",$exploded_email[1]);if(in_array("",$exploded_domain)){$errors[] = "Email address is invalid";}else{foreach($exploded_domain as $value){if(strlen($value) > 63 || !preg_match('/^[a-z0-9-]+$/i',$value)){$errors[] = "Email address is invalid"; break;}}}}}}

}

// Check referrer is from same site.

if(!(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER']) && stristr($_SERVER['HTTP_REFERER'],$_SERVER['HTTP_HOST']))){$errors[] = "You must enable referrer logging to use the form";}

// Check for a blank form.

function recursive_array_check_blank($element_value)
{

global $set;

if(!is_array($element_value)){if(!empty($element_value)){$set = 1;}}
else
{

foreach($element_value as $value){if($set){break;} recursive_array_check_blank($value);}

}

}

recursive_array_check_blank($_REQUEST);

if(!$set){$errors[] = "You cannot send a blank form";}

unset($set);

// Display any errors and exit if errors exist.

if(count($errors)){foreach($errors as $value){print "$value<br>";} exit;}

if(!defined("PHP_EOL")){define("PHP_EOL", strtoupper(substr(PHP_OS,0,3) == "WIN") ? "\r\n" : "\n");}

// Build message.

function build_message($request_input){if(!isset($message_output)){$message_output ="";}if(!is_array($request_input)){$message_output = $request_input;}else{foreach($request_input as $key => $value){if(!empty($value)){if(!is_numeric($key)){$message_output .= str_replace("_"," ",ucfirst($key)).": ".build_message($value).PHP_EOL.PHP_EOL;}else{$message_output .= build_message($value).", ";}}}}return rtrim($message_output,", ");}

$message = build_message($_REQUEST);

// $message = $message . PHP_EOL.PHP_EOL."-- ".PHP_EOL."Thank you for using FormToEmail from http://FormToEmail.com";

$message = stripslashes($message);

$subject = "Order for Lunch/Dinner Online Form Submission";

$subject = stripslashes($subject);

if($from_email)
{

$headers = "From: " . $from_email;
$headers .= PHP_EOL;
$headers .= "Reply-To: " . $_REQUEST['email'];

}
else
{

$from_name = "";

if(isset($_REQUEST['name']) && !empty($_REQUEST['name'])){$from_name = stripslashes($_REQUEST['name']);}

$headers = "From: {$from_name} <{$_REQUEST['email']}>";

}

mail($my_email,$subject,$message,$headers);







?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Thank You - Lotus Indian Restaurant & Bar</title>
<meta name="keywords" content="Lotus Indian Restaurant, Lotus Edinburgh, Indian Food Recipes, Indian Cooking, Indian Cuisines, curry recipes, indian restaurant recipes, chicken curry recipes, curry house cookery, indian cooking, indian food recipes" />
<meta name="description" content="Book your Dinner/Lunch order online on Lotus Indian Restaurant website and book your table online" />
<link href="css/lotus_css.css" rel="stylesheet" type="text/css" />
<link rel="icon" type="image/png" href="images/favicon.png"/>
<script src="js/jquery-1.7.1.min.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript">
/* Function of HOMEPAGE FLEX SLIDER */
 $(window).load(function() {

    $('.flexslider').flexslider();

  });

/* Function of HOMEPAGE FLEX SLIDER END */

</script>

</head>

<body>
<div id="mainwrapper">
	<!-- Header Start Here -->
    <div id="header">
    	<a href="index.html" class="logo">Lotus Indian Restaurant & Bar</a>
        <div class="fr">
        	<div class="toprow">
                <div class="phonewrap">
                	<div class="phone">Call Us 01316629212</div>
                    <div class="timing">Open 7 days at week 12pm - 11pm</div>
                </div>
                <ul class="socialicon">
                    <li><a href="#" class="gplus"></a></li>
                    <li><a href="https://www.facebook.com/pages/LOTUS-Indian-Restaurant-Bar/378776785563498" target="_blank" class="facebook"></a></li>
                    <li><a href="#" class="twitter"></a></li>
                 </ul>
                <div class="clearfix"></div>
                <div id="topnav">
                     <div class="centerbg">
                        <ul>
                            <li><a href="index.html" class="selected">Home</a></li>
                            <li class="sept"></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li class="sept"></li>
                            <li><a href="dinner.html">Dinner</a></li>
                            <li class="sept"></li>
                            <li><a href="menu.html">Menu</a></li>
                            <li class="sept"></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="online-order-booking.html" class="onlineorder">Online order booking</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End here-->
    <!-- Slider Start Here -->
    <div class="sliderwrapper">
    	<div class="sliderbox">
			<div class="badge"></div>
        	<div class="flexslider">
		<ul class="slides">
				<li><img src="images/slider-1.jpg" alt="" /></li>
				<li><img src="images/slider-2.jpg" alt="" /></li>
				<li><img src="images/slider-3.jpg" alt="" /></li>
		</ul>

</div>
        </div>
    </div>
    <!-- Slider end here -->
    
    <!-- Slider Content here -->
    <div class="content">
    	<div class="contentleft">
        	<h1>Thank You</h1>
           <p>Your e-mail has been submitted succesfully.</p>
      <p>One of our consultants will get back to you shortly.</p>
        </div>
        <div class="contentright">
        	<img src="images/banner-right.jpg" alt="" />
            <div class="booktableform">
            	<div class="tablebookhead">Book a Table Online</div>
                
                <div class="form_body">
                        <form action="thank-you.php" id="tablebookform" class="form-horizontal" method="post" onsubmit="javascript: return validate_form(this);" novalidate="novalidate">
                        <fieldset>
                            <label class="control-label" for="name">Full Name<span class="redstar">*</span></label>
					        <input type="text" id="name" name="name" class="input-xlarge" maxlength="30">
                        </fieldset>
                        <fieldset>
                            <label class="control-label" for="email">Email<span class="redstar">*</span></label>
                            <input type="text" class="input-xlarge" name="email" id="email">
                        </fieldset>
                        <fieldset>
                            <label class="control-label" for="phone">Phone Number<span class="redstar">*</span></label>
                            <input type="text" class="input-xlarge" name="phone" id="phone" maxlength="11">
                        </fieldset>
                        <fieldset>
                            <div class="smallwrap"><label class="control-label" for="person">Persons<span class="redstar">*</span></label>
                            <input type="text" class="input-xlarge" name="person" id="person" maxlength="2">
                            </div>
                            <div class="smallwrap"><label class="control-label" for="time">Time<span class="redstar">*</span></label>
                            <input type="text" class="input-xlarge" name="time" id="time" maxlength="5">
                            </div>
                            <div class="smallwrap mr0"><label class="control-label" for="date">Date<span class="redstar">*</span></label>
                            <input type="text" class="input-xlarge" name="date" id="date" maxlength="10">
                            </div>
                        </fieldset>
                        <fieldset>
                            <label class="control-label" for="message">Any Special Request /Comment<span class="redstar">*</span></label>
                            <textarea class="messagebox" name="message" id="message" rows="3"></textarea>
                        </fieldset>
                        <div class="form-actions">
		            <input type="submit" class="submitbtn" value="Submit" />
        			</div>
                    </form>
                    
                    
                    
                        </div>
                
            </div>
        </div>
    </div>
    <!-- content End here -->
    <div id="footer">
    	<div class="footerinner">
           	<div class="footerlogo"></div>
            <div class="addressdiv">
            	79 Buccleuch Street,
Edinburgh EH8 9LS<br /><br />
T: 01316629212
            </div>
            <div class="fr">
            	<ul class="footerlink">
                            <li><a href="index.html">Home</a></li>
                            <li>/</li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li>/</li>
                            <li><a href="dinner.html">Dinner</a></li>
                            <li>/</li>
                            <li><a href="menu.html">Menu</a></li>
                            <li>/</li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li>/</li>
                            <li><a href="online-order-booking.html">Online order booking</a></li>
                        </ul>
            	<div class="clearfix"></div>
                <ul class="footersocial">
                	<li><a href="#" class="gplus"></a></li>
                    <li><a href="https://www.facebook.com/pages/LOTUS-Indian-Restaurant-Bar/378776785563498" target="_blank" class="facebook"></a></li>
                    <li><a href="#" class="twitter"></a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
            <div class="bottomfooter">
            	<p class="fl">© 2013 Copyright Lotus Indian restaurant & Bar</p>
                <div class="fr">Site Developed by: <a href="http://sublimezsolutions.com" target="_blank" class="sublimezlink">Sublimez Solutions</a></div>
            </div>
        </div>
    </div>
    
</div>


</body>
</html>



