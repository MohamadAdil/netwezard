<?php 

class Noanet_Apus_Userinfo{

	/**
	 * Constructor 
	 */
	public function __construct() {
		
		add_action( 'init', array($this, 'setup'), 1000 );
		add_action( 'wp_ajax_nopriv_apus_ajax_login',  array($this, 'processLogin') );
		add_action( 'wp_ajax_nopriv_apus_ajax_forgotpass',  array($this, 'processForgotPassword') );
		add_action( 'wp_ajax_nopriv_apus_ajax_register',  array($this, 'processRegister') );
	}

	public function processLogin() {
		// First check the nonce, if it fails the function will break
   		check_ajax_referer( 'ajax-apus-login-nonce', 'security_login' );

   		$info = array();
   		
   		$info['user_login'] = isset($_POST['username']) ? $_POST['username'] : '';
	    $info['user_password'] = isset($_POST['password']) ? $_POST['password'] : '';
	    $info['remember'] = isset($_POST['remember']) ? true : false;

		$user_signon = wp_signon( $info, false );
	    if ( is_wp_error($user_signon) ){
			$result = json_encode(array('loggedin' => false, 'msg' => esc_html__('Wrong username or password. Please try again!!!', 'noanet')));
	    } else {
			wp_set_current_user($user_signon->ID); 
	        $result = json_encode(array('loggedin' => true, 'msg' => esc_html__('Signin successful, redirecting...', 'noanet')));
	    }

   		echo trim($result);
   		die();
	}

	public function processForgotPassword() {
	 
		// First check the nonce, if it fails the function will break
	    check_ajax_referer( 'ajax-apus-lostpassword-nonce', 'security' );
		
		global $wpdb;
		
		$account = isset($_POST['user_login']) ? $_POST['user_login'] : '';
		
		if( empty( $account ) ) {
			$error = esc_html__( 'Enter an username or e-mail address.', 'noanet' );
		} else {
			if(is_email( $account )) {
				if( email_exists($account) ) {
					$get_by = 'email';
				} else {
					$error = esc_html__( 'There is no user registered with that email address.', 'noanet' );			
				}
			} else if (validate_username( $account )) {
				if( username_exists($account) ) {
					$get_by = 'login';
				} else {
					$error = esc_html__( 'There is no user registered with that username.', 'noanet' );				
				}
			} else {
				$error = esc_html__(  'Invalid username or e-mail address.', 'noanet' );		
			}
		}	
		
		if (empty ($error)) {
			$random_password = wp_generate_password();

			$user = get_user_by( $get_by, $account );
				
			$update_user = wp_update_user( array ( 'ID' => $user->ID, 'user_pass' => $random_password ) );
				
			if( $update_user ) {
				
				$from = get_option('admin_email'); // Set whatever you want like mail@yourdomain.com
				
				
				$to = $user->user_email;
				$subject = esc_html__( 'Your new password', 'noanet' );
				$sender = 'From: '.get_option('name').' <'.$from.'>' . "\r\n";
				
				$message = esc_html__( 'Your new password is: ', 'noanet' ) .$random_password;
					
				$headers[] = 'MIME-Version: 1.0' . "\r\n";
				$headers[] = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
				$headers[] = "X-Mailer: PHP \r\n";
				$headers[] = $sender;
					
				$mail = wp_mail( $to, $subject, $message, $headers );
				if( $mail ) 
					$success = esc_html__( 'Check your email address for you new password.', 'noanet' );
				else
					$error = esc_html__( 'System is unable to send you mail containg your new password.', 'noanet' );						
			} else {
				$error =  esc_html__( 'Oops! Something went wrong while updating your account.', 'noanet' );
			}
		}
	
		if ( ! empty( $error ) ) {
			echo json_encode(array('loggedin'=> false, 'msg'=> ($error)));
		}
				
		if ( ! empty( $success ) ) {
			echo json_encode(array('loggedin' => true, 'msg'=> $success ));	
		}
		die();
	}


	/**
	 * add all actions will be called when user login.
	 */
	public function setup() {
		if ( !is_user_logged_in() ) {
			add_action('wp_footer', array( $this, 'popupForm' ) );
		}
		add_action( 'apus-account-buttons', array( $this, 'button' ) );
	}

