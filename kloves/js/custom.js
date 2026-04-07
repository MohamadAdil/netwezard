// Hide menu on scroll
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("kloves-header").style.top = "0";
  } else {
    document.getElementById("kloves-header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/


// Hide Header on on scroll down
$(document).ready(function(){
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#kloves-header').outerHeight();

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
        $('#kloves-header').addClass('hide');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#kloves-header').removeClass('hide');
        }
    }
    lastScrollTop = st;
}
})



/* Equal Column Height */
function equalColumns(htmlElements){
   $(htmlElements).removeAttr('style');
   var heights = $(htmlElements).map(function() {
       return $(this).height();
   }).get(),
   maxHeight = Math.max.apply(null, heights);
   $(htmlElements).height(maxHeight);
}
$(window).bind("load", function() {
   window.addEventListener("resize", function() {
       // Get screen size (inner/outerWidth, inner/outerHeight)
       setTimeout(function(){
        equalColumns('.white-card a');
        equalColumns('.green-card a');
        equalColumns('.white-card p');
        equalColumns('.green-card p');
       }, 500);
   }, false);
   setTimeout(function(){
        equalColumns('.white-card a');
        equalColumns('.green-card a');
        equalColumns('.white-card p');
        equalColumns('.green-card p');
   }, 500);
   /* Carat/New window icon Next Line  */

});

// Bootstrap Dropdown on hover
function openNav() {
  document.getElementById("site-navbar").className = "sidenav show";
  document.body.classList.add("side-back-open");
}

function closeNav() {
   document.getElementById("site-navbar").className = "sidenav";
   document.body.classList.remove("side-back-open");
}

/* Custom selectbox */
  $(document).ready(function(){
  var $customSelect = $( '.custom-select' );
  var $resetButton = $( '#resetButton' );


  $customSelect.each(function() {
    var classes = $( this ).attr( 'class' );
    var id = $( this ).attr( 'id' );
    var name = $( this ).attr( 'name' );

    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">';
    template += '<span class="custom-select-trigger-text">' + $( this ).data( 'placeholder' ) + '</span>';
    template += '</span>';
    template += '<div class="custom-options">';

    $(this).find( 'option' ).each( function() {
      template += '<span class="custom-option" data-value="' + $( this ).attr( 'value' ) + '">' + $( this ).html() + '</span>';
    });

    template += '</div></div>';
    
    var customSelectWrapper = $( '<div class="custom-select-wrapper"></div>' );
    customSelectWrapper.css({
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    });

    $( this ).wrap( customSelectWrapper );
    $( this ).after( template );
  });


  $( document ).on( 'click', function( e ){
    var eTarget = e.target;

    if( !$( eTarget ).closest( '.custom-select-wrapper' ).hasClass( 'custom-select-wrapper' ) ) {
      $( '.custom-select' ).removeClass( 'opened' );
      customOptionsClosed();
    }
  });


  $( '.custom-select-trigger' ).on( 'click', function() {
    $( this ).parents( '.custom-select' ).toggleClass( 'opened' );

    var timer;
    if( $( this ).parents( '.custom-select' ).hasClass( 'opened' ) ){
      clearTimeout( timer );

      $( this )
        .parents( '.custom-select' )
        .find( '.custom-options' )
        .stop()
        .css('display', 'block')
        .animate({
          'opacity': '1',
          'margin-top': '1'
        },100 );
    }

    else{
      customOptionsClosed();
    }

  });
$('.custom-select-wrapper .custom-option:first-child').addClass('selection')

  $( '.custom-select-wrapper .custom-option' ).on( 'click', function() {
    $( this ).parents( '.custom-select-wrapper' ).find( 'select' ).val( $( this ).data( 'value' ) );
    $( this ).parents( '.custom-select-wrapper .custom-options' ).find( '.custom-option' ).removeClass( 'selection' );
    $( this ).addClass( 'selection' );
    $( this ).parents( '.custom-select-wrapper .custom-select' ).removeClass( 'opened' );    
    $( this ).parents( '.custom-select-wrapper .custom-select' ).find( '.custom-select-trigger-text' ).text( $( this ).text() );
    customOptionsClosed();
  });


  $resetButton.on('click', function() {
    $( '.custom-select-wrapper .custom-select-trigger-text' ).text( $customSelect.data( 'placeholder' ) );
  });


  function customOptionsClosed() {
    $('.custom-select-wrapper .custom-options')
      .stop()
      .animate({
        opacity: 0,
        'margin-top': '0'
      },100 );

    t = setTimeout(function(){
      $('.custom-select-wrapper .custom-options').css('display', 'none');
    }, 500 );
  }

// Select on change js
$('.workstatus').hide(); 
    $('.location').change(function(){
        if($('.location').val() == 'america') {
            $('.workstatus').show(); 
        } else {
            $('.workstatus').hide(); 
        } 
    });
});

 