<?php

add_filter( 'apus_themer_kingcomposer_map_element_newsletter', 'noanet_kingcomposer_map_newsletter');
function noanet_kingcomposer_map_newsletter($args) {
    if ( isset($args['params'][0]['options']) ) {
        $args['params'][0]['options'] = array(
                'style1' => esc_html__( 'Style 1', 'noanet' ),
                'style2' => esc_html__( 'Style 2', 'noanet' ),
                'style3' => esc_html__( 'Style 3', 'noanet' ),
                'style4' => esc_html__( 'Style 4', 'noanet' ),
            );
    }
    return $args;
}



add_filter( 'apus_themer_kingcomposer_map_element_testimonials', 'noanet_kingcomposer_element_testimonials');
function noanet_kingcomposer_element_testimonials($args) {
    $args['params'][3]= array(
        'type' => 'dropdown',
        'label' => esc_html__( 'Style', 'noanet' ),
        'name' => 'style',
        'options' => array(
            'style-layout-1' => esc_html__( 'Style 1', 'noanet' ),
            'style-layout-2' => esc_html__( 'Style 2', 'noanet' ),
            'style-layout-3' => esc_html__( 'Style 3', 'noanet' )
        )
    );
    return $args;
}

add_filter( 'apus_themer_kingcomposer_map_element_contact_info', 'noanet_kingcomposer_element_contact_info');
function noanet_kingcomposer_element_contact_info($args) {
    $args['params'][1]= array(
        'type' => 'dropdown',
        'label' => esc_html__( 'Style', 'noanet' ),
        'name' => 'style',
        'options' => array(
            'light' => esc_html__( 'Light color', 'noanet' ),
            'dark' => esc_html__( 'Dark color', 'noanet' )
        )
    );
    return $args;
}




add_filter( 'apus_themer_kingcomposer_map_element_features_box', 'noanet_kingcomposer_map_features_box');
function noanet_kingcomposer_map_features_box($args) {
    if ( isset($args['params'][2]['options']) ) {
        $args['params'][2]['options'] = array(
                'default' => esc_html__('Default ', 'noanet'),
                'style1' => esc_html__( 'Style 1', 'noanet' ),
                'style2' => esc_html__( 'Style 2', 'noanet' ),
                'style3' => esc_html__( 'Style 3', 'noanet' ),
                'style4' => esc_html__( 'Style 4 (right)', 'noanet' )
            );
    }
    return $args;
}


add_filter( 'apus_themer_kingcomposer_map_element_blog_posts', 'noanet_kingcomposer_map_blog_posts');
function noanet_kingcomposer_map_blog_posts($args) {
    if ( isset($args['params'][4]['options']) ) {
        $args['params'][4]['options'] = array(
                'grid' => esc_html__( 'Grid', 'noanet' ),
                'grid-2' => esc_html__( 'Grid 2', 'noanet' ),
                'carousel' => esc_html__( 'Carousel', 'noanet' ),
            );
    }
    return $args;
}

