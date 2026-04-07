<?php

if ( !function_exists('noanet_get_products') ) {
    function noanet_get_products($categories = array(), $product_type = 'featured_product', $paged = 1, $post_per_page = -1, $orderby = '', $order = '', $includes = array(), $excludes = array(), $author = null) {
        global $woocommerce, $wp_query;
        $args = array(
            'post_type' => 'product',
            'posts_per_page' => $post_per_page,
            'post_status' => 'publish',
            'paged' => $paged,
            'orderby'   => $orderby,
            'order' => $order
        );
        
        if ( isset( $args['orderby'] ) ) {
            if ( 'price' == $args['orderby'] ) {
                $args = array_merge( $args, array(
                    'meta_key'  => '_price',
                    'orderby'   => 'meta_value_num'
                ) );
            }
            if ( 'featured' == $args['orderby'] ) {
                $args = array_merge( $args, array(
                    'meta_key'  => '_featured',
                    'orderby'   => 'meta_value'
                ) );
            }
            if ( 'sku' == $args['orderby'] ) {
                $args = array_merge( $args, array(
                    'meta_key'  => '_sku',
                    'orderby'   => 'meta_value'
                ) );
            }
        }

        switch ($product_type) {
            case 'best_selling':
                $args['meta_key']='total_sales';
                $args['orderby']='meta_value_num';
                $args['ignore_sticky_posts']   = 1;
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                break;
            case 'featured_product':
                $args['ignore_sticky_posts']=1;
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = array(
                             'key' => '_featured',
                             'value' => 'yes'
                         );
                $query_args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                break;
            case 'top_rate':
                add_filter( 'posts_clauses',  array( $woocommerce->query, 'order_by_rating_post_clauses' ) );
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                break;
            case 'recent_product':
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                break;
            case 'deals':
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                $args['meta_query'][] =  array(
                    array(
                        'key'           => '_sale_price_dates_to',
                        'value'         => time(),
                        'compare'       => '>',
                        'type'          => 'numeric'
                    )
                );
                break;     
            case 'on_sale':
                $product_ids_on_sale    = wc_get_product_ids_on_sale();
                $product_ids_on_sale[]  = 0;
                $args['post__in'] = $product_ids_on_sale;
                break;
            case 'recent_review':
                if($post_per_page == -1) $_limit = 4;
                else $_limit = $post_per_page;
                global $wpdb;
                $query = "SELECT c.comment_post_ID FROM {$wpdb->prefix}posts p, {$wpdb->prefix}comments c
                        WHERE p.ID = c.comment_post_ID AND c.comment_approved > 0 AND p.post_type = 'product' AND p.post_status = 'publish' AND p.comment_count > 0
                        ORDER BY c.comment_date ASC";
                $results = $wpdb->get_results($query, OBJECT);
                $_pids = array();
                foreach ($results as $re) {
                    if(!in_array($re->comment_post_ID, $_pids))
                        $_pids[] = $re->comment_post_ID;
                    if(count($_pids) == $_limit)
                        break;
                }

                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                $args['post__in'] = $_pids;

                break;
            case 'rand':
                $args['orderby'] = 'rand';
                break;
            case 'recommended':
                $args['ignore_sticky_posts']=1;
                $args['meta_query'] = array();
                $args['meta_query'][] = $woocommerce->query->stock_status_meta_query();
                $args['meta_query'][] = array(
                             'key' => '_apus_recommended',
                             'value' => 'yes'
                         );
                $query_args['meta_query'][] = $woocommerce->query->visibility_meta_query();
                break;
        }

        if ( !empty($categories) && is_array($categories) ) {
            $args['tax_query']    = array(
                array(
                    'taxonomy'      => 'product_cat',
                    'field'         => 'slug',
                    'terms'         => $categories,
                    'operator'      => 'IN'
                )
            );
        }

        if (!empty($includes) && is_array($includes)) {
            $args['post__in'] = $includes;
        }
        
        if ( !empty($excludes) && is_array($excludes) ) {
            $args['post__not_in'] = $excludes;
        }

        if ( !empty($author) ) {
            $args['author'] = $author;
        }
        
        return new WP_Query($args);
    }
}

function noanet_autocomplete_options_helper( $options ){
    $output = array();
    $options = array_map('trim', explode(',', $options));
    foreach( $options as $option ){
        $tmp = explode( ":", $option );
        $output[] = $tmp[0];
    }
    return $output; 
}

