<?php
$post_format = get_post_format();
global $post;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    

    <?php if ( $post_format == 'gallery' ) {
        $gallery = noanet_post_gallery( get_the_content(), array( 'size' => 'full' ) );
    ?>
        <div class="entry-thumb <?php echo  (empty($gallery) ? 'no-thumb' : ''); ?>">
            <?php echo trim($gallery); ?>
        </div>
    <?php } elseif( $post_format == 'link' ) {
            $noanet_format = noanet_post_format_link_helper( get_the_content(), get_the_title() );
            $noanet_title = $noanet_format['title'];
            $noanet_link = noanet_get_link_attributes( $noanet_title );
            $thumb = noanet_post_thumbnail('', $noanet_link);
            echo trim($thumb);
        } else { ?>
    	<div class="entry-thumb <?php echo  (!has_post_thumbnail() ? 'no-thumb' : ''); ?>">
    		<?php
                $thumb = noanet_post_thumbnail();
                echo trim($thumb);
            ?>
    	</div>
    <?php } ?>

    <div class="entry-head">

        <div class="meta">
            <span class="date"><i class="mn-icon-1130"></i><?php the_time( get_option('date_format', 'M d , Y') ); ?>  </span>
            <span class="coment"><i class="mn-icon-294"></i><?php comments_number('0','01'); ?></span>
            <span><i class="mn-icon-132"></i> <?php $categories_list = get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'noanet' ) );
        if ( $categories_list && noanet_categorized_blog() ) {
            printf( '<span class="cat-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
                _x( 'Categories', 'Used before category names.', 'noanet' ),
                $categories_list
            );
        }?> </span>
        </div>
        
        <div class="info-left">
            <?php if (get_the_title()) { ?>
                <h4 class="entry-title">
                    <?php the_title(); ?>
                </h4>
            <?php } ?>
        </div>

    </div>

	<div class="entry-content">


    	<div class="single-info info-bottom">
    		<?php
                if ( $post_format == 'gallery' ) {
                    $gallery_filter = noanet_gallery_from_content( get_the_content() );
                    echo trim($gallery_filter['filtered_content']);
                } else {
            ?>
                    <div class="entry-description"><?php the_content(); ?></div><!-- /entry-content -->
            <?php } ?>
    		<?php
    		wp_link_pages( array(
    			'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'noanet' ) . '</span>',
    			'after'       => '</div>',
    			'link_before' => '<span>',
    			'link_after'  => '</span>',
    			'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', 'noanet' ) . ' </span>%',
    			'separator'   => '',
    		) );
    		?>
    		<div class="tag-social row">
                <div class="pull-left">
                    <span><i class="mn-icon-950"></i></span>
                    <?php noanet_post_tags(); ?>
                </div>
    			
    			<div class="pull-right">
                   <?php if( noanet_get_config('show_blog_social_share', true) ) {
                        get_template_part( 'page-templates/parts/sharebox' );
                    } ?>         
                </div>
    		</div>
    	</div>
    </div>
</article>