<?php

if ( !function_exists( 'noanet_product_metaboxes' ) ) {
	function noanet_product_metaboxes(array $metaboxes) {
		
		$prefix = 'apus_product_';
	    $fields = array(
            array(
                'id' => $prefix.'label',
                'type' => 'text',
                'name' => esc_html__('Label', 'noanet'),
                'description' => esc_html__('Label for ticket pricing. Ex: Besseller', 'noanet')
            )
    	);
		
	    $metaboxes[$prefix . 'display_setting'] = array(
			'id'                        => $prefix . 'display_setting',
			'title'                     => esc_html__( 'Display Settings', 'noanet' ),
			'object_types'              => array( 'product' ),
			'context'                   => 'side',
			'priority'                  => 'low',
			'show_names'                => true,
			'fields'                    => $fields
		);

	    return $metaboxes;
	}
}
add_filter( 'cmb2_meta_boxes', 'noanet_product_metaboxes' );