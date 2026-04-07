<?php
    $thumbsize = isset($thumbsize) ? $thumbsize : noanet_get_blog_thumbsize();
    $nb_word = isset($nb_word) ? $nb_word : 15;
?>

<article <?php post_class('post post-grid'); ?>>
    <?php
    $thumb = noanet_display_post_thumb($thumbsize);
    echo trim($thumb);
    ?>
    <div class="entry-content <?php echo !empty($thumb) ? '' : 'no-thumb'; ?>">
        <div class="entry-meta">
            <div class="info">

                <div class="meta">
                    <span class="date"><i class="mn-icon-1130"></i><?php the_time( get_option('date_format', 'M d , Y') ); ?>  </span>
                    <span class="coment"><i class="mn-icon-294"></i><?php comments_number('0','01'); ?></span>
                    <span><i class="mn-icon-132"></i> <?php $categories_list = get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'noanet' ) );
                        if ( $categories_list && noanet_categorized_blog() ) {
                            printf( '<span class="cat-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
                                _x( 'Categories', 'Used before category names.', 'noanet' ),
                                $categories_list
                            );
                        }?>
                    </span>
                </div>
                
                <?php if (get_the_title()) { ?>
                    <h4 class="entry-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h4>
                <?php } ?>
                    
            </div>
        </div>
        <div class="info-bottom">
            <?php if (! has_excerpt()) { ?>
                <div class="entry-description"><?php echo noanet_substring( get_the_content(), $nb_word, '.' ); ?></div>
            <?php } else { ?>
                <div class="entry-description"><?php echo noanet_substring( get_the_excerpt(), $nb_word, '.' ); ?></div>
            <?php } ?>

            <a class="btn" href="<?php the_permalink(); ?>"><?php esc_html_e('Read More','noanet') ?></a>
        </div>
    </div>
</article>