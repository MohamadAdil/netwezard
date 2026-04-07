/**
 * Functionality specific to Trego.
 *
 * Provides helper functions to enhance the theme experience.
 */
function isEmpty(value){
	return (typeof value === "undefined" || value === null);
}

function getDocWidth() {
	if (self.innerWidth) {
	   return self.innerWidth;
	} else if (document.documentElement && document.documentElement.clientHeight){
	    return document.documentElement.clientWidth;
	} else if (document.body) {
	    return document.body.clientWidth;
	}
	return 0;
}

function sliderAutoStart(obj, pause){
    obj.stopAuto();
	setTimeout(function(){
		obj.startAuto();
	}, pause);
}

function resizeFunction(obj, container, cnt, opts) {
	reloadBxSlider(obj, container, cnt, opts);
};

function getSlideWidth(container, cnt){
	return Math.round(container.width() / cnt);
}

function reloadBxSlider(obj, container, cnt, opts){
	var slide_cnt;
	var doc_w = getDocWidth();
	if(isEmpty(opts.responsive)){
		slide_cnt = cnt;
	} else {
		for(var k in opts.responsive) {
			if((opts.responsive[k].min <= doc_w) && (opts.responsive[k].max >= doc_w)){
				slide_cnt = opts.responsive[k].cnt;
				break;
			}
		}
	}

	if(isEmpty(slide_cnt)){
		slide_cnt = cnt;
	}

	opts.slideWidth = getSlideWidth(container, slide_cnt);
	opts.maxSlides = slide_cnt;
	opts.minSlides = slide_cnt;
	obj.reloadSlider(opts);
}

function arrowIconsAlign(container){
	var h = container.find('.bx-wrapper .description').height();
	var offset;
	offset = container.hasClass('small-ctrls') ? 12 : 20;
	h = ( h==null ) ? ('-' + offset + 'px') : ('-' + ( ( h/2 ) + offset ) + 'px');
	container.find('.bx-wrapper .bx-controls-direction a').css('margin-top', h);
}

jQuery(document).ready(function($) {

	$(window).load(function(){
	var container = $('#related_products .bxslider-container');

				var opts = {
					controls: false,
					maxSlides: 4,
					minSlides: 4,
					slideWidth: getSlideWidth(container, 4),
					slideMargin: 30,
					pager: false,
					onSliderLoad: function(){
						setTimeout(function(){
							$('#related_products .bxslider-container').css('max-height', 'none');
							$('#related_products .bxslider-container').css('overflow', 'none');
						}, 200);
						$('#related_products .bxslider-container .slider-loading').fadeOut();
					},
					responsive: [{min: 700, max: 767, cnt: 3},
								{min: 520, max: 699, cnt: 2},
								{min: 0, max: 520, cnt: 1}]
				}

				var related_products = $('#related_products .bxslider').bxSlider(opts);

				$('#btn_prev_related').click(function(){
					related_products.goToPrevSlide();
					return false;
				});

				$('#btn_next_related').click(function(){
					related_products.goToNextSlide();
					return false;
				});

				var resizeTimer;

				$(window).resize(function() {
					if(!($.browser.msie  && parseInt($.browser.version, 10) === 8)){
						clearTimeout(resizeTimer);
						resizeTimer = setTimeout(
							function(){
								resizeFunction(related_products, container, 4, opts)
							}, 250);
					}
				});
       
	});
});
