$(document).ready(function() {



$('#sub').click(function(){
var names = $("#homename").val();
var emails = $("#homeemail").val();
var messages = $("#homemessage").val();
dataString ='name='+names+'&email='+emails+'&message='+messages;

 if(names == '')
    {
     $('.nameerror').css("display" , "block"); 
     $('.emailerror').css("display" , "none"); 
    $('#homename').focus(); 
    }
    else if(emails == '')
    {
    $('.emailerror').css("display" , "block"); 
    $('.nameerror').css("display" , "none"); 
    $('#homeemail').focus();
    }
  else{
  $('.emailerror').css("display" , "none"); 
  $('.nameerror').css("display" , "none"); 
  $.ajax({
type:'POST',
data:dataString,
url:'mail.php',
success:function(data) {
$(".form-data").css("display" , "none");
$(".success-data").css("display" , "block");
  //alert(data);         
}
});
}
});




$('.gird-row').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,

   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]


});
  

function is_iOS () {
        /*
            Returns whether device agent is iOS Safari
        */
        var ua = navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var webkitUa = !!ua.match(/WebKit/i);

        return typeof webkitUa !== 'undefined' && iOS && webkitUa && !ua.match(/CriOS/i);
    };
    if (is_iOS()) {
        document.body.classList.add('mobile-safari');
    }


$(".header__sticky__burger, .header__sticky__cross, .header-mobile__sticky__burger, .header-mobile__sticky__cross").click(function(){
  $("#header, .header-mobile").toggleClass("main-slide is-totally-open is-open");
});


  $('.home__projects__filters ul li a').click(function(){
    $('.home__projects__filters li a').removeClass("active");
    $(this).addClass("active");
});


// Smoothscroll js
    $(function() {
    $('a.page-scroll, .aro-dwn a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  // Auto Expand Textarea
  var textareaExp = document.querySelector('#homemessage');
  textareaExp.addEventListener('keydown', autosize);
  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  } 
});


    
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio a").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
    
  });
});


// AOS Animation js
      // AOS.init({
      //   easing: 'ease-in-out-sine'
      // });

	 // Setup Animation
 new WOW().init();