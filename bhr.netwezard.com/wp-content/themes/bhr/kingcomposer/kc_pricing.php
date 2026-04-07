<?php
$show_icon_header = $icon_header = $title = $subtitle = $price = $currency = $show_on_top = $duration = $desc = $show_icon = $icon = $show_button = $button_text = $button_link = $custom_class = $data_icon_header = $data_title = $data_price = $data_currency = $data_duration = $data_desc = $data_button = $style = $label = '' ;
$layout = 1;
$wrap_class	= apply_filters( 'kc-el-class', $atts );

extract( $atts );

$wrap_class[] = 'kc-pricing-tables';
$wrap_class[] = 'kc-pricing-layout-' . $layout;
$wrap_class[] = $style;
if ( !empty( $custom_class ) )
	$wrap_class[] = $custom_class;

if ( $show_on_top == 'yes' )
	$wrap_class[] = 'kc-price-before-currency';

if ( $show_icon_header == 'yes' ) {
	if( empty($icon_header) || $icon_header == '__empty__')
		$icon_header = 'fa-rocket';

	$data_icon_header .= '<div class="content-icon-header">' . '<i class="'. $icon_header .'"></i>' . '</div>';

}

if ( isset($icon_image) && $icon_image ) {
	$img = wp_get_attachment_image_src($icon_image, 'full');
	if (isset($img[0])) {
		$data_icon_header .= '<div class="content-icon-image-header"><img src="'.esc_url($img[0]).'" alt="'.esc_attr__('Image', 'noanet').'"/></div>';
	}
}

if ( !empty( $title ) ) {

	$data_title .= '<div class="content-title">';
		if ( !empty( $subtitle ) ) {
			$data_title .= '<div>' . $title . '</div>';
			$data_title .= '<div class="content-sub-title">' . $subtitle . '</div>';
		} else {
			$data_title .= $title;
		}
	$data_title .= '</div>';

}


if ( !empty( $price ) ) {

	$data_price .= '<span class="content-price">' . $price . '</span>';

}

if ( !empty( $currency ) ) {

	$data_currency .= '<span class="content-currency">' . $currency . '</span>';

}

if ( !empty( $duration ) ) {

	$data_duration .= '<span class="content-duration">' . $duration . '</span>';

}

if ( !empty( $desc ) ) {

	$pros = explode( "\n", $desc );
	if( count( $pros ) ) {

		$data_desc .= '<ul class="content-desc">';

		foreach( $pros as $pro ) {
			if ( $show_icon == 'yes' ) {
				$data_desc .= '<li><i class="'. $icon .'"></i> '. $pro .' </li>';
			} else {
				$data_desc .= '<li>'. $pro .' </li>';
			}
		}

		$data_desc .= '</ul>';

	}

}

if ( $show_button == 'yes' ) {

	if ( !empty( $button_link ) ) {
		$link_arr = explode( '|', $button_link );
		if ( !empty( $link_arr[0] ) ) {
			$link_url = $link_arr[0];
		} else {
			$link_url = '#';
		}
	} else {
		$link_url = '#';
	}

	$data_button .= '<div class="content-button">';
		$data_button .= '<a href="'. $link_url .'">'. $button_text .'</a>';
	$data_button .= '</div>';

}

?>

<div class="<?php echo implode( ' ', $wrap_class ); ?>">
	<?php if ($label) { ?>
		<div class="priceing-label">
			<?php echo esc_attr($label); ?>
		</div>
	<?php } ?>
	<?php switch ( $layout ) {
		case '2':
			echo '<div class="header-pricing">';
			echo trim($data_title);
			echo '<div class="kc-pricing-price">';
				if ( $show_on_top == 'yes' ) {
					echo trim($data_price.$data_currency.$data_duration);
				} else {
					echo trim($data_currency.$data_price.$data_duration);
				}
			echo '</div>';
			echo '</div>';
			echo trim($data_desc);
			echo trim($data_button);
		break;
		case '3':
			echo trim($data_title);
			echo trim($data_desc);
			echo '<div class="kc-pricing-price">';
				if ( $show_on_top == 'yes' ) {
					echo trim($data_price.$data_currency.$data_duration);
				} else {
					echo trim($data_currency.$data_price.$data_duration);
				}
			echo '</div>';
			echo trim($data_button);
		break;
		case '4':
			echo '<div class="header-pricing">';
			echo trim($data_icon_header);
			echo trim($data_title);
			echo '<div class="kc-pricing-price">';
				if ( $show_on_top == 'yes' ) {
					echo trim($data_price.$data_currency.$data_duration);
				} else {
					echo trim($data_currency.$data_price.$data_duration);
				}
			echo '</div>';
			echo '</div>';
			echo trim($data_desc);
			echo trim($data_button);
		break;
		default:
			echo '<div class="header-pricing">';
			echo trim($data_title);
			echo trim($data_icon_header);
			echo '<div class="kc-pricing-price">';
				if ( $show_on_top == 'yes' ) {
					echo trim($data_price.$data_currency.$data_duration);
				} else {
					echo trim($data_currency.$data_price.$data_duration);
				}
			echo '</div>';
			echo '</div>';
			echo trim($data_desc);
			echo trim($data_button);
		break;
	} ?>

</div>
