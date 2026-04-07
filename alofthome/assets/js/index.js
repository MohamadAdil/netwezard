$(window).ready(function(){
 

 // Setup Animation
 new WOW().init();

 // scroll event


 var scroll = new SmoothScroll();

$('.scroll-bottom').on('click', function(){
     
    toggle=  document.querySelector( '#miracle-sheet' ),
    options = { speed: 1000, easing: 'easeInOut' } ; 
    scroll.animateScroll( toggle,options);
})

// Navigation

$('.primary-navigation').slicknav({
    label: '',
    prependTo:'#mobile-nav',
    parentTag: 'div',
    closedSymbol: "",
    openedSymbol: ""
});

$('#menu-toggle').on('click', function(e){
    $(this).toggleClass('open');
    $('.connect').toggleClass('unvisible');
    $('.primary-navigation').slicknav('toggle');
})

 // review slider
$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    autoplay: true,
    dots: true,
    items: 1
    
});

// window scroll

$("#sticky-product .color-option").on("click", function(e){

 if (this.hash !== "") {
  var hash = this.hash;
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800)
}
});

// stcky section

$("#sticky-product").sticky({
    topSpacing:0,
    zIndex:10,
    responsiveWidth: true
});

// Model Box

$('#feature-product .color-option').on("click", function(e){
	e.preventDefault();
	$('.model-box').toggleClass('open');
})


$('.close-model').on("click", function(){
	$('.model-box').toggleClass('open')
})

// Product slider
$('.flexslider').flexslider({
	animation: "slide",
    controlNav: "thumbnails", 
    prevText: "",   
nextText: ""
});

// Navigation

$('.nav-launcher').on("click", function(){
    $('.navigation').toggleClass('open');
})
 
})