add_action('init', 'noanet_kc_add_data', 99 );
function noanet_kc_add_data(){
    global $kc;
    if ( !is_object($kc) ) {
        return;
    }
    $kc->add_map_param(
        'kc_title',
        array(
            "type" => "attach_image",
            "name" => "bg",
            'label' => esc_html__('Title Background', 'noanet' )
        ),
        3
    );
    $kc->add_map_param(
        'kc_title',
        array(
            'name' => 'layout_type',
            'label' => esc_html__( 'Layout Type', 'noanet' ),
            'type' => 'select',
            'options' => array(
                '' => esc_html__( 'Default', 'noanet' ),
                'left' => esc_html__( 'Left', 'noanet' ),
                'st_center' => esc_html__( 'Center Bg', 'noanet' ),
                'st_left' => esc_html__( 'Left Bg', 'noanet' ),
                'st_right' => esc_html__( 'Right Bg', 'noanet' ),
            ),
        )
    );
    $kc->add_map_param(
        'kc_title',
        array(
            'name' => 'style',
            'label' => esc_html__( 'Style', 'noanet' ),
            'type' => 'select',
            'options' => array(
                'lighting' => esc_html__( 'Lighting', 'noanet' ),
                'dark' => esc_html__( 'Dark', 'noanet' ),
            ),
        )
    );

    $kc->add_map_param(
        'kc_pricing',
        array(
            "type" => "attach_image",
            "name" => "icon_image",
            'label' => esc_html__('Image', 'noanet' )
        ),
        4
    );
    $kc->add_map_param(
        'kc_pricing',
        array(
            'name' => 'label',
            'label' => esc_html__( 'Label', 'noanet' ),
            'type' => 'text',
        )
    );
    $kc->add_map_param(
        'kc_pricing',
        array(
            'name' => 'style',
            'label' => esc_html__( 'Style', 'noanet' ),
            'type' => 'select',
            'options' => array(
                '' => esc_html__( 'Default', 'noanet' ),
                'special' => esc_html__( 'Special', 'noanet' ),
            ),
        )
    );
    $kc->add_map_param(
        'kc_feature_box',
        array(
            'name' => 'link_feature',
            'label' => esc_html__( 'link when not show Button', 'noanet' ),
            'type' => 'text',
        )
    );
    $kc->add_map_param(
        'element_blog_posts',
        array(
            'name'          => 'thumbsize',
            'label'         => esc_html__( 'Image Size', 'noanet' ),
            'type'          => 'text',
            'description'   => esc_html__('Set the image size: "thumbnail", "medium", "large", "full" or "400x200"', 'noanet')
        )
    );
    $kc->add_map_param(
        'element_blog_posts',
        array(
            'name'          => 'link',
            'label'         => esc_html__( 'Link View All', 'noanet' ),
            'type'          => 'text',
        )
    );
}

if( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
    add_action('init', 'noanet_woocommerce_kingcomposer_map', 100 );
    function noanet_woocommerce_kingcomposer_map() {
        global $kc;
        if ( !is_object($kc) ) {
            return;
        }
        $kc->add_map( array('woo_products_package' => array(
            'name' => esc_html__( 'Apus Products Package', 'noanet' ),
            'description' => esc_html__('Display Products Package in frontend', 'noanet'),
            'icon' => 'sl-paper-plane',
            'category' => 'Woocommerce',
            'params' => array(
                array(
                    'type'          => 'autocomplete',
                    'label'         => esc_html__('Choose Products', 'noanet'),
                    'name'          => 'product_special',
                    'options'       => array(
                        'multiple'      => true,
                        'post_type'     => 'product',
                    ),
                ),
                array(
                    'name' => 'star_number',
                    'label' => esc_html__( 'Star Number', 'noanet' ),
                    'type' => 'number_slider',
                    'options' => array(
                        'min' => 1,
                        'max' => 5,
                        'unit' => '',
                        'show_input' => true
                    ),
                    'value' => 1
                ),
                array(
                    'name' => 'featrue',
                    'label' => esc_html__( 'Featrue' ,'noanet' ),
                    'type' => 'select',
                    'admin_label' => true,
                    'options' => array(
                        '' => esc_html__( 'Default' , 'noanet' ),
                        'feature' => esc_html__( 'Featrue' , 'noanet' ),
                    )
                ),
                array(
                    'name' => 'style',
                    'label' => esc_html__( 'Style' ,'noanet' ),
                    'type' => 'select',
                    'admin_label' => true,
                    'options' => array(
                        '' => esc_html__( 'Default' , 'noanet' ),
                        'image' => esc_html__( 'Image' , 'noanet' ),
                        'image_box' => esc_html__( 'Image Box White' , 'noanet' ),
                        'image_bg' => esc_html__( 'Image Bg' , 'noanet' ),
                        'transparent' => esc_html__( 'BG Transparent' , 'noanet' ),
                    )
                ),
            )
        )));
    }
}