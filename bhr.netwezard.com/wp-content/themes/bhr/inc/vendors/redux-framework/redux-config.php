<?php
/**
 * ReduxFramework Sample Config File
 * For full documentation, please visit: http://docs.reduxframework.com/
 */

if (!class_exists('Noanet_Redux_Framework_Config')) {

    class Noanet_Redux_Framework_Config
    {
        public $args = array();
        public $sections = array();
        public $ReduxFramework;

        public function __construct()
        {
            if (!class_exists('ReduxFramework')) {
                return;
            }
            add_action('init', array($this, 'initSettings'), 10);
        }

        public function initSettings()
        {
            // Set the default arguments
            $this->setArguments();

            // Create the sections and fields
            $this->setSections();

            if (!isset($this->args['opt_name'])) { // No errors please
                return;
            }

            // If Redux is running as a plugin, this will remove the demo notice and links
            $this->ReduxFramework = new ReduxFramework($this->sections, $this->args);
        }

        public function setSections()
        {
            global $wp_registered_sidebars;
            $sidebars = array();

            if ( !empty($wp_registered_sidebars) ) {
                foreach ($wp_registered_sidebars as $sidebar) {
                    $sidebars[$sidebar['id']] = $sidebar['name'];
                }
            }
            $columns = array( '1' => esc_html__('1 Column', 'noanet'),
                '2' => esc_html__('2 Columns', 'noanet'),
                '3' => esc_html__('3 Columns', 'noanet'),
                '4' => esc_html__('4 Columns', 'noanet'),
                '5' => esc_html__('5 Columns', 'noanet'),
                '6' => esc_html__('6 Columns', 'noanet')
            );
            
            $general_fields = array();
            if ( !function_exists( 'wp_site_icon' ) ) {
                $general_fields[] = array(
                    'id' => 'media-favicon',
                    'type' => 'media',
                    'title' => esc_html__('Favicon Upload', 'noanet'),
                    'desc' => esc_html__('', 'noanet'),
                    'subtitle' => esc_html__('Upload a 16px x 16px .png or .gif image that will be your favicon.', 'noanet'),
                );
            }
            $general_fields[] = array(
                'id' => 'preload',
                'type' => 'switch',
                'title' => esc_html__('Preload Website', 'noanet'),
                'default' => true,
            );
            $general_fields[] = array(
                'id' => 'image_lazy_loading',
                'type' => 'switch',
                'title' => esc_html__('Image Lazy Loading', 'noanet'),
                'default' => true,
            );
            // General Settings Tab
            $this->sections[] = array(
                'icon' => 'el-icon-cogs',
                'title' => esc_html__('General', 'noanet'),
                'fields' => $general_fields
            );
            // Header
            $this->sections[] = array(
                'icon' => 'el el-website',
                'title' => esc_html__('Header', 'noanet'),
                'fields' => array(
                    array(
                        'id' => 'media-logo',
                        'type' => 'media',
                        'title' => esc_html__('Logo Upload', 'noanet'),
                        'subtitle' => esc_html__('Upload a .png or .gif image that will be your logo.', 'noanet'),
                    ),
                    array(
                        'id' => 'media-mobile-logo',
                        'type' => 'media',
                        'title' => esc_html__('Mobile Logo Upload', 'noanet'),
                        'subtitle' => esc_html__('Upload a .png or .gif image that will be your logo.', 'noanet'),
                    ),
                    array(
                        'id' => 'header_type',
                        'type' => 'select',
                        'title' => esc_html__('Header Layout Type', 'noanet'),
                        'subtitle' => esc_html__('Choose a header for your website.', 'noanet'),
                        'options' => noanet_get_header_layouts()
                    ),
                    array(
                        'id' => 'livechat',
                        'type' => 'text',
                        'title' => esc_html__('Link Live Chat for Header V4', 'noanet'),
                        'default' => ''
                    ),
                    array(
                        'id' => 'textlivechat',
                        'type' => 'text',
                        'title' => esc_html__('Text Live Chat for Header V4', 'noanet'),
                        'default' => ''
                    ),
                    array(
                        'id' => 'keep_header',
                        'type' => 'switch',
                        'title' => esc_html__('Keep Header When Scroll Mouse', 'noanet'),
                        'default' => false
                    ),
                    array(
                        'id'=>'show_login',
                        'type' => 'switch',
                        'title' => esc_html__('Show Login', 'noanet'),
                        'default' => true,
                        'on' => esc_html__('Yes', 'noanet'),
                        'off' => esc_html__('No', 'noanet'),
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Search Form', 'noanet'),
                'fields' => array(
                    array(
                        'id'=>'show_searchform',
                        'type' => 'switch',
                        'title' => esc_html__('Show Search Form', 'noanet'),
                        'default' => true,
                        'on' => esc_html__('Yes', 'noanet'),
                        'off' => esc_html__('No', 'noanet'),
                    ),
                    array(
                        'id'=>'search_type',
                        'type' => 'button_set',
                        'title' => esc_html__('Search Content Type', 'noanet'),
                        'required' => array('show_searchform','equals',true),
                        'options' => array('all' => esc_html__('All', 'noanet'), 'post' => esc_html__('Post', 'noanet')),
                        'default' => 'all'
                    ),
                )
            );
            // Footer
            $this->sections[] = array(
                'icon' => 'el el-website',
                'title' => esc_html__('Footer', 'noanet'),
                'fields' => array(
                    array(
                        'id' => 'footer_type',
                        'type' => 'select',
                        'title' => esc_html__('Footer Layout Type', 'noanet'),
                        'subtitle' => esc_html__('Choose a footer for your website.', 'noanet'),
                        'options' => noanet_get_footer_layouts()
                    ),
                    array(
                        'id' => 'back_to_top',
                        'type' => 'switch',
                        'title' => esc_html__('Back To Top Button', 'noanet'),
                        'subtitle' => esc_html__('Toggle whether or not to enable a back to top button on your pages.', 'noanet'),
                        'default' => true,
                    ),
                )
            );

            // Blog settings
            $this->sections[] = array(
                'icon' => 'el el-pencil',
                'title' => esc_html__('Blog', 'noanet'),
                'fields' => array(
                    array(
                        'id' => 'show_blog_breadcrumbs',
                        'type' => 'switch',
                        'title' => esc_html__('Breadcrumbs', 'noanet'),
                        'default' => 1
                    ),
                    array (
                        'title' => esc_html__('Breadcrumbs Background Color', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('The breadcrumbs background color of the site.', 'noanet').'</em>',
                        'id' => 'blog_breadcrumb_color',
                        'type' => 'color',
                        'transparent' => false,
                    ),
                    array(
                        'id' => 'blog_breadcrumb_image',
                        'type' => 'media',
                        'title' => esc_html__('Breadcrumbs Background', 'noanet'),
                        'subtitle' => esc_html__('Upload a .jpg or .png image that will be your breadcrumbs.', 'noanet'),
                    ),
                )
            );
            // Archive Blogs settings
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Blog & Post Archives', 'noanet'),
                'fields' => array(
                    array(
                        'id' => 'blog_archive_layout',
                        'type' => 'image_select',
                        'compiler' => true,
                        'title' => esc_html__('Sidebar position', 'noanet'),
                        'subtitle' => esc_html__('Select the variation you want to apply on your store.', 'noanet'),
                        'options' => array(
                            'main' => array(
                                'title' => esc_html__('Main Only', 'noanet'),
                                'alt' => esc_html__('Main Only', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen1.png'
                            ),
                            'left-main' => array(
                                'title' => esc_html__('Left - Main Sidebar', 'noanet'),
                                'alt' => esc_html__('Left - Main Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen2.png'
                            ),
                            'main-right' => array(
                                'title' => esc_html__('Main - Right Sidebar', 'noanet'),
                                'alt' => esc_html__('Main - Right Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen3.png'
                            ),
                            'left-main-right' => array(
                                'title' => esc_html__('Left - Main - Right Sidebar', 'noanet'),
                                'alt' => esc_html__('Left - Main - Right Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen4.png'
                            ),
                        ),
                        'default' => 'left-main'
                    ),
                    array(
                        'id' => 'blog_archive_fullwidth',
                        'type' => 'switch',
                        'title' => esc_html__('Is Full Width?', 'noanet'),
                        'default' => false
                    ),
                    array(
                        'id' => 'blog_archive_left_sidebar',
                        'type' => 'select',
                        'title' => esc_html__('Archive Left Sidebar', 'noanet'),
                        'subtitle' => esc_html__('Choose a sidebar for left sidebar.', 'noanet'),
                        'options' => $sidebars
                    ),
                    array(
                        'id' => 'blog_archive_right_sidebar',
                        'type' => 'select',
                        'title' => esc_html__('Archive Right Sidebar', 'noanet'),
                        'subtitle' => esc_html__('Choose a sidebar for right sidebar.', 'noanet'),
                        'options' => $sidebars
                        
                    ),
                    array(
                        'id' => 'blog_display_mode',
                        'type' => 'select',
                        'title' => esc_html__('Display Mode', 'noanet'),
                        'options' => array(
                            'grid' => esc_html__('Grid Layout', 'noanet'),
                            'mansory' => esc_html__('Mansory Layout', 'noanet'),
                            'list' => esc_html__('List Layout', 'noanet'),
                            'chess' => esc_html__('Chess Layout', 'noanet'),
                            'timeline' => esc_html__('Timeline Layout', 'noanet'),
                        ),
                        'default' => 'grid'
                    ),
                    array(
                        'id' => 'blog_columns',
                        'type' => 'select',
                        'title' => esc_html__('Blog Columns', 'noanet'),
                        'options' => $columns,
                        'default' => 4
                    ),
                    array(
                        'id' => 'blog_item_style',
                        'type' => 'select',
                        'title' => esc_html__('Blog Item Style', 'noanet'),
                        'options' => array(
                            'grid' => esc_html__('Grid', 'noanet'),
                            'list' => esc_html__('List', 'noanet')
                        ),
                        'default' => 'grid'
                    ),
                    array(
                        'id' => 'blog_item_thumbsize',
                        'type' => 'text',
                        'title' => esc_html__('Thumbnail Size', 'noanet'),
                        'desc' => esc_html__('Enter thumbnail size. Example: thumbnail, medium, large, full or other sizes defined by current theme.', 'noanet'),
                    ),

                )
            );
            // Single Blogs settings
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Blog', 'noanet'),
                'fields' => array(
                    
                    array(
                        'id' => 'blog_single_layout',
                        'type' => 'image_select',
                        'compiler' => true,
                        'title' => esc_html__('Sidebar position', 'noanet'),
                        'subtitle' => esc_html__('Select the variation you want to apply on your store.', 'noanet'),
                        'options' => array(
                            'main' => array(
                                'title' => esc_html__('Main Only', 'noanet'),
                                'alt' => esc_html__('Main Only', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen1.png'
                            ),
                            'left-main' => array(
                                'title' => esc_html__('Left - Main Sidebar', 'noanet'),
                                'alt' => esc_html__('Left - Main Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen2.png'
                            ),
                            'main-right' => array(
                                'title' => esc_html__('Main - Right Sidebar', 'noanet'),
                                'alt' => esc_html__('Main - Right Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen3.png'
                            ),
                            'left-main-right' => array(
                                'title' => esc_html__('Left - Main - Right Sidebar', 'noanet'),
                                'alt' => esc_html__('Left - Main - Right Sidebar', 'noanet'),
                                'img' => get_template_directory_uri() . '/inc/assets/images/screen4.png'
                            ),
                        ),
                        'default' => 'left-main'
                    ),
                    array(
                        'id' => 'blog_single_fullwidth',
                        'type' => 'switch',
                        'title' => esc_html__('Is Full Width?', 'noanet'),
                        'default' => false
                    ),
                    array(
                        'id' => 'blog_single_left_sidebar',
                        'type' => 'select',
                        'title' => esc_html__('Single Blog Left Sidebar', 'noanet'),
                        'subtitle' => esc_html__('Choose a sidebar for left sidebar.', 'noanet'),
                        'options' => $sidebars
                    ),
                    array(
                        'id' => 'blog_single_right_sidebar',
                        'type' => 'select',
                        'title' => esc_html__('Single Blog Right Sidebar', 'noanet'),
                        'subtitle' => esc_html__('Choose a sidebar for right sidebar.', 'noanet'),
                        'options' => $sidebars
                    ),
                    array(
                        'id' => 'show_blog_social_share',
                        'type' => 'switch',
                        'title' => esc_html__('Show Social Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'show_blog_releated',
                        'type' => 'switch',
                        'title' => esc_html__('Show Releated Posts', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'number_blog_releated',
                        'type' => 'text',
                        'title' => esc_html__('Number of related posts to show', 'noanet'),
                        'required' => array('show_blog_releated', '=', '1'),
                        'default' => 4,
                        'min' => '1',
                        'step' => '1',
                        'max' => '20',
                        'type' => 'slider'
                    ),
                    array(
                        'id' => 'releated_blog_columns',
                        'type' => 'select',
                        'title' => esc_html__('Releated Blogs Columns', 'noanet'),
                        'required' => array('show_blog_releated', '=', '1'),
                        'options' => $columns,
                        'default' => 4
                    ),
                )
            );
// Woocommerce
            if( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
                $this->sections[] = array(
                    'icon' => 'el el-shopping-cart',
                    'title' => esc_html__('Woocommerce', 'noanet'),
                    'fields' => array(
                        array(
                            'id' => 'show_product_breadcrumbs',
                            'type' => 'switch',
                            'title' => esc_html__('Breadcrumbs', 'noanet'),
                            'default' => 1
                        ),
                        array (
                            'title' => esc_html__('Breadcrumbs Background Color', 'noanet'),
                            'subtitle' => '<em>'.esc_html__('The breadcrumbs background color of the site.', 'noanet').'</em>',
                            'id' => 'woo_breadcrumb_color',
                            'type' => 'color',
                            'transparent' => false,
                        ),
                        array(
                            'id' => 'woo_breadcrumb_image',
                            'type' => 'media',
                            'title' => esc_html__('Breadcrumbs Background', 'noanet'),
                            'subtitle' => esc_html__('Upload a .jpg or .png image that will be your breadcrumbs.', 'noanet'),
                        )
                    )
                );
                // Archive settings
                $this->sections[] = array(
                    'subsection' => true,
                    'title' => esc_html__('Product Archives', 'noanet'),
                    'fields' => array(
                        array(
                            'id' => 'product_archive_layout',
                            'type' => 'image_select',
                            'compiler' => true,
                            'title' => esc_html__('Archive Product Layout', 'noanet'),
                            'subtitle' => esc_html__('Select the layout you want to apply on your archive product page.', 'noanet'),
                            'options' => array(
                                'main' => array(
                                    'title' => 'Main Content',
                                    'alt' => 'Main Content',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen1.png'
                                ),
                                'left-main' => array(
                                    'title' => 'Left Sidebar - Main Content',
                                    'alt' => 'Left Sidebar - Main Content',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen2.png'
                                ),
                                'main-right' => array(
                                    'title' => 'Main Content - Right Sidebar',
                                    'alt' => 'Main Content - Right Sidebar',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen3.png'
                                ),
                                'left-main-right' => array(
                                    'title' => 'Left Sidebar - Main Content - Right Sidebar',
                                    'alt' => 'Left Sidebar - Main Content - Right Sidebar',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen4.png'
                                ),
                            ),
                            'default' => 'left-main'
                        ),
                        array(
                            'id' => 'product_archive_fullwidth',
                            'type' => 'switch',
                            'title' => esc_html__('Is Full Width?', 'noanet'),
                            'default' => false
                        ),
                        array(
                            'id' => 'product_archive_left_sidebar',
                            'type' => 'select',
                            'title' => esc_html__('Archive Left Sidebar', 'noanet'),
                            'subtitle' => esc_html__('Choose a sidebar for left sidebar.', 'noanet'),
                            'options' => $sidebars
                        ),
                        array(
                            'id' => 'product_archive_right_sidebar',
                            'type' => 'select',
                            'title' => esc_html__('Archive Right Sidebar', 'noanet'),
                            'subtitle' => esc_html__('Choose a sidebar for right sidebar.', 'noanet'),
                            'options' => $sidebars
                        ),
                        array(
                            'id' => 'product_display_mode',
                            'type' => 'select',
                            'title' => esc_html__('Display Mode', 'noanet'),
                            'subtitle' => esc_html__('Choose a default layout archive product.', 'noanet'),
                            'options' => array('grid' => esc_html__('Grid', 'noanet'), 'list' => esc_html__('List', 'noanet')),
                            'default' => 'grid'
                        ),
                        array(
                            'id' => 'number_products_per_page',
                            'type' => 'text',
                            'title' => esc_html__('Number of Products Per Page', 'noanet'),
                            'default' => 12,
                            'min' => '1',
                            'step' => '1',
                            'max' => '100',
                            'type' => 'slider'
                        ),
                        array(
                            'id' => 'product_columns',
                            'type' => 'select',
                            'title' => esc_html__('Product Columns', 'noanet'),
                            'options' => $columns,
                            'default' => 4
                        ),
                        array(
                            'id' => 'show_swap_image',
                            'type' => 'switch',
                            'title' => esc_html__('Show Second Image (Hover)', 'noanet'),
                            'default' => 1
                        ),
                    )
                );
                // Product Page
                $this->sections[] = array(
                    'subsection' => true,
                    'title' => esc_html__('Single Product', 'noanet'),
                    'fields' => array(
                        array(
                            'id' => 'product_single_layout',
                            'type' => 'image_select',
                            'compiler' => true,
                            'title' => esc_html__('Single Product Layout', 'noanet'),
                            'subtitle' => esc_html__('Select the layout you want to apply on your Single Product Page.', 'noanet'),
                            'options' => array(
                                'main' => array(
                                    'title' => 'Main Only',
                                    'alt' => 'Main Only',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen1.png'
                                ),
                                'left-main' => array(
                                    'title' => 'Left - Main Sidebar',
                                    'alt' => 'Left - Main Sidebar',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen2.png'
                                ),
                                'main-right' => array(
                                    'title' => 'Main - Right Sidebar',
                                    'alt' => 'Main - Right Sidebar',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen3.png'
                                ),
                                'left-main-right' => array(
                                    'title' => 'Left - Main - Right Sidebar',
                                    'alt' => 'Left - Main - Right Sidebar',
                                    'img' => get_template_directory_uri() . '/inc/assets/images/screen4.png'
                                ),
                            ),
                            'default' => 'left-main'
                        ),
                        array(
                            'id' => 'product_single_fullwidth',
                            'type' => 'switch',
                            'title' => esc_html__('Is Full Width?', 'noanet'),
                            'default' => false
                        ),
                        array(
                            'id' => 'product_single_left_sidebar',
                            'type' => 'select',
                            'title' => esc_html__('Single Product Left Sidebar', 'noanet'),
                            'subtitle' => esc_html__('Choose a sidebar for left sidebar.', 'noanet'),
                            'options' => $sidebars
                        ),
                        array(
                            'id' => 'product_single_right_sidebar',
                            'type' => 'select',
                            'title' => esc_html__('Single Product Right Sidebar', 'noanet'),
                            'subtitle' => esc_html__('Choose a sidebar for right sidebar.', 'noanet'),
                            'options' => $sidebars
                        ),
                        array(
                            'id' => 'show_product_social_share',
                            'type' => 'switch',
                            'title' => esc_html__('Show Social Share', 'noanet'),
                            'default' => 1
                        ),
                        array(
                            'id' => 'show_product_review_tab',
                            'type' => 'switch',
                            'title' => esc_html__('Show Product Review Tab', 'noanet'),
                            'default' => 1
                        ),
                        array(
                            'id' => 'show_product_releated',
                            'type' => 'switch',
                            'title' => esc_html__('Show Products Releated', 'noanet'),
                            'default' => 1
                        ),
                        array(
                            'id' => 'show_product_upsells',
                            'type' => 'switch',
                            'title' => esc_html__('Show Products upsells', 'noanet'),
                            'default' => 1
                        ),
                        array(
                            'id' => 'number_product_releated',
                            'title' => esc_html__('Number of related/upsells products to show', 'noanet'),
                            'default' => 3,
                            'min' => '1',
                            'step' => '1',
                            'max' => '20',
                            'type' => 'slider'
                        ),
                        array(
                            'id' => 'releated_product_columns',
                            'type' => 'select',
                            'title' => esc_html__('Releated Products Columns', 'noanet'),
                            'options' => $columns,
                            'default' => 3
                        ),

                    )
                );
            }
            //Style
            $this->sections[] = array(
                'icon' => 'el el-icon-css',
                'title' => esc_html__('Style', 'noanet'),
                'fields' => array(
                    array (
                        'id' => 'main_font_info',
                        'icon' => true,
                        'type' => 'info',
                        'raw' => '<h3 style="margin: 0;"> '.esc_html__('Content', 'noanet').'</h3>',
                    ),
                    array (
                        'title' => esc_html__('Main Theme Color', 'noanet'),
                        'subtitle' => esc_html__('The main color of the site.', 'noanet'),
                        'id' => 'main_color',
                        'type' => 'color',
                        'transparent' => false,
                    ),
                    array (
                        'id' => 'site_background',
                        'type' => 'background',
                        'title' => esc_html__('Site Background', 'noanet'),
                        'output' => 'body'
                    ),
                    array (
                        'id' => 'container_bg',
                        'type' => 'color_rgba',
                        'title' => esc_html__('Container Background Color', 'noanet'),
                        'output' => array(
                            'background-color' =>'.wrapper-container, .apus-mfp-zoom-in .mfp-inline-holder .mfp-content, .dropdown-menu'
                        )
                    ),
                    array (
                        'id' => 'forms_inputs_bg',
                        'type' => 'color_rgba',
                        'title' => esc_html__('Forms inputs Color', 'noanet'),
                        'output' => array(
                            'background-color' =>'#commentform textarea, #commentform input:not(.btn), .mc4wp-form-basic .form-control, .search-form .form-control, .section-contact textarea, .section-contact input:not(.btn), .section-contact select'
                        )
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Typography', 'noanet'),
                'fields' => array(
                    
                    array (
                        'id' => 'main_font_info',
                        'icon' => true,
                        'type' => 'info',
                        'raw' => '<h3 style="margin: 0;"> '.esc_html__('Body Font', 'noanet').'</h3>',
                    ),
                    // Standard + Google Webfonts
                    array (
                        'title' => esc_html__('Font Face', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the Main Font for your site.', 'noanet').'</em>',
                        'id' => 'main_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        
                        'output' => array(
                            'body, .kc_text_block .intro .title, .kc_vertical_tabs > .kc_wrapper > ul.ui-tabs-nav > li > a'
                        )
                    ),
                    
                    // Header
                    array (
                        'id' => 'secondary_font_info',
                        'icon' => true,
                        'type' => 'info',
                        'raw' => '<h3 style="margin: 0;"> '.esc_html__('Heading', 'noanet').'</h3>',
                    ),
                    array (
                        'title' => esc_html__('H1 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H1 Font for your site.', 'noanet').'</em>',
                        'id' => 'h1_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h1'
                        )
                    ),
                    array (
                        'title' => esc_html__('H2 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H2 Font for your site.', 'noanet').'</em>',
                        'id' => 'h2_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h2'
                        )
                    ),
                    array (
                        'title' => esc_html__('H3 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H3 Font for your site.', 'noanet').'</em>',
                        'id' => 'h3_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h3'
                        )
                    ),
                    array (
                        'title' => esc_html__('H4 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H4 Font for your site.', 'noanet').'</em>',
                        'id' => 'h4_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h4'
                        )
                    ),
                    array (
                        'title' => esc_html__('H5 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H5 Font for your site.', 'noanet').'</em>',
                        'id' => 'h5_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h5'
                        )
                    ),
                    array (
                        'title' => esc_html__('H6 Font', 'noanet'),
                        'subtitle' => '<em>'.esc_html__('Pick the H6 Font for your site.', 'noanet').'</em>',
                        'id' => 'h6_font',
                        'type' => 'typography',
                        'line-height' => true,
                        'text-align' => false,
                        'font-style' => false,
                        'font-weight' => true,
                        'all_styles'=> true,
                        'font-size' => true,
                        'color' => true,
                        'output' => array(
                            'h6'
                        )
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Top Bar', 'noanet'),
                'fields' => array(
                    array(
                        'id'=>'topbar_bg',
                        'type' => 'background',
                        'title' => esc_html__('Background', 'noanet'),
                        'output' => '#apus-topbar.apus-topbar'
                    ),
                    array(
                        'title' => esc_html__('Text Color', 'noanet'),
                        'id' => 'topbar_text_color',
                        'type' => 'color_rgba',
                        'output' => array(
                            'color' =>'#apus-topbar, .contact-topbar-2'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color', 'noanet'),
                        'id' => 'topbar_link_color',
                        'type' => 'color_rgba',
                        'output' => array(
                            'color' =>'#apus-topbar a'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color When Hover', 'noanet'),
                        'id' => 'topbar_link_color_hover',
                        'type' => 'color_rgba',
                        'output' => array(
                            'color' =>'#apus-topbar a:hover'
                        )
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Header', 'noanet'),
                'fields' => array(
                    array(
                        'id'=>'header_bg',
                        'type' => 'background',
                        'title' => esc_html__('Background', 'noanet'),
                        'output' => '#apus-header'
                    ),
                    array(
                        'title' => esc_html__('Text Color', 'noanet'),
                        'id' => 'header_text_color',
                        'type' => 'color',
                        'output' => array(
                            'color' =>'#apus-header'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color', 'noanet'),
                        'id' => 'header_link_color',
                        'type' => 'color',
                        'output' => array(
                            'color' =>'#apus-header a'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color Active', 'noanet'),
                        'id' => 'header_link_color_active',
                        'type' => 'color',
                        'output' => array(
                            'color' =>'#apus-header .active > a, #apus-header a:active, #apus-header a:hover'
                        )
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Main Menu', 'noanet'),
                'fields' => array(
                    array(
                        'title' => esc_html__('Link Color', 'noanet'),
                        'id' => 'main_menu_link_color',
                        'type' => 'color',
                        'output' => array(
                            'color' =>'#apus-header .main-menu  a'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color Active', 'noanet'),
                        'id' => 'main_menu_link_color_active',
                        'type' => 'color',
                        'output' => array(
                            'color' =>'#apus-header .main-menu .active > a, #apus-header .main-menu a:active, #apus-header .main-menu a:hover'
                        )
                    ),
                )
            );
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Footer', 'noanet'),
                'fields' => array(
                    array(
                        'id'=>'footer_bg',
                        'type' => 'background',
                        'title' => esc_html__('Background', 'noanet'),
                        'output' => '.apus-footer .dark'
                    ),
                    array(
                        'title' => esc_html__('Heading Color', 'noanet'),
                        'id' => 'footer_heading_color',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-footer .widget-title, #apus-footer .kc_title'
                        )
                    ),
                    array(
                        'title' => esc_html__('Text Color', 'noanet'),
                        'id' => 'footer_text_color',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-footer, .apus-footer .contact-info, .apus-copyright'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color', 'noanet'),
                        'id' => 'footer_link_color',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-footer a'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color Hover', 'noanet'),
                        'id' => 'footer_link_color_hover',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-footer a:hover'
                        )
                    ),
                )
            );
            
            $this->sections[] = array(
                'subsection' => true,
                'title' => esc_html__('Copyright', 'noanet'),
                'fields' => array(
                    array(
                        'id'=>'copyright_bg',
                        'type' => 'background',
                        'title' => esc_html__('Background', 'noanet'),
                        'output' => '#apus-copyright'
                    ),
                    array(
                        'title' => esc_html__('Text Color', 'noanet'),
                        'id' => 'copyright_text_color',
                        'type' => 'color',
                        'output' => array(
                            'color' => '.apus-copyright'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color', 'noanet'),
                        'id' => 'copyright_link_color',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-copyright a, #apus-copyright a i'
                        )
                    ),
                    array(
                        'title' => esc_html__('Link Color Hover', 'noanet'),
                        'id' => 'copyright_link_color_hover',
                        'type' => 'color',
                        'output' => array(
                            'color' => '#apus-copyright a:hover ,#apus-copyright a i:hover'
                        )
                    ),
                )
            );

            // Social Media
            $this->sections[] = array(
                'icon' => 'el el-file',
                'title' => esc_html__('Social Media', 'noanet'),
                'fields' => array(
                    array(
                        'id' => 'facebook_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable Facebook Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'twitter_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable twitter Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'linkedin_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable linkedin Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'tumblr_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable tumblr Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'google_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable google plus Share', 'noanet'),
                        'default' => 1
                    ),
                    array(
                        'id' => 'pinterest_share',
                        'type' => 'switch',
                        'title' => esc_html__('Enable pinterest Share', 'noanet'),
                        'default' => 1
                    )
                )
            );
            // Custom Code
            $this->sections[] = array(
                'icon' => 'el-icon-css',
                'title' => esc_html__('Custom CSS/JS', 'noanet'),
                'fields' => array(
                    array (
                        'title' => esc_html__('Custom CSS', 'noanet'),
                        'subtitle' => esc_html__('Paste your custom CSS code here.', 'noanet'),
                        'id' => 'custom_css',
                        'type' => 'ace_editor',
                        'mode' => 'css',
                    ),
                    
                    array (
                        'title' => esc_html__('Header JavaScript Code', 'noanet'),
                        'subtitle' => esc_html__('Paste your custom JS code here. The code will be added to the header of your site.', 'noanet'),
                        'id' => 'header_js',
                        'type' => 'ace_editor',
                        'mode' => 'javascript',
                    ),
                    
                    array (
                        'title' => esc_html__('Footer JavaScript Code', 'noanet'),
                        'subtitle' => esc_html__('Here is the place to paste your Google Analytics code or any other JS code you might want to add to be loaded in the footer of your website.', 'noanet'),
                        'id' => 'footer_js',
                        'type' => 'ace_editor',
                        'mode' => 'javascript',
                    ),
                )
            );
            $this->sections[] = array(
                'title' => esc_html__('Import / Export', 'noanet'),
                'desc' => esc_html__('Import and Export your Redux Framework settings from file, text or URL.', 'noanet'),
                'icon' => 'el-icon-refresh',
                'fields' => array(
                    array(
                        'id' => 'opt-import-export',
                        'type' => 'import_export',
                        'title' => esc_html__('Import Export', 'noanet'),
                        'subtitle' => esc_html__('Save and restore your Redux options', 'noanet'),
                        'full_width' => false,
                    ),
                ),
            );

            $this->sections[] = array(
                'type' => 'divide',
            );
        }

        /**
         * All the possible arguments for Redux.
         * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
         * */
        public function setArguments()
        {
            $theme = wp_get_theme(); // For use with some settings. Not necessary.

            $preset = noanet_get_demo_preset();
            $this->args = array(
                // TYPICAL -> Change these values as you need/desire
                'opt_name' => 'noanet_theme_options'.$preset,
                // This is where your data is stored in the database and also becomes your global variable name.
                'display_name' => $theme->get('Name'),
                // Name that appears at the top of your panel
                'display_version' => $theme->get('Version'),
                // Version that appears at the top of your panel
                'menu_type' => 'menu',
                //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
                'allow_sub_menu' => true,
                // Show the sections below the admin menu item or not
                'menu_title' => esc_html__('Theme Options', 'noanet'),
                'page_title' => esc_html__('Theme Options', 'noanet'),

                // You will need to generate a Google API key to use this feature.
                // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
                'google_api_key' => '',
                // Set it you want google fonts to update weekly. A google_api_key value is required.
                'google_update_weekly' => false,
                // Must be defined to add google fonts to the typography module
                'async_typography' => true,
                // Use a asynchronous font on the front end or font string
                //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
                'admin_bar' => true,
                // Show the panel pages on the admin bar
                'admin_bar_icon' => 'dashicons-portfolio',
                // Choose an icon for the admin bar menu
                'admin_bar_priority' => 50,
                // Choose an priority for the admin bar menu
                'global_variable' => 'noanet_options',
                // Set a different name for your global variable other than the opt_name
                'dev_mode' => false,
                // Show the time the page took to load, etc
                'update_notice' => true,
                // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
                'customizer' => true,
                // Enable basic customizer support
                //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
                //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field

                // OPTIONAL -> Give you extra features
                'page_priority' => null,
                // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
                'page_parent' => 'themes.php',
                // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
                'page_permissions' => 'manage_options',
                // Permissions needed to access the options panel.
                'menu_icon' => '',
                // Specify a custom URL to an icon
                'last_tab' => '',
                // Force your panel to always open to a specific tab (by id)
                'page_icon' => 'icon-themes',
                // Icon displayed in the admin panel next to your menu_title
                'page_slug' => '_options',
                // Page slug used to denote the panel
                'save_defaults' => true,
                // On load save the defaults to DB before user clicks save or not
                'default_show' => false,
                // If true, shows the default value next to each field that is not the default value.
                'default_mark' => '',
                // What to print by the field's title if the value shown is default. Suggested: *
                'show_import_export' => true,
                // Shows the Import/Export panel when not used as a field.

                // CAREFUL -> These options are for advanced use only
                'transient_time' => 60 * MINUTE_IN_SECONDS,
                'output' => true,
                // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
                'output_tag' => true,
                // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
                // 'footer_credit'     => '',                   // Disable the footer credit of Redux. Please leave if you can help it.

                // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
                'database' => '',
                // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!
                'system_info' => false,
                // REMOVE
                'use_cdn' => true
            );

            return $this->args;
        }

    }

    global $reduxConfig;
    $reduxConfig = new Noanet_Redux_Framework_Config();
}
