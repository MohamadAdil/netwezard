<?php
    $thumbsize = isset($thumbsize) ? $thumbsize : noanet_get_blog_thumbsize();
    $nb_word = isset($nb_word) ? $nb_word : 15;
?>

<article <?php post_class('post post-grid-3'); ?>>
        <?php
        $thumb = noanet_display_post_thumb($thumbsize);
        echo trim($thumb);
        ?>
        <div class="entry-content">
            <div class="meta">
                <span class="date"><i class="fa fa-calendar-o" aria-hidden="true"></i><?php the_time('d,M') ?>  </span>
                <span class="author"><i class="fa fa-user-circle" aria-hidden="true"></i><?php the_author_posts_link(); ?></span>
                <span class="comments"><i class="fa fa-comments-o" aria-hidden="true"></i><?php comments_number( esc_html__('0', 'noanet'), esc_html__('1', 'noanet'), esc_html__('%', 'noanet') ); ?></span>
            </div>
            <?php if (get_the_title()) { ?>
                <h4 class="entry-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h4>
            <?php } ?>
            <div class="info-bottom">
                <?php if (! has_excerpt()) { ?>
                    <div class="entry-description"><?php echo noanet_substring( get_the_content(), $nb_word, '...' ); ?></div>
                <?php } else { ?>
                    <div class="entry-description"><?php echo noanet_substring( get_the_excerpt(), $nb_word, '...' ); ?></div>
                <?php } ?>
                <a class="btn-grid-3" href="<?php the_permalink(); ?>"><?php esc_html_e('Read More','noanet') ?></a>
            </div>
        </div>
</article>