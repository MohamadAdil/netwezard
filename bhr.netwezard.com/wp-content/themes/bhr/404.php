<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Noanet
 * @since Noanet 1.0
 */
/*
*Template Name: 404 Page
*/
get_header();
$sidebar_configs = noanet_get_page_layout_configs();
?>
<section class="page-404">
<section id="main-container" class="<?php echo apply_filters('noanet_page_content_class', 'container');?> inner">
	<div class="row">
		<?php if ( isset($sidebar_configs['left']) ) : ?>
			<div class="<?php echo esc_attr($sidebar_configs['left']['class']) ;?>">
			  	<aside class="sidebar sidebar-left" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">
			  		<?php if ( is_active_sidebar( $sidebar_configs['left']['sidebar'] ) ): ?>
			   			<?php dynamic_sidebar( $sidebar_configs['left']['sidebar'] ); ?>
			   		<?php endif; ?>
			  	</aside>
			</div>
		<?php endif; ?>
		<div id="main-content" class="main-page <?php echo esc_attr($sidebar_configs['main']['class']); ?>">

			<section class="error-404 not-found text-center clearfix">
				<h1 class="page-title"><?php esc_html_e( 'Page not found', 'noanet' ); ?></h1>
				<div class="page-content">
					<p class="sub-title"><?php esc_html_e( 'We are sorry, but we can not find the page you were looking for', 'noanet' ); ?></p>
					<div class="search-form">
						<form>
							  <div class="input-group">
							    <input type="text" class="form-control" id="exampleInputEmail2"  placeholder="<?php esc_html_e( 'Search', 'noanet' ); ?>">
							  	<span class="input-group-btn"> <button type="submit" class="btn"><i class="mn-icon-52"></i> </span>
							  </div>
						</form>
					</div>
					<div class="forward">
						<a class="btn btn-theme " href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e('back to homepage', 'noanet'); ?></a>
					</div>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</div><!-- .content-area -->
		<?php if ( isset($sidebar_configs['right']) ) : ?>
			<div class="<?php echo esc_attr($sidebar_configs['right']['class']) ;?>">
			  	<aside class="sidebar sidebar-right" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">
			  		<?php if ( is_active_sidebar( $sidebar_configs['right']['sidebar'] ) ): ?>
				   		<?php dynamic_sidebar( $sidebar_configs['right']['sidebar'] ); ?>
				   	<?php endif; ?>
			  	</aside>
			</div>
		<?php endif; ?>
		
	</div>
</section>
</section>
<?php get_footer(); ?>