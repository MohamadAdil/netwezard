<div class="apus-topcart">
    <div class="dropdown version-1 cart">
        <a class="dropdown-toggle mini-cart" data-toggle="dropdown" aria-expanded="true" role="button" aria-haspopup="true" data-delay="0" href="#" title="<?php esc_html_e('View your shopping cart', 'noanet'); ?>">
            <span class="text-skin cart-icon-top">
            	<span class="count"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
                <i class="fa fa-shopping-basket text-theme"></i>
            </span>
        </a>            
        <div class="dropdown-menu dropdown-menu-right"><div class="widget_shopping_cart_content">
            <?php woocommerce_mini_cart(); ?>
        </div></div>
    </div>
</div>