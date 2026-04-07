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

$continue = "/";

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

$message = $message . PHP_EOL.PHP_EOL."-- ".PHP_EOL."Thank you for using FormToEmail from http://FormToEmail.com";

$message = stripslashes($message);

$subject = "Wholesale Enquiries Form Submission";

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
<title>TyrePlus Edinburgh - Wholesale Enquiries Form</title>
<link type="text/css" rel="stylesheet" href="css/tyreplus_css.css"/>
<link rel="icon" type="image/png" href="images/favicon.png"/>
<meta name="description" content="At Tyreplus you can be sure your vehicle is in expert hands. We have extensive experience in the Car Repair and Tyre Business and have experienced staff."/>
<meta name="keywords" content="Tyre Plus, TyrePlus Edinburgh, Tyre Plus Edinburgh, Tyre Plus UK, TyrePlus, Tyres, Budget Tyres, Partworn Tyres, New Tyres, Bridgestone, Michelin, Avon Tyres, Pirelli, Dunlop, Goodyear, Continental, Ceat, Brakes, Exhaust, Car Service, Car Batteries, Bosch Batteries, MOT "/>
<meta name="robots" content="index, follow"/>
<meta name="author" content="TyrePlus Edinburgh"/>
<meta name="home_url" content="http://www.tyreplusedinburgh.co.uk"/>
<script src="js/jquery.min.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/function.js"></script>
<script type="text/javascript" src="js/jquery.jcarousel.min.js"></script>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38504948-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</head>

<body>
<div id="mainwrapper">
	<div id="header">
    		<div class="headerinner">
            	<a href="http://www.tyreplusedinburgh.co.uk/" class="logo"></a>
                <div class="righthead">
                	<div class="topcontact">
                    	<div class="right">
                        	<img src="images/icon_mobile.png" alt="" /> 0131  443 0111  |  <img src="images/icon_email.png" alt="" /> <a href="mailto:info@tyreplusedinburgh.co.uk" class="emaillink">info@tyreplusedinburgh.co.uk</a>
                        </div>
                    </div>
                    <ul id="topnav">
                    	<li><a href="http://www.tyreplusedinburgh.co.uk/">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>    
    </div>
    <div id="nav">
    	<ul>
        	<li><a href="partworn-tyres.html">Partworn Tyres</a></li>
            <li><a href="new-tyres.html">New Tyres</a></li>
            <li><a href="car-servicing.html">Car Servicing</a></li>
            <li><a href="batteries.html">Batteries</a></li>
            <li><a href="brakes.html">Brakes</a></li>
            <li><a href="exhaust.html">Exhaust</a></li>
            <li><a href="mot.html">MOT</a></li>
            <li><a href="diagnostics.html">Diagnostics</a></li>
            <li><a href="wholesale-enquiries.html" class="selected">Wholesale Enquiries</a></li>
        </ul>
    </div>
	
    <div id="banner">
    	<div class="banner-inner">
        	<img src="images/banner-thankyou.jpg" alt="" />
        </div>
    </div>
    <div class="breadcrumb"><a href="http://www.tyreplusedinburgh.co.uk/">Home</a> > <a href="wholesale-enquiries.html">Wholesale Enquiries</a> > Thank You</div>
    <div id="content">
    <div class="content-left">
	<h2>Thank You</h2>
      <p>Your e-mail has been submitted succesfully.</p>
      <p>One of our consultants will get back to you shortly.</p>
    <br /><br /><br /><br /><br /><br />
    



