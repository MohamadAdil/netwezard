<?php

$atts  = array_merge( array(
	'columns'	=> 4,
	'layout_type' => 'grid'
), $atts);
extract( $atts );

$bcol = 12/$columns;
if ($columns == 5) {
	$bcol = 'cus-5';
}
if ( !empty($testimonials) && is_array($testimonials) ):
?>
	<div class="widget widget-testimonials <?php echo esc_attr($style); ?>">
	    <div class="widget-content">
    		<?php if ( $layout_type == 'carousel' ): ?>
	    		<?php if( $style == 'style-layout-1' ){ ?>
	    			<div class="owl-carousel products" data-items="<?php echo esc_attr($columns); ?>" data-carousel="owl" data-pagination="true" data-nav="false" data-extrasmall="1">
			    		<?php $i = 0; foreach ($testimonials as $testimonial) { ?>
			    			
					        <div class="testimonials-body">
							   <div class="testimonials-profile <?php echo esc_attr($i%2 == 0 ? 'style1' : 'style2'); ?>">
							   		<?php if ($i%2 == 0) { ?>
							   		<div class="media">
									  <div class="media-body">
									    <div class="testimonial-meta ">
							         	 	<div class="info">
								               	<h3 class="name-client"> <?php echo trim($testimonial->name); ?></h3>
								               	<span class="job">  <?php echo trim($testimonial->job); ?></span>   
								            </div>
								            <div class="description"><?php echo trim($testimonial->content); ?></div>
							         	</div>
									  </div>
									  
									  <div class="media-right">
									   <div class="testimonial-avatar ">
								            <?php if (isset($testimonial->image) && $testimonial->image): ?>
												<?php $img = wp_get_attachment_image_src($testimonial->image, 'full'); ?>
												<?php if ( isset($img[0]) ) { ?>
													<?php noanet_display_image($img); ?>
												<?php } ?>
											<?php endif; ?>
							         	</div>
									  </div>
									</div>
										
							   		<?php } else { ?>
							   			<div class="media">
										  <div class="media-left">
										   <div class="testimonial-avatar ">
									            <?php if (isset($testimonial->image) && $testimonial->image): ?>
													<?php $img = wp_get_attachment_image_src($testimonial->image, 'full'); ?>
													<?php if ( isset($img[0]) ) { ?>
														<?php noanet_display_image($img); ?>
													<?php } ?>
												<?php endif; ?>
								         	</div>
										  </div>
										  <div class="media-body">
										    <div class="testimonial-meta ">
								         	 	<div class="info">
									               	<h3 class="name-client"> <?php echo trim($testimonial->name); ?></h3>
									               	<span class="job">  <?php echo trim($testimonial->job); ?></span>   
									            </div>
									            <div class="description"><?php echo trim($testimonial->content); ?></div>
								         	</div>
										  </div>
										</div>
						         	<?php } ?>
						      	</div>
							</div>

			    		<?php $i++; } ?>
		    		</div>
		    	<?php } elseif($style == 'style-layout-2') { ?>

			    	<div class="owl-carousel products" data-items="<?php echo esc_attr($columns); ?>" data-carousel="owl" data-pagination="true" data-nav="false" data-extrasmall="1">
			    		<?php $i = 0; foreach ($testimonials as $testimonial) { ?>
					        <div class="testimonials-body ">
							   <div class="testimonials-profile ">
								    <div class="testimonial-meta ">
								    	<div class="description"><?php echo trim($testimonial->content); ?></div>
						         	 	<div class="info">
							               	<h3 class="name-client"> <?php echo trim($testimonial->name); ?></h3>
							               	<span class="job">  <?php echo trim($testimonial->job); ?></span>   
							            </div>
									</div>
						      	</div>
							</div>
			    		<?php $i++; } ?>
		    		</div>
			    <?php } elseif($style == 'style-layout-3') { ?>

			    	<div class="owl-carousel products" data-items="<?php echo esc_attr($columns); ?>" data-carousel="owl" data-pagination="false" data-nav="true" data-extrasmall="1">
			    		<?php $i = 0; foreach ($testimonials as $testimonial) { ?>
					        <div class="testimonials-body layout-3">
					        	<div class="testimonial-avatar ">
						            <?php if (isset($testimonial->image) && $testimonial->image): ?>
										<?php $img = wp_get_attachment_image_src($testimonial->image, 'full'); ?>
										<?php if ( isset($img[0]) ) { ?>
											<?php noanet_display_image($img); ?>
										<?php } ?>
									<?php endif; ?>
					         	</div>
							   <div class="testimonials-profile ">
								    <div class="testimonial-meta ">
						         	 	<div class="info">
							               	<h3 class="name-client"> <?php echo trim($testimonial->name); ?></h3>
							               	<span class="job">  <?php echo trim($testimonial->job); ?></span>   
							            </div>
							            <div class="description"><?php echo trim($testimonial->content); ?></div>
									</div>
						      	</div>
							</div>
			    		<?php $i++; } ?>
		    		</div>

			    <?php } ?>

	    	<?php else: ?>
	    		
	    		<div class="row">
		    		<?php foreach ($testimonials as $testimonial) { ?>
		    			<div class="col-md-<?php echo esc_attr($bcol); ?>">
			                <div class="testimonials-body">
							   	<div class="testimonials-profile">
							      	<div class="media">
							         	<div class="testimonial-avatar media-left">
								            <?php if (isset($testimonial->image) && $testimonial->image): ?>
												<?php $img = wp_get_attachment_image_src($testimonial->image, 'full'); ?>
												<?php if ( isset($img[0]) ) { ?>
													<?php noanet_display_image($img); ?>
												<?php } ?>
											<?php endif; ?>
							         	</div>
							         	<div class="testimonial-meta media-body">
								            <div class="description"><?php echo trim($testimonial->content); ?></div>
								            <div class="info">
								               	<h3 class="name-client"> <?php echo trim($testimonial->name); ?></h3>
								               	<div class="job"> , <?php echo trim($testimonial->job); ?></div>   
								            </div>
							         	</div>
							      	</div>
							   	</div> 
							</div>
				        </div>
		    		<?php } ?>
	    		</div>
	    	<?php endif; ?>
	    </div>
	</div>
<?php endif; ?>