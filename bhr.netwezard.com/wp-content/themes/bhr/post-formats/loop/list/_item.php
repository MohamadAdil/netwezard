<?php
    $thumbsize = isset($thumbsize) ? $thumbsize : noanet_get_blog_thumbsize();
    $nb_word = isset($nb_word) ? $nb_word : 17;
?>
<article <?php post_class('post post-list'); ?>>

    <div class="row">
        <?php
        $thumb = noanet_display_post_thumb($thumbsize);
        if (!empty($thumb)) {
            ?>
            <div class="col-md-6">
                <?php echo trim($thumb); ?>
            </div>
            <?php
        }
        ?>
        <div class="col-md-<?php echo !empty($thumb) ? '6' : '12'; ?>">
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
                <?php if (! has_excerpt()) { ?>
                    <div class="entry-description"><?php echo noanet_substring( get_the_content(), $nb_word, '.' ); ?></div>
                <?php } else { ?>
                    <div class="entry-description"><?php echo noanet_substring( get_the_excerpt(), $nb_word, '.' ); ?></div>
                <?php } ?>

                <a class="btn" href="<?php the_permalink(); ?>"><?php esc_html_e('Read More','noanet') ?></a>
            </div>
        </div>
    </div>
</article>