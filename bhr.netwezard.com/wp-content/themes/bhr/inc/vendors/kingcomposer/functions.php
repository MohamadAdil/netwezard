<?php

add_action('init', 'noanet_kingcomposer_init');
function noanet_kingcomposer_init() {
    if ( function_exists( 'kc_add_icon' ) ) {
    	$css_folder = noanet_get_css_folder();
		$min = noanet_get_asset_min();
        kc_add_icon( $css_folder . '/font-monia'.$min.'.css' );
    }
 
}