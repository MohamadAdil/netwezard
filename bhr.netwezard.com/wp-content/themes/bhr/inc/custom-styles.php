<?php
//convert hex to rgb
if ( !function_exists ('noanet_getbowtied_hex2rgb') ) {
	function noanet_getbowtied_hex2rgb($hex) {
		$hex = str_replace("#", "", $hex);
		
		if(strlen($hex) == 3) {
			$r = hexdec(substr($hex,0,1).substr($hex,0,1));
			$g = hexdec(substr($hex,1,1).substr($hex,1,1));
			$b = hexdec(substr($hex,2,1).substr($hex,2,1));
		} else {
			$r = hexdec(substr($hex,0,2));
			$g = hexdec(substr($hex,2,2));
			$b = hexdec(substr($hex,4,2));
		}
		$rgb = array($r, $g, $b);
		return implode(",", $rgb); // returns the rgb values separated by commas
		//return $rgb; // returns an array with the rgb values
	}
}
if ( !function_exists ('noanet_custom_styles') ) {
	function noanet_custom_styles() {
		global $post;	
		
		ob_start();	
		?>
		
		<!-- ******************************************************************** -->
		<!-- * Theme Options Styles ********************************************* -->
		<!-- ******************************************************************** -->
			
		<style>

			/* check main color */ 
			<?php if ( noanet_get_config('main_color') != "" ) : ?>

				/* seting border color main */
				.owl-controls .owl-dots .owl-dot.active{
					border-color: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
				}

				/* seting background main */
				.btn.apus-user-login ,
				.section-contact input.btn,
				.kc_vertical_tabs > .kc_wrapper > ul.ui-tabs-nav > li,
				#apus-header.header-v4 .header-inner,
				#apus-header.header-v4 .sticky-header,
				.post.post-grid-3 .btn-grid-3::before ,
				.owl-carousel .owl-controls .owl-nav .owl-prev:hover, .owl-carousel .owl-controls .owl-nav .owl-next:hover,
				.post.post-grid-3:hover .entry-content,
				.widget-product-package.image_bg .product-block-pricing::after,
				.widget-product-package.image.feature .widget-content .groups-button .button,
				.widget-product-package .widget-content:hover .groups-button .wc-forward, .widget-product-package .widget-content:hover .groups-button .button,
				.owl-controls .owl-dots .owl-dot.active
				{
					background: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
				}
				.btn-theme,
				.kc_tabs_nav > li:hover a,
				.kc_tabs_nav > li.ui-tabs-active a,
				.bg-theme
				{
					background: <?php echo esc_html( noanet_get_config('main_color') ) ?> !important;
				}
				/* setting color*/
				.widget-product-package.image_box .groups-button .wc-forward, .widget-product-package.image_box .groups-button .button,
				.post.post-grid-2 .author a,
				.widget-features-box.style1:hover .fbox-icon i,
				.user-link .user-name,
				.kc_accordion_wrapper ul li::before,
				.kc_vertical_tabs > .kc_wrapper > ul.ui-tabs-nav ~ div.kc_tab.ui-tabs-body-active .tab-content .media ul li::before ,
				.kc_vertical_tabs > .kc_wrapper > ul.ui-tabs-nav ~ div.kc_tab.ui-tabs-body-active .tab-content .media a,
				.contact-info a,
				.widget-blog .post-list .meta i,
				.kc_counter_box span.counterup,
				.widget-product-package.image_bg .price,
				.post.post-grid-3 .btn-grid-3,
				.kc_tabs:not(.kc_vertical_tabs) .kc_tabs_nav > li > a,
				.kc-title-wrap.dark .kc_title,
				.widget-features-box.default .fbox-icon i, .widget-testimonials.style-layout-2 .info .name-client, #apus-header .active > a, #apus-header a:active, #apus-header a:hover, #apus-footer a:hover, .apus-footer .contact-info a, #apus-copyright a:hover, .widget-testimonials .testimonial-meta .info .job span, #apus-header .phone i
				{
					color: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
				}
				/* setting border color*/
				.widget-product-package.image_box .groups-button .wc-forward, .widget-product-package.image_box .groups-button .button,
				.widget-product-package.image.feature .widget-content .groups-button .button,
				.widget-product-package .widget-content:hover .groups-button .wc-forward, .widget-product-package .widget-content:hover .groups-button .button,
				.owl-carousel .owl-controls .owl-nav .owl-prev:hover, .owl-carousel .owl-controls .owl-nav .owl-next:hover,
				.kc_tabs:not(.kc_vertical_tabs) .kc_tabs_nav > li > a,
				.post.post-grid-3:hover .entry-content,
				a.btn-theme{
					border-color: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
				}
				/* setting important*/
				.text-theme,
				.widget-product-package .widget-content:hover .price,
				.kc-image-overlay{
					color: <?php echo esc_html( noanet_get_config('main_color') ) ?> !important;
				}
				/* widget*/
				.callto-action .btn,
				.widget-newletter .btn,
				.widget_apus_search .btn{
					background: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
					border-color: <?php echo esc_html( noanet_get_config('main_color') ) ?>;
				}
				.apus-page-loading #loader,
				.apus-page-loading #loader::after,
				.apus-page-loading #loader::before {
					border-color: <?php echo esc_html( noanet_get_config('main_color') ) ?> transparent transparent;
				}
			<?php endif; ?>

			
			/* Custom CSS */
			<?php if ( noanet_get_config('custom_css') != "" ) : ?>
				<?php echo noanet_get_config('custom_css') ?>
			<?php endif; ?>

		</style>

	<?php
		$content = ob_get_clean();
		$content = str_replace(array("\r\n", "\r"), "\n", $content);
		$lines = explode("\n", $content);
		$new_lines = array();
		foreach ($lines as $i => $line) {
			if (!empty($line)) {
				$new_lines[] = trim($line);
			}
		}
		
		echo implode($new_lines);
	}
}

?>
<?php add_action( 'wp_head', 'noanet_custom_styles', 99 ); ?>