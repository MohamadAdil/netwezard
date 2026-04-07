// Hide Header on on scroll down
$(document).ready(function(){
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#mainHeader').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);
function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#mainHeader').addClass('fixed');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#mainHeader').removeClass('fixed');
        }
    }
    lastScrollTop = st;
};
})

// scroll to top
function scrollTopAnimated() {
    $("html, body").animate({ scrollTop: "0" }, 3000);
}
// add like here
// <button onclick="scrollTopAnimated()">Scroll To Top</button>

$('#FeatureSlider').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>'
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    900: {
      items: 2,
      nav: true,
      dots: false,
    },
    1000: {
      items: 3
    }
  }
});
$('.banner-slider').owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  dots: true,
  items: 1,
  navText: [
    '<i class="fas fa-arrow-left"></i>',
    '<i class="fas fa-arrow-right"></i>'
  ],
  autoplay: true,
  autoplayHoverPause: true,
   responsive: {
 
    900: {
      items: 1,
      nav: true,
      dots: false,
    }
  }
});

  $(document).ready(function($) {
  $('a[data-rel^=lightcase]').lightcase({
    swipe: false,
    transition: 'scrollHorizontal', // 'none', 'fade', 'fadeInline', 'elastic', 'scrollTop', 'scrollRight', 'scrollBottom', 'scrollLeft', 'scrollHorizontal' and 'scrollVertical'.
    showSequenceInfo: false,
    showTitle: false
  });
});

$(document).ready(function() {

    var windowSize = $(window).width();
        if (windowSize >320  && windowSize <= 767 ) {
            var slidesPerPage = 3;
        }
        else if (windowSize >767  && windowSize <= 991 ) {
            var slidesPerPage = 5;
        }
        else if (windowSize >991  && windowSize <= 1199 ) {
           var slidesPerPage = 7;
        }
        else if (windowSize >1199  && windowSize <= 3000 ) {
            var slidesPerPage = 10;
        }
    

    var sync1 = $(".preview-gallery");
    var sync2 = $(".gallery-thumnail");
    // var slidesPerPage = 10; //globaly define number of elements per page
    var syncedSecondary = true;



    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});