// product type "Noanet"
add_filter( 'product_type_options', 'noanet_woocommerce_add_type_options' );
function noanet_woocommerce_add_type_options( $types ) {
    $types['noanet_package'] = array(
        'id'            => '_noanet_package',
        'wrapper_class' => 'show_if_simple',
        'label'         => esc_html__( 'Noanet Package', 'noanet' ),
        'default'       => 'no'
    );
    return $types;
}

add_action( 'woocommerce_process_product_meta', 'noanet_woocommerce_save_custom_fields_for_single_products', 10, 2 );
function noanet_woocommerce_save_custom_fields_for_single_products( $post_id, $post ) {
    if ( isset( $_POST['_noanet_package'] ) ){
        update_post_meta( $post_id, '_noanet_package',  'yes' );
    } else{
        update_post_meta( $post_id, '_noanet_package',  'no' );
    }
}
function noanet_woocommerce_pre_get_posts( $q ) {
    if ( ! $q->is_main_query() ) {
        return;
    }
    // Fix for verbose page rules
    if ( $q->is_archive && ((isset($q->query_vars['post_type']) && $q->query_vars['post_type'] == 'product') || isset($q->query_vars['product_cat'])) && !$q->is_admin ) {
        
        $q->set( 'meta_query', array(
            'relation' => 'OR',
            array(
               'key' => '_noanet_package',
               'value' => 'yes',
               'compare' => '!=',
            ),
            array(
                'key' => '_noanet_package',
                'value' => 'yes',
                'compare' => 'NOT EXISTS'
            )
        ));
    }
}
add_action( 'pre_get_posts', 'noanet_woocommerce_pre_get_posts', 10 );

function noanet_woocommerce_cart_item_permalink($link, $cart_item, $cart_item_key ) {
    $_product = $cart_item['data'];
    $_noanet_package = get_post_meta( $_product->get_id(), '_noanet_package', true );
    if ( $_noanet_package ) {
        return '';
    } else {
        return $link;
    }
}
add_filter( 'woocommerce_cart_item_permalink', 'noanet_woocommerce_cart_item_permalink', 100, 3 );













function noanet_woocommerce_setup() {
    global $pagenow;
    if ( is_admin() && isset($_GET['activated'] ) && $pagenow == 'themes.php' ) {
        $catalog = array(
            'width'     => '738',   // px
            'height'    => '738',   // px
            'crop'      => 1        // true
        );

        $single = array(
            'width'     => '800',   // px
            'height'    => '800',   // px
            'crop'      => 1        // true
        );

        $thumbnail = array(
            'width'     => '108',    // px
            'height'    => '108',   // px
            'crop'      => 1        // true
        );

        // Image sizes
        update_option( 'shop_catalog_image_size', $catalog );       // Product category thumbs
        update_option( 'shop_single_image_size', $single );         // Single product image
        update_option( 'shop_thumbnail_image_size', $thumbnail );   // Image gallery thumbs
    }
}

add_action( 'init', 'noanet_woocommerce_setup');

// hooks
if ( !function_exists('noanet_woocommerce_enqueue_styles') ) {
    function noanet_woocommerce_enqueue_styles() {
        wp_enqueue_style( 'noanet-woocommerce', get_template_directory_uri() .'/css/woocommerce.css' , 'noanet-woocommerce-front' );
        
        wp_enqueue_script( 'wc-add-to-cart-variation' );
    }
}
add_action( 'wp_enqueue_scripts', 'noanet_woocommerce_enqueue_styles', 99 );

// cart
if ( !function_exists('noanet_woocommerce_header_add_to_cart_fragment') ) {
    function noanet_woocommerce_header_add_to_cart_fragment( $fragments ){
        global $woocommerce;
        $fragments['.cart .count'] =  sprintf(_n(' <span class="count"> %d </span> ', ' <span class="count"> %d </span> ', $woocommerce->cart->cart_contents_count, 'noanet'), $woocommerce->cart->cart_contents_count);
        $fragments['.cart .mini-cart-total'] = trim( $woocommerce->cart->get_cart_total() );
        return $fragments;
    }
}
add_filter('woocommerce_add_to_cart_fragments', 'noanet_woocommerce_header_add_to_cart_fragment' );

// breadcrumb for woocommerce page
if ( !function_exists('noanet_woocommerce_breadcrumb_defaults') ) {
    function noanet_woocommerce_breadcrumb_defaults( $args ) {

        $breadcrumb_img = noanet_get_config('woo_breadcrumb_image');
        $breadcrumb_color = noanet_get_config('woo_breadcrumb_color');
        $style = array();
        $show_breadcrumbs = noanet_get_config('show_product_breadcrumbs');
        if ( !$show_breadcrumbs ) {
            $style[] = 'display:none';
        }
        if( $breadcrumb_color  ){
            $style[] = 'background-color:'.$breadcrumb_color;
        }
        if ( isset($breadcrumb_img['url']) && !empty($breadcrumb_img['url']) ) {
            $style[] = 'background-image:url(\''.esc_url($breadcrumb_img['url']).'\')';
        }
        $estyle = !empty($style)? ' style="'.implode(";", $style).'"':"";
        if ( is_single() ) {
            $title = esc_html__('Product Detail', 'noanet');
        } else {
            $title = esc_html__('Products List', 'noanet');
        }
        $args['wrap_before'] = '<section id="apus-breadscrumb" class="apus-breadscrumb"'.$estyle.'><div class="container"><div class="wrapper-breads"><div class="breadscrumb-inner"><ol class="apus-woocommerce-breadcrumb breadcrumb" ' . ( is_single() ? 'itemprop="breadcrumb"' : '' ) . '>';
        $args['wrap_after'] = '</ol><h2 class="bread-title">'.$title.'</h2><div class="breadscrumb-inner"></div></div></div></div></section>';
        
        return $args;
    }
}
add_filter( 'woocommerce_breadcrumb_defaults', 'noanet_woocommerce_breadcrumb_defaults' );
add_action( 'noanet_woo_template_main_before', 'woocommerce_breadcrumb', 30, 0 );

// display woocommerce modes
if ( !function_exists('noanet_woocommerce_display_modes') ) {
    function noanet_woocommerce_display_modes(){
        global $wp;
        $current_url = noanet_shop_page_link(true);

        $url_grid = add_query_arg( 'display_mode', 'grid', remove_query_arg( 'display_mode', $current_url ) );
        $url_list = add_query_arg( 'display_mode', 'list', remove_query_arg( 'display_mode', $current_url ) );

        $woo_mode = noanet_woocommerce_get_display_mode();

        echo '<div class="display-mode pull-right">';
        echo '<a href="'. esc_url($url_grid) .'" class=" change-view '.esc_attr($woo_mode == 'grid' ? 'active' : '').'"><i class="fa fa-th-large"></i></a>';
        echo '<a href="'. esc_url($url_list) .'" class=" change-view '.esc_attr($woo_mode == 'list' ? 'active' : '').'"><i class="fa fa-th-list"></i></a>';
        echo '</div>'; 
    }
}
add_action( 'woocommerce_before_shop_loop', 'noanet_woocommerce_display_modes' , 2 );

if ( !function_exists('noanet_woocommerce_get_display_mode') ) {
    function noanet_woocommerce_get_display_mode() {
        $woo_mode = noanet_get_config('product_display_mode', 'grid');
        $args = array( 'grid', 'list' );
        if ( isset($_COOKIE['noanet_woo_mode']) && in_array($_COOKIE['noanet_woo_mode'], $args) ) {
            $woo_mode = $_COOKIE['noanet_woo_mode'];
        }
        return $woo_mode;
    }
}

if(!function_exists('noanet_shop_page_link')) {
    function noanet_shop_page_link($keep_query = false ) {
        if ( defined( 'SHOP_IS_ON_FRONT' ) ) {
            $link = home_url();
        } elseif ( is_post_type_archive( 'product' ) || is_page( wc_get_page_id('shop') ) ) {
            $link = get_post_type_archive_link( 'product' );
        } else {
            $link = get_term_link( get_query_var('term'), get_query_var('taxonomy') );
        }

        if( $keep_query ) {
            // Keep query string vars intact
            foreach ( $_GET as $key => $val ) {
                if ( 'orderby' === $key || 'submit' === $key ) {
                    continue;
                }
                $link = add_query_arg( $key, $val, $link );

            }
        }
        return $link;
    }
}


if(!function_exists('noanet_filter_before')){
    function noanet_filter_before(){
        echo '<div class="apus-filter clearfix">';
    }
}
if(!function_exists('noanet_filter_after')){
    function noanet_filter_after(){
        echo '</div>';
    }
}
add_action( 'woocommerce_before_shop_loop', 'noanet_filter_before' , 1 );
add_action( 'woocommerce_before_shop_loop', 'noanet_filter_after' , 40 );

// set display mode to cookie
if ( !function_exists('noanet_before_woocommerce_init') ) {
    function noanet_before_woocommerce_init() {
        if( isset($_GET['display_mode']) && ($_GET['display_mode']=='list' || $_GET['display_mode']=='grid') ){  
            setcookie( 'noanet_woo_mode', trim($_GET['display_mode']) , time()+3600*24*100,'/' );
            $_COOKIE['noanet_woo_mode'] = trim($_GET['display_mode']);
        }
    }
}
add_action( 'init', 'noanet_before_woocommerce_init' );

// Number of products per page
if ( !function_exists('noanet_woocommerce_shop_per_page') ) {
    function noanet_woocommerce_shop_per_page($number) {
        $value = noanet_get_config('number_products_per_page');
        if ( is_numeric( $value ) && $value ) {
            $number = absint( $value );
        }
        return $number;
    }
}
add_filter( 'loop_shop_per_page', 'noanet_woocommerce_shop_per_page' );

// Number of products per row
if ( !function_exists('noanet_woocommerce_shop_columns') ) {
    function noanet_woocommerce_shop_columns($number) {
        $value = noanet_get_config('product_columns');
        if ( in_array( $value, array(2, 3, 4, 6) ) ) {
            $number = $value;
        }
        return $number;
    }
}
add_filter( 'loop_shop_columns', 'noanet_woocommerce_shop_columns' );

// share box
if ( !function_exists('noanet_woocommerce_share_box') ) {
    function noanet_woocommerce_share_box() {
        if ( noanet_get_config('show_product_social_share') ) {
            get_template_part( 'page-templates/parts/sharebox' );
        }
    }
}
add_filter( 'woocommerce_single_product_summary', 'noanet_woocommerce_share_box', 100 );


// quickview
if ( !function_exists('noanet_woocommerce_quickview') ) {
    function noanet_woocommerce_quickview() {
        if ( !empty($_GET['product_id']) ) {
            $args = array(
                'post_type' => 'product',
                'post__in' => array($_GET['product_id'])
            );
            $query = new WP_Query($args);
            if ( $query->have_posts() ) {
                while ($query->have_posts()): $query->the_post(); global $product;
                    wc_get_template_part( 'content', 'product-quickview' );
                endwhile;
            }
            wp_reset_postdata();
        }
        die;
    }
}

function noanet_woocommerce_quickview_action() {
    if ( noanet_get_config('show_quickview') ) {
        add_action( 'wp_ajax_noanet_quickview_product', 'noanet_woocommerce_quickview' );
        add_action( 'wp_ajax_nopriv_noanet_quickview_product', 'noanet_woocommerce_quickview' );
    }
}
add_action( 'init', 'noanet_woocommerce_quickview_action');

// swap effect
if ( !function_exists('noanet_swap_images') ) {
    function noanet_swap_images() {
        global $post, $product, $woocommerce;
        
        $output = '';
        $class = 'image-no-effect unveil-image';
        if (has_post_thumbnail()) {
            if ( noanet_get_config('product_image_display') == 'swap' ) {
                $attachment_ids = $product->get_gallery_image_ids();
                if ($attachment_ids && isset($attachment_ids[0])) {
                    $class = 'image-hover';
                    $product_thumbnail_title = get_the_title( $attachment_ids[0] );
                    $product_thumbnail = wp_get_attachment_image_src( $attachment_ids[0], 'shop_catalog' );
                    $placeholder_image = noanet_create_placeholder(array($product_thumbnail[1],$product_thumbnail[2]));
                    if ( noanet_get_config('image_lazy_loading') ) {
                        $output .= '<img src="' . esc_url( $placeholder_image ) . '" data-src="' . esc_url( $product_thumbnail[0] ) . '" width="' . esc_attr( $product_thumbnail[1] ) . '" height="' . esc_attr( $product_thumbnail[2] ) . '" alt="' . esc_attr( $product_thumbnail_title ) . '" class="attachment-shop-catalog unveil-image image-effect" />';
                    } else {
                        $output .= '<img src="' . esc_url( $product_thumbnail[0] ) . '" width="' . esc_attr( $product_thumbnail[1] ) . '" height="' . esc_attr( $product_thumbnail[2] ) . '" alt="' . esc_attr( $product_thumbnail_title ) . '" class="attachment-shop-catalog image-effect" />';
                    }
                }
            }
            $product_thumbnail_id = get_post_thumbnail_id();
            $product_thumbnail_title = get_the_title( $product_thumbnail_id );
            $product_thumbnail = wp_get_attachment_image_src( $product_thumbnail_id, 'shop_catalog' );
            $placeholder_image = noanet_create_placeholder(array($product_thumbnail[1],$product_thumbnail[2]));

            if ( noanet_get_config('image_lazy_loading') ) {
                $output .= '<img src="' . esc_url( $placeholder_image ) . '" data-src="' . esc_url( $product_thumbnail[0] ) . '" width="' . esc_attr( $product_thumbnail[1] ) . '" height="' . esc_attr( $product_thumbnail[2] ) . '" alt="' . esc_attr( $product_thumbnail_title ) . '" class="attachment-shop-catalog unveil-image '.esc_attr($class).'" />';
            } else {
                $output .= '<img src="' . esc_url( $product_thumbnail[0] ) . '" width="' . esc_attr( $product_thumbnail[1] ) . '" height="' . esc_attr( $product_thumbnail[2] ) . '" alt="' . esc_attr( $product_thumbnail_title ) . '" class="attachment-shop-catalog '.esc_attr($class).'" />';
            }
        } else {
            $image_sizes = get_option('shop_catalog_image_size');
            $placeholder_width = $image_sizes['width'];
            $placeholder_height = $image_sizes['height'];

            $output .= '<img src="'.wc_placeholder_img_src().'" alt="'.esc_html__('Placeholder' , 'noanet').'" class="'.$class.'" width="'.$placeholder_width.'" height="'.$placeholder_height.'" />';
        }
        echo wp_kses_post($output);
    }
}
//remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
//add_action('woocommerce_before_shop_loop_item_title', 'noanet_swap_images', 10);

