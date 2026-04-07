<div class="hidden" id="apus_login_forgot_form_wrapper">
	<div class="form-acount" id="apus_login_forgot_form" tabindex="-1" role="dialog">
		
		<div class="inner">
			<ul role="tablist" class="nav nav-tabs">
				<li class="active">
					<a href="#tab-login-form" data-toggle="tab"><?php esc_html_e('Login Form', 'noanet'); ?></a>
				</li>
				<li>
					<a href="#tab-register-form" data-toggle="tab"><?php esc_html_e('Register Form', 'noanet'); ?></a>
				</li>
			</ul>
			<div class="tab-content">
				<div id="tab-login-form" class="tab-pane active">
					<div id="apus_login_form" class="form-container">
						<form class="apus-login-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="post">

						<h3><?php echo esc_html__("Login", 'noanet'); ?></h3>
						<div class="form-group">
							<label for="username_or_email"><?php esc_html_e('Username Or Email', 'noanet'); ?></label>
			                <sup class="apus-required-field">*</sup>
							<input autocomplete="off" type="text" name="username" class="form-control" id="username_or_email">
						</div>
						<div class="form-group">
							<label for="login_password"><?php echo esc_html__("Password",'noanet'); ?></label>
			                <sup class="apus-required-field">*</sup>
							<input name="password" type="password" class="password required form-control" id="login_password">
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label for="apus-user-remember">
										<input type="checkbox" name="remember" id="apus-user-remember" value="true"> <?php echo esc_html__("Remember Me",'noanet'); ?>
									</label>
								</div>
							</div>
							<div class="col-sm-6">
								<p>
									<a href="#apus_forgot_password_form" class="back-link" title="<?php echo esc_html__("Forgot Password",'noanet'); ?>"><?php echo esc_html__("Lost Your Password?",'noanet'); ?></a>
								</p>
							</div>
						</div>
						
						<div class="form-group">
							<input type="submit" class="btn btn-sm btn-warning" name="submit" value="<?php echo esc_html__("Log In",'noanet'); ?>"/>
							<input type="button" class="btn btn-sm btn-default btn-cancel" name="cancel" value="<?php echo esc_html__("Cancel",'noanet'); ?>"/>
						</div>
						<?php
							do_action('login_form');
							wp_nonce_field('ajax-apus-login-nonce', 'security_login');
						?>
						</form>
					</div>
					<!-- reset form -->
					<div id="apus_forgot_password_form" class="form-container">
						<form name="forgotpasswordform" class="forgotpassword-form" action="<?php echo esc_url( site_url('wp-login.php?action=lostpassword', 'login_post') ); ?>" method="post">
							<h3><?php echo esc_html__('Reset Password', 'noanet'); ?></h3>
							<div class="lostpassword-fields">
								<div class="form-group">
									<label for="lostpassword_username"><?php echo esc_html__("Username or E-mail",'noanet'); ?></label>
			                		<sup class="apus-required-field">*</sup>
									<input type="text" name="user_login" class="user_login form-control" id="lostpassword_username"/>
								</div>
								<?php
									do_action('lostpassword_form');
									//wp_nonce_field('ajax-apus-lostpassword-nonce', 'security');
								?>
								<div class="form-group">
									<input type="submit" class="btn btn-sm btn-warning" name="wp-submit" value="<?php echo esc_html__('Get New Password', 'noanet'); ?>" tabindex="100" />
									<input type="button" class="btn btn-sm btn-default btn-cancel" value="<?php echo esc_html__('Cancel', 'noanet'); ?>" tabindex="101" />
								</div>
							</div>
		 					<div class="lostpassword-link"><a href="#apus_login_form" class="back-link"><?php echo esc_html__('Back To Login', 'noanet'); ?></a></div>
						</form>
					</div>
				</div>
				<div id="tab-register-form" class="tab-pane">
					<?php get_template_part( 'page-templates/parts/register-form' ); ?>
				</div>
			</div>
		</div>
	</div>
</div>