</div>
<div class="gallery">
                <ul id="mycarousel" class="jcarousel-skin-tango">
                    <li><img src="images/pirelli_logo.jpg" alt="Pirelli Tyres"/></li>
                    <li><img src="images/dunlop_logo.jpg" alt="Dunlop Tyres"/></li>
                    <li><img src="images/goodyear_logo.jpg" alt="GOODYEAR Tyres"/></li>
                    <li><img src="images/bridgestone_logo.jpg" alt="BRIDGESTONE Tyres"/></li>
                    <li><img src="images/continental_logo.jpg" alt="CONTINENTAL Tyres"/></li>
                    <li><img src="images/hankook_logo.jpg" alt="HANKOOK Tyres"/></li>
                    <li><img src="images/avontyres_logo.jpg" alt="AVON Tyres"/></li>
                    <li><img src="images/bfgoodrich_logo.jpg" alt="BFGoodrich Tyres"/></li>
                    <li><img src="images/coopertires_logo.jpg" alt="COOPER Tyres"/></li>
                    <li><img src="images/falken_logo.jpg" alt="FALKEN Tyres"/></li>
                    <li><img src="images/firestone_logo.jpg" alt="Firestone Tyres"/></li>
                    <li><img src="images/fulda_logo.jpg" alt="FULDA Tyres"/></li>
                    <li><img src="images/kumhotyres_logo.jpg" alt="KUMHO Tyres"/></li>
                    <li><img src="images/michelin_logo.jpg" alt="MICHELIN Tyres"/></li>
                    <li><img src="images/toyotires_logo.jpg" alt="TOYO Tyres"/></li>
                </ul>
        </div>
       </div>
	
    <div id="footer">
    	<div class="footerinner">
        	<div class="footercol">
            	<div class="footerlogo"></div>
                <p>Unit 102<br/>
Saughton Industrial Estate<br/>
100 Saughton Mains Street<br/>
Edinburgh<br/>
EH11 3NR</p>
<p>Tel.: 0131 443 0111<br/>Mob.: 0744 222 0360, 0744 222 0361</p> 
    
             
 <ul class="social">
                    <li><a href="#" class="twitter"></a></li>
                    <li><a href="https://www.facebook.com/tyreplusedinburgh" target="_blank" class="facebook"></a></li>
                    <li><a href="#" class="gplus"></a></li>
                </ul>
            </div>
            <div class="footercol">
                <div class="footermap">
                <iframe width="250" height="190" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Saughton+Industrial+Estate+Edinburgh+EH11+3NR+UK&amp;aq=&amp;sll=55.933433,-3.27002&amp;sspn=0.010505,0.033023&amp;ie=UTF8&amp;hq=&amp;hnear=Saughton+Mains+Industrial+Estate,+100+Saughton+Mains+St,+Edinburgh+EH11+3NR,+United+Kingdom&amp;t=m&amp;ll=55.934587,-3.273411&amp;spn=0.009135,0.021372&amp;z=14&amp;&amp;iwloc=&amp;output=embed"></iframe>
                </div>   
            </div>
           <div class="footercol">
            	<ul class="link">
                	<li class="first"><a href="http://www.tyreplusedinburgh.co.uk/">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="partworn-tyres.html">Partworn Tyres</a></li>
                    <li><a href="new-tyres.html">New Tyres</a></li>
                    <li class="last"><a href="car-servicing.html">Car Servicing</a></li>
                </ul>
            </div>
            <div class="footercol">
            	<ul class="link">
                	<li class="first"><a href="batteries.html">Batteries</a></li>
                    <li><a href="brakes.html">Brakes</a></li>
                    <li><a href="exhaust.html">Exhaust</a></li>
                    <li><a href="mot.html">MOT</a></li>
                    <li><a href="diagnostics.html">Diagnostics</a></li>
                    <li class="last"><a href="wholesale-enquiries.html">Wholesale Enquiries</a></li>
                </ul>
            </div>
			<div class="footercol last">
            	<ul class="companylogo">
                	<li><a href="javascript:void();" class="pirelli"></a></li>
                    <li><a href="javascript:void();" class="goodyear"></a></li>
                    <li><a href="javascript:void();" class="continental"></a></li>
                    <li><a href="javascript:void();" class="dunlop"></a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
        	<div class="footer-btm-inner">© 2013 TyrePlus. All rights reserved.</div>
        </div>
    </div>
</div>
</body>
</html>


