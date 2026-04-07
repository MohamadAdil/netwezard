
<div class="form-wrapper">
	<div class="container-form">
        <form name="apusRegisterForm" method="post" class="apus-register-form">
            <h3><?php echo esc_html__('Register', 'noanet'); ?></h3>
            <div id="apus-reg-loader-info" class="apus-loader" style="display:none;">
                <span><?php esc_html_e('Please wait ...', 'noanet'); ?></span>
            </div>
            <div id="apus-register-alert" class="alert alert-danger" role="alert" style="display:none;"></div>
            <div id="apus-mail-alert" class="alert alert-danger" role="alert" style="display:none;"></div>

           	<div class="form-group">
              	<label for="username"><?php esc_html_e('Username', 'noanet'); ?></label>
              	<sup class="apus-required-field">*</sup>
              	<input type="text" class="form-control" name="username" id="username">
          	</div>
          	<div class="form-group">
              	<label for="email"><?php esc_html_e('Email', 'noanet'); ?></label>
              	<sup class="apus-required-field">*</sup>
              	<input type="text" class="form-control" name="email" id="email">
          	</div>
            <div class="form-group">
                <label for="password"><?php esc_html_e('Password', 'noanet'); ?></label>
                <sup class="apus-required-field">*</sup>
                <input type="password" class="form-control" name="password" id="password">
            </div>
            <div class="form-group">
                <label for="confirmpassword"><?php esc_html_e('Confirm Password', 'noanet'); ?></label>
                <sup class="apus-required-field">*</sup>
                <input type="password" class="form-control" name="confirmpassword" id="confirmpassword">
            </div>

            <?php wp_nonce_field('ajax-apus-register-nonce', 'security'); ?>
            <button type="submit" class="btn btn-warning" name="submitRegister">
                <?php echo esc_html__('Register', 'noanet'); ?>
            </button>
        </form>
	</div>
</div>
