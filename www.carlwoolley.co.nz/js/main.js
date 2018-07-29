$(document).ready(function () {

	/* ==========================================================================
	   Breakpoints
	   ========================================================================== */

	var $breakpointLargest = "screen and (max-width:1276px)";
	var $breakpointLarge = "screen and (max-width:1024px)";
	var $breakpointMedium = "screen and (max-width:768px)";
	var $breakpointSmallish = "screen and (max-width:672px)";
	var $breakpointSmall = "screen and (max-width:480px)";

	/* ==========================================================================
	   Enquire.js Content Folding
	   ========================================================================== */

	enquire
	.register($breakpointLarge, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	})
	.register($breakpointMedium, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	})
	.register($breakpointSmallish, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	});

	/* ==========================================================================
	   Mobile Menu Button
	   ========================================================================== */

	$( ".js-trigger-mobile-nav" ).click(function(e) {
		e.preventDefault();
		$("nav").slideToggle("slow", "swing");
		$(this).toggleClass("is-active");
		$("body").toggleClass("lock-scroll");
	});

	/* ==========================================================================
	   Slick Sliders
	   ========================================================================== */

	$('.single-item').slick({
		dots: true
	});

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		responsive: [
			{
			breakpoint: 769,
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

	/* ==========================================================================
	   Form Validation
	   ========================================================================== */

	$("form").validate();




// Subnav hover for desktop
	$( ".no-touch .main-nav > li" ).has('.sub-nav').hover(
	  function() {
	    $(".no-touch header").addClass("active");
	    $( this ).find('.sub-nav').stop().slideDown(300);
	  }, function() {
	    $(".no-touch header").removeClass("active");
	    $( this ).find('.sub-nav').stop().slideUp(300);
	  }
	);






// accordion button action (on click do the following)
	$('.main-container').on('click', '.accordion-title', function (e) {
		e.preventDefault();

		$(this).toggleClass("on").next().slideToggle();
	});

	// collapse accordion items by default, unless the trigger has the 'on' class
	//$('.accordion-content').hide();
	$('.accordion-title:not(.on)').next('.accordion-content').hide();

	// expand or collapse all accordion items
	$('.main-container').on('click', '.expand-collapse-trigger', function (e) {
		if ($(this).text() == 'Expand All') {
			$('.accordion-title').addClass("on").next().slideDown();
		}
		else {
			$('.accordion-title').removeClass("on").next().slideUp();
		}
		$(this).html($(this).text() == 'Expand All' ? 'Collapse All' : 'Expand All');
	});








});
