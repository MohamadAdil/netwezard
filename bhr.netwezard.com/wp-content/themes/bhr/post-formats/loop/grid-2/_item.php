<?php
    $thumbsize = isset($thumbsize) ? $thumbsize : noanet_get_blog_thumbsize();
    $nb_word = isset($nb_word) ? $nb_word : 15;
?>

<article <?php post_class('post post-grid-2'); ?>>
    <div class="flex-middle">
        <?php
        $thumb = noanet_display_post_thumb($thumbsize);
        echo trim($thumb);
        ?>
        <div class="entry-content">
            <?php if (get_the_title()) { ?>
                <h4 class="entry-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h4>
            <?php } ?>
            <div class="meta">
                <span class="date"><?php the_time( get_option('date_format', 'M d , Y') ); ?>  </span>
                <span class="author"><?php echo esc_html__('by','noanet'); ?> <?php the_author_posts_link(); ?></span>
                <span class="comments"><i class="fa fa-comments-o" aria-hidden="true"></i><?php comments_number( esc_html__('0', 'noanet'), esc_html__('1', 'noanet'), esc_html__('%', 'noanet') ); ?></span>
            </div>
        </div>
    </div>
</article>