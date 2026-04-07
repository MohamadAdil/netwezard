/**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 */

$(document).ready(function(){

	$(".main").onepage_scroll({
	   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 900, // AnimationTime let you define how long each section takes to animate
	   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	});
	
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	
	$('body').removeClass("loading").addClass('loaded');
	
}

$(window).load(function() {
	
	// fade in page
	init();
	
});
