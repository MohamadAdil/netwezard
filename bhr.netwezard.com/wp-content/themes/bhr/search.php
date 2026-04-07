<?php
/**
 * The template for displaying search results pages.
 *
 * @package WordPress
 * @subpackage Noanet
 * @since Noanet 1.0
 */

get_header();
$sidebar_configs = noanet_get_blog_layout_configs();

noanet_render_breadcrumbs();
?>
<section id="main-container" class="main-content  <?php echo apply_filters('noanet_blog_content_class', 'container');?> inner">
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

		<div id="main-content" class="col-xs-12 <?php echo esc_attr($sidebar_configs['main']['class']); ?>">
			<main id="main" class="site-main layout-blog" role="main">

			<?php if ( have_posts() ) : ?>

				<header class="page-header hidden">
					<?php
						the_archive_title( '<h1 class="page-title">', '</h1>' );
						the_archive_description( '<div class="taxonomy-description">', '</div>' );
					?>
				</header><!-- .page-header -->

				<?php
				// Start the Loop.
				while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					?>
						<?php
						    $post_format = get_post_format();
						    $thumbsize = isset($thumbsize) ? $thumbsize : noanet_get_blog_thumbsize();
						    $nb_word = isset($nb_word) ? $nb_word : 10;
						?>

						<article <?php post_class('post post-list'); ?>>

						    <div class="row">
						        <?php
						        $thumb = noanet_display_post_thumb($thumbsize);
						        if (!empty($thumb)) {
						            ?>
						            <div class="col-md-5">
						                <?php echo trim($thumb); ?>
						            </div>
						            <?php
						        }
						        ?>
						        
						        <div class="col-md-<?php echo (has_post_thumbnail() ? '7' : '12'); ?>">
						            <div class="entry-meta">
						                <div class="info">

						                    <div class="meta">
						                        <span class="date"><i class="mn-icon-1130"></i><?php the_time( get_option('date_format', 'M d , Y') ); ?>  </span>
						                        <span class="coment"><i class="mn-icon-294"></i><?php comments_number('0','01'); ?></span>
						                    </div>
						                    
						                    <?php if (get_the_title()) { ?>
						                        <h4 class="entry-title">
						                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						                        </h4>
						                    <?php } ?>
						                        
						                </div>
						            </div>
						            <div class="info-bottom">
						                <?php if ( has_excerpt()) { ?>
						                    <div class="entry-description"><?php echo noanet_substring( get_the_excerpt(), $nb_word, '.' ); ?></div>
						                <?php } ?>

						                <a class="btn" href="<?php the_permalink(); ?>"><?php esc_html_e('Read More','noanet') ?></a>
						            </div>
						        </div>
						    </div>
						</article>
					<?php
				// End the loop.
				endwhile;

				// Previous/next page navigation.
				noanet_paging_nav();

			// If no content, include the "No posts found" template.
			else :
				get_template_part( 'post-formats/content', 'none' );

			endif;
			?>

			</main><!-- .site-main -->
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
<?php get_footer(); ?>