	/**
	 * render link login or show greeting when user logined in
	 *
	 * @return String.
	 */
	public function button(){
		if ( !is_user_logged_in() ) {
			echo '<a href="#apus-user-login" class="apus-user-login btn"><i class="mn-icon-410"></i> '.esc_html__( 'Login','noanet' ).'</a>';
		} else {
			$current_user = wp_get_current_user();
			$logoutlink = esc_url( wp_logout_url( home_url() ) );
			?>
			<span class="user-link"><?php esc_html_e('Welcome ','noanet'); ?><span class="user-name"><?php echo esc_html( $current_user->display_name); ?></span>!</span>
            <a class="user-link" href="<?php echo esc_url($logoutlink); ?>"><?php esc_html_e('Logout ','noanet'); ?></a>
			<?php
		}
	}

	/**
	 * check if user not login that showing the form
	 */
	public function popupForm() {
		if ( !is_user_logged_in() ) {
 			get_template_part( 'page-templates/parts/login-form' );
		}	
	}

	function registration_validation( $username, $email, $password, $confirmpassword ) {
		global $reg_errors;
		$reg_errors = new WP_Error;
		if ( empty( $username ) || empty( $password ) || empty( $email ) || empty( $confirmpassword ) ) {
		    $reg_errors->add('field', esc_html__( 'Required form field is missing', 'noanet' ) );
		}

		if ( 4 > strlen( $username ) ) {
		    $reg_errors->add( 'username_length', esc_html__( 'Username too short. At least 4 characters is required', 'noanet' ) );
		}

		if ( username_exists( $username ) ) {
	    	$reg_errors->add('user_name', esc_html__( 'Sorry, that username already exists!', 'noanet' ) );
		}

		if ( ! validate_username( $username ) ) {
		    $reg_errors->add( 'username_invalid', esc_html__( 'Sorry, the username you entered is not valid', 'noanet' ) );
		}

		if ( 5 > strlen( $password ) ) {
	        $reg_errors->add( 'password', esc_html__( 'Password length must be greater than 5', 'noanet' ) );
	    }

	    if ( $password != $confirmpassword ) {
	        $reg_errors->add( 'password', esc_html__( 'Password must be equal Confirm Password', 'noanet' ) );
	    }

	    if ( !is_email( $email ) ) {
		    $reg_errors->add( 'email_invalid', esc_html__( 'Email is not valid', 'noanet' ) );
		}

		if ( email_exists( $email ) ) {
		    $reg_errors->add( 'email', esc_html__( 'Email Already in use', 'noanet' ) );
		}
	}

	function complete_registration($username, $password, $email) {
        $userdata = array(
	        'user_login' => $username,
	        'user_email' => $email,
	        'user_pass' => $password,
        );
        return wp_insert_user( $userdata );
	}

	function processRegister() {
		global $reg_errors;
		check_ajax_referer( 'ajax-apus-register-nonce', 'security' );
        $this->registration_validation( $_POST['username'], $_POST['email'], $_POST['password'], $_POST['confirmpassword'] );
        if ( 1 > count( $reg_errors->get_error_messages() ) ) {
	        $username = sanitize_user( $_POST['username'] );
	        $email = sanitize_email( $_POST['email'] );
	        $password = esc_attr( $_POST['password'] );
	 		
	        $res = $this->complete_registration($username, $password, $email);
	        if ( ! is_wp_error( $res ) ) {
	        	$jsondata = array('loggedin' => true, 'msg' => esc_html__( 'You have registered, redirecting ...', 'noanet' ) );
	        	$info['user_login'] = $username;
			    $info['user_password'] = $password;
			    $info['remember'] = 1;
				
				wp_signon( $info, false );
	        } else {
		        $jsondata = array('loggedin' => false, 'msg' => esc_html__( 'Register user error!', 'noanet' ) );
		    }
	    } else {
	    	$jsondata = array('loggedin' => false, 'msg' => implode(', <br>', $reg_errors->get_error_messages()) );
	    }
	    echo json_encode($jsondata);
	    exit;
	}
}

new Noanet_Apus_Userinfo();
?>