<header id="apus-header" class="site-header header-v4 hidden-sm hidden-xs" role="banner">
	<div class="header-top">
        <div class="container">
            <div class="row">
                <div class="topbar-inner flex-middle clearfix">
                    
                    <?php if ( is_active_sidebar('widget-social') ): ?>
                        <div class="col-md-4">
                            <?php dynamic_sidebar('widget-social'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="col-md-4">
                        <div class="logo-in-theme text-center">
                            <?php get_template_part( 'page-templates/parts/logo-green' ); ?>
                        </div>
                    </div>

                    <?php if ( noanet_get_config('show_login', true) ) { ?>
                        <div class="col-md-4">
                            <div class="setting-popup pull-right">
                                <?php do_action('apus-account-buttons'); ?>
                            </div>
                        </div>
                    <?php } ?>

                </div>
            </div>
        </div> 
    </div>
    <div class="header-main clearfix <?php echo (noanet_get_config('keep_header') ? 'main-sticky-header-wrapper' : ''); ?>">
        <div class="<?php echo (noanet_get_config('keep_header') ? 'main-sticky-header' : ''); ?>">
            <div class="container">
                <div class="header-inner clearfix flex-middle">
                        <?php if ( has_nav_menu( 'primary' ) ) : ?>
                            <div class="main-menu">
                                <nav data-duration="400" class="hidden-xs hidden-sm apus-megamenu slide animate navbar" role="navigation">
                                <?php   $args = array(
                                        'theme_location' => 'primary',
                                        'container_class' => 'collapse navbar-collapse',
                                        'menu_class' => 'nav navbar-nav megamenu',
                                        'fallback_cb' => '',
                                        'menu_id' => 'primary-menu',
                                        'walker' => new Noanet_Nav_Menu()
                                    );
                                    wp_nav_menu($args);
                                ?>
                                </nav>
                            </div>
                        <?php endif; ?>
                        <?php
                        $livechat = noanet_get_config('livechat', false);
                        $textlivechat = noanet_get_config('textlivechat', false);
                        if(!empty($livechat)) {?>
                            <div class="right-chat flex-middle">
                                <a href="<?php echo esc_attr($livechat); ?>" class="livechat">
                                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                                    <?php if(!empty($textlivechat)) {?>
                                        <?php echo wp_kses_post($textlivechat); ?>
                                    <?php }else{ ?>
                                        <?php echo esc_html('live chat','noanet'); ?>
                                    <?php } ?>
                                </a>
                            </div>
                        <?php } ?>
                </div>
            </div>
        </div>
    </div>
</header>