 
	
	jQuery(document).ready(function() {
    var aa = 0;
    var bb = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > aa) {
            jQuery('#headpart').addClass('fixedit');
        } else {
            jQuery('#headpart').removeClass('fixedit');
        }
    }); 
	
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
});