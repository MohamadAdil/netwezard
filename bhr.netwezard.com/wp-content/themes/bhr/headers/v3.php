<header id="apus-header" class="site-header header-v3 hidden-sm hidden-xs <?php echo (noanet_get_config('keep_header') ? 'main-sticky-header-wrapper' : ''); ?>" role="banner">
    <div class="<?php echo (noanet_get_config('keep_header') ? 'main-sticky-header' : ''); ?>">
        <div class="header-main clearfix">
            <div class="container">
                <div class="header-inner">
                    <div class="row flex-middle">
                    <!-- LOGO -->
                        <div class="col-md-2">
                            <div class="logo-in-theme pull-left">
                                <?php get_template_part( 'page-templates/parts/logo' ); ?>
                            </div>
                        </div>
                        <div class="col-md-10 p-static">
                            <div class="flex-middle">

                                <?php if ( has_nav_menu( 'primary' ) || noanet_get_config('show_searchform') ) : ?>
                                    <div class="main-menu  pull-left">
                                        <nav 
                                         data-duration="400" class="hidden-xs hidden-sm apus-megamenu slide animate navbar" role="navigation">
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

                                    <?php if ( noanet_get_config('show_searchform') ): ?>
                                        <div class="apus-search pull-left">
                                           <button type="button" class="button-show-search button-setting"><i class="mn-icon-52"></i></button>
                                        </div>
                                    <?php endif; ?>

                                <?php endif; ?>

                                <div class="heading-right pull-right">
                                    <div class="header-setting flex-middle">
                                        <?php if ( noanet_get_config('show_login', true) ) { ?>
                                            <div class="setting-popup">
                                                <?php do_action('apus-account-buttons'); ?>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="full-top-search-form">
                <?php get_template_part( 'page-templates/parts/productsearchform-popup' ); ?>
            </div>
        </div>
    </div>
</header>