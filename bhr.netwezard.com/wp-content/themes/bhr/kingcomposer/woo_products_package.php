<?php

$atts  = array_merge( array(
	'product_special'  => '',
	'style' => '',
	'featrue' => '',
), $atts);
extract( $atts );
if ( !empty($product_special) )  {
	$pids = noanet_autocomplete_options_helper($product_special);
	if (is_array($pids) && !empty($pids)) {
		$loop = noanet_get_products( array(), 'recent_product', 1, -1, '' , '', $pids );
	}
}
if ( isset($loop) && $loop->have_posts() ) {
?>
    <div class="widget widget-product-package products <?php echo esc_attr($style.' '.$featrue); ?>">
	    <div class="widget-content woocommerce">
	    	<?php if($style == 'image'){ ?> 
		    	<?php while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
					<?php wc_get_template( 'item-product/inner-package-img.php'); ?>
				<?php endwhile; ?>
			<?php } elseif ($style == 'image_box') { ?> 
		    	<?php while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
					<?php wc_get_template( 'item-product/inner-package-img-box.php'); ?>
				<?php endwhile; ?>
			<?php } elseif ($style == 'image_bg') { ?> 
		    	<?php while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
					<?php wc_get_template( 'item-product/inner-package-img-bg.php'); ?>
				<?php endwhile; ?>
			<?php }else{ ?>
				<?php while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
					<div class="clearfix">
						<?php wc_get_template( 'item-product/inner-package.php'); ?>
					</div>
				<?php endwhile; ?>
			<?php } ?>
	    </div>
	</div>
	<?php wp_reset_postdata(); ?>
<?php
}