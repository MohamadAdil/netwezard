<div id="apus-header-mobile" class="header-mobile hidden-lg hidden-md clearfix">
    <div class="container">
    <div class="row">
        
        <div class="col-xs-6">
            <?php
                $logo = noanet_get_config('media-mobile-logo');
            ?>

            <?php if( isset($logo['url']) && !empty($logo['url']) ): ?>
                <div class="logo">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" >
                        <img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php bloginfo( 'name' ); ?>">
                    </a>
                </div>
            <?php else: ?>
                <div class="logo logo-theme">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" >
                        <img src="<?php echo esc_url_raw( get_template_directory_uri().'/images/mobile-logo.png'); ?>" alt="<?php bloginfo( 'name' ); ?>">
                    </a>
                </div>
            <?php endif; ?>
        </div>
       
        <div class="col-xs-6">
          <div class="active-mobile pull-right">
                <button data-toggle="offcanvas" class="btn btn-sm btn-danger btn-offcanvas btn-toggle-canvas offcanvas" type="button">
                   <i class="fa fa-bars"></i>
                </button>
            </div>   
        </div>
    </div>
    </div>
</div>