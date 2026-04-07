jQuery(function($) {
        $(document).ready( function() {


         


                  $('.navbar-wrapper').stickUp({
                                parts: {
                                  0:'home',
                                  1:'vision',
                                  2:'meditation',
                                  3:'problem',
                                  4:'solution',
                                  5:'proof',
                                  6:'itdefferent',
                                  7:'market',
                                  8:'businessmodel',
                                  9:'team',
                                  10:'whatnext',
                                  11:'getintouch'
                                },
                                itemClass: 'menuItem',
                                itemHover: 'active',
                              topMargin: 'auto'
                              });



                        var pull   = $('.menubtn');
                  menu   = $('.navbar-nav');
                  menuHeight = menu.height();

                 $(pull).on('click', function(e) {
                  e.preventDefault();
                  menu.slideToggle();
                 });
                 $(pull).on('click', function(e) {
                  e.preventDefault();
                  if($(this).hasClass('opend')){

                    $(this).removeClass('opend');
                  }else{
$(this).addClass('opend');
                  }
                 });
                 $(window).resize(function(){
                        var w = $(window).width();
                        if(w > 320 && menu.is(':hidden')) {
                         menu.removeAttr('style');
                        }
                    });


              $('.navbar-nav a[href^="#"], a.scroller').on('click',function (e) {
                    e.preventDefault();
                    var target = this.hash;
                    var $target = $(target);

                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top
                    }, 500, 'swing', function () {
                        window.location.hash = target;
                    });
                });



          

$('[data-toggle="tooltip"]').tooltip(); 

       





new WOW().init();
 

 $('.counter').counterUp({
            delay: 5,
            time: 1000
        });



 var $grid = $('.testimonials').masonry({
     itemSelector: '.testimonials li',
        percentPosition: true,
        columnWidth: '.testimonials li',
          "gutter": 20
  });
 


            });
      });