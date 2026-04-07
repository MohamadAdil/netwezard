<?php
/**
 * Checkout Form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wc_print_notices();

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'noanet' ) );
	return;
}
?>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( $get_checkout_url ); ?>" enctype="multipart/form-data">

<div class="row">
	<div class="col-md-8 col-xs-12">
		<div class="details-check">
		<?php if ( sizeof( $checkout->checkout_fields ) > 0 ) : ?>

			<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

			<div class="col2-set" id="customer_details">
				<div class="col-12">
					<?php do_action( 'woocommerce_checkout_billing' ); ?>
				</div>

				<div class="col-12">
					<?php do_action( 'woocommerce_checkout_shipping' ); ?>
				</div>
			</div>

			<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

			
		<?php endif; ?>
		</div>
	</div>
	<div class="col-md-4 col-xs-12">
		<div class="details-review">
			<div class="order-review">
				<h3 id="order_review_heading"><?php esc_html_e( 'Your order', 'noanet' ); ?></h3>
				<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

				<div id="order_review" class="woocommerce-checkout-review-order">
					<?php do_action( 'woocommerce_checkout_order_review' ); ?>
				</div>

				<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
			</div>
		</div>	
	</div>
</div>

	

</form>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
