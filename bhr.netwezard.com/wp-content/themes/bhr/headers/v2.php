<header id="apus-header" class="site-header header-v2 hidden-sm hidden-xs" role="banner">
	<div id="apus-topbar" class="apus-topbar">
        <div class="container">
            <div class="topbar-inner clearfix">

                <?php if ( is_active_sidebar('contact-topbar-2') ): ?>
                    <div class="pull-left contact-topbar-2">
                        <?php dynamic_sidebar('contact-topbar-2'); ?>
                    </div>
                <?php endif; ?>

                <?php if ( is_active_sidebar('widget-social') ): ?>
                    <div class="pull-right widget-social">
                        <?php dynamic_sidebar('widget-social'); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div> 
    </div>
    <div class="header-main clearfix <?php echo (noanet_get_config('keep_header') ? 'main-sticky-header-wrapper' : ''); ?>">
        <div class="<?php echo (noanet_get_config('keep_header') ? 'main-sticky-header' : ''); ?>">
            <div class="container">
                <div class="header-inner">
                        <div class="row">
                        <!-- LOGO -->
                            <div class="col-md-2">
                                <div class="logo-in-theme pull-left">
                                    <?php get_template_part( 'page-templates/parts/logo' ); ?>
                                </div>
                            </div>
                            <div class="col-md-10 p-static">
                               

                                <?php if ( has_nav_menu( 'primary' ) ) : ?>
                                    <div class="main-menu pull-right">
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

                                <?php if ( noanet_get_config('show_searchform') ): ?>
                                    <div class="apus-search pull-right">
                                        <button type="button" class="button-show-search button-setting"><i class="mn-icon-52"></i></button>
                                    </div>
                                <?php endif; ?>
                                <?php if ( noanet_get_config('show_login', true) ) { ?>
                                    <?php do_action('apus-account-buttons'); ?>
                                <?php } ?>
                            </div>
                        </div>
                        
                        <div class="full-top-search-form">
                            <?php get_template_part( 'page-templates/parts/productsearchform-popup' ); ?>
                        </div>
                </div>
            </div>
        </div>
    </div>
</header>