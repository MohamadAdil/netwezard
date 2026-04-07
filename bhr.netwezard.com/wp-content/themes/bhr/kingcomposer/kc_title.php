<?php

$text	= $post_title = $type = $before = $after = $title_link = $link_url = $link_title = $link_target = $class = $title_wrap = $title_wrap_class = '';

extract( $atts );

if( empty( $type ) )
	$type = 'h1';

$wrap_class  = apply_filters( 'kc-el-class', $atts );
$class_title = array( 'kc_title' );

$wrap_class[] = 'kc-title-wrap';

if ( !empty( $class ) )
	$class_title[] = $class;

if ( $title_wrap == 'yes' && !empty( $title_wrap_class ) )
	$wrap_class[] = $title_wrap_class;

if ( !empty( $title_link ) ) {
	$link_arr = explode( "|", $title_link );

	if ( !empty( $link_arr[0] ) )
		$link_url = $link_arr[0];

	if ( !empty( $link_arr[1] ) )
		$link_title = $link_arr[1];

	if ( !empty( $link_arr[2] ) )
		$link_target = $link_arr[2];

}

if ( $post_title == 'yes'){
	
	$text_title = get_the_title();
	
	if( !empty($text_title) )
		$text = esc_attr($text_title);
	
}
	
	$wrap_class[] = $title_wrap_class;

	if (isset($layout_type)) {
		$wrap_class[] = $layout_type;
	}

	if (isset($style)) {
		$wrap_class[] = $style;
	}
?>

<div class="<?php echo esc_attr( implode( ' ', $wrap_class ) ); ?>">

	<?php
		if ( $title_wrap == 'yes' && !empty( $before ) )
			echo trim($before);

		$style = '';
		if (isset($bg) && $bg) {
			$img = wp_get_attachment_image_src($bg, 'full');
			$style = 'style="background: url('.esc_url_raw($img[0]).');"';
		}
		echo '<div class="title-wrapper" '.trim($style).'>';
			echo '<'. $type .' class="'. implode( ' ', $class_title ) . '">';
				if ( !empty( $link_url ) ) {
					echo '<a href="'. esc_url( $link_url ) .'" class="kc_title_link" title="'. esc_attr( $link_title ) .'" target="'. esc_attr( $link_target ) .'">'. $text .'</a>';
				} else {
					echo trim($text);
				}
			echo '</'. $type .'>';
		echo '</div>';

		if ( $title_wrap == 'yes' && !empty( $after ) )
			echo trim($after);
	?>

</div>
