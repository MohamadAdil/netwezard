<?php
global $product;
?>
<div class="product-block-pricing <?php echo esc_attr( $product->is_featured() ? 'is-featured' : '' ); ?>">
    <?php
        $label = get_post_meta( get_the_ID(), 'apus_product_label', true );
        if ($label) {
    ?>
            <div class="label"><span><?php echo trim($label); ?></span></div>
    <?php } ?>
    <div class="block-inner-header">
        <div class="thumbnail-wrapper">
            <?php the_post_thumbnail('full'); ?>
        </div>
        <div class="wrapper-header">
            <h3 class="name"><?php the_title(); ?></h3>
        </div>
    </div>
    <div class="block-inner-content">
        <?php the_content(); ?>
    </div>
    <div class="wrapper-pricing">
        <?php
            /**
            * woocommerce_after_shop_loop_item_title hook
            *
            * @hooked woocommerce_template_loop_rating - 5
            * @hooked woocommerce_template_loop_price - 10
            */
            remove_action('woocommerce_after_shop_loop_item_title','woocommerce_template_loop_rating',5);
            do_action( 'woocommerce_after_shop_loop_item_title');
        ?>
    </div>
    <div class="groups-button clearfix">
        <?php do_action( 'woocommerce_after_shop_loop_item' ); ?>
    </div>
</div>