// layout class for woo page
if ( !function_exists('noanet_woocommerce_content_class') ) {
    function noanet_woocommerce_content_class( $class ) {
        $page = 'archive';
        if ( is_singular( 'product' ) ) {
            $page = 'single';
        }
        if( noanet_get_config('product_'.$page.'_fullwidth') ) {
            return 'container-fluid';
        }
        return $class;
    }
}
add_filter( 'noanet_woocommerce_content_class', 'noanet_woocommerce_content_class' );

// get layout configs
if ( !function_exists('noanet_get_woocommerce_layout_configs') ) {
    function noanet_get_woocommerce_layout_configs() {
        $page = 'archive';
        if ( is_singular( 'product' ) ) {
            $page = 'single';
        }
        $left = noanet_get_config('product_'.$page.'_left_sidebar');
        $right = noanet_get_config('product_'.$page.'_right_sidebar');

        switch ( noanet_get_config('product_'.$page.'_layout') ) {
            case 'left-main':
                $configs['left'] = array( 'sidebar' => $left, 'class' => 'col-md-3 col-sm-12 col-xs-12'  );
                $configs['main'] = array( 'class' => 'col-md-9 col-sm-12 col-xs-12' );
                break;
            case 'main-right':
                $configs['right'] = array( 'sidebar' => $right,  'class' => 'col-md-3 col-sm-12 col-xs-12' ); 
                $configs['main'] = array( 'class' => 'col-md-9 col-sm-12 col-xs-12' );
                break;
            case 'main':
                $configs['main'] = array( 'class' => 'col-md-12 col-sm-12 col-xs-12' );
                break;
            case 'left-main-right':
                $configs['left'] = array( 'sidebar' => $left,  'class' => 'col-md-3 col-sm-12 col-xs-12'  );
                $configs['right'] = array( 'sidebar' => $right, 'class' => 'col-md-3 col-sm-12 col-xs-12' ); 
                $configs['main'] = array( 'class' => 'col-md-6 col-sm-12 col-xs-12' );
                break;
            default:
                $configs['main'] = array( 'class' => 'col-md-12 col-sm-12 col-xs-12' );
                break;
        }

        return $configs; 
    }
}

// Show/Hide related, upsells products
if ( !function_exists('noanet_woocommerce_related_upsells_products') ) {
    function noanet_woocommerce_related_upsells_products($located, $template_name) {
        $content_none = get_template_directory() . '/woocommerce/content-none.php';
        $show_product_releated = noanet_get_config('show_product_releated');
        if ( 'single-product/related.php' == $template_name ) {
            if ( !$show_product_releated  ) {
                $located = $content_none;
            }
        } elseif ( 'single-product/up-sells.php' == $template_name ) {
            $show_product_upsells = noanet_get_config('show_product_upsells');
            if ( !$show_product_upsells ) {
                $located = $content_none;
            }
        }

        return apply_filters( 'noanet_woocommerce_related_upsells_products', $located, $template_name );
    }
}
add_filter( 'wc_get_template', 'noanet_woocommerce_related_upsells_products', 10, 2 );

if ( !function_exists( 'noanet_product_review_tab' ) ) {
    function noanet_product_review_tab($tabs) {
        if ( !noanet_get_config('show_product_review_tab') && isset($tabs['reviews']) ) {
            unset( $tabs['reviews'] ); 
        }
        return $tabs;
    }
}
add_filter( 'woocommerce_product_tabs', 'noanet_product_review_tab', 100 );
