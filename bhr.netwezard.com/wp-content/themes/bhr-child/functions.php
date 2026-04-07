<?php

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 1000000 );
function my_theme_enqueue_styles() {
	wp_enqueue_style('flaticon', get_stylesheet_directory_uri() . '/css/flaticon.css');
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css');
}

function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/css/style-login.css' );
   
}
add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );