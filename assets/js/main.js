(function ($) {
"use strict";

// Mobile Menu
$('#my-navigation').iptOffCanvas({

	// base CSS class
	baseClass: 'offcanvas',
  
	// top, right, bottom, left
	type: 'right',
  
	// close other instances when one opens
	single: true,
  
	static: false
	
  });






// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	items:[
		 { src: '' }
	],
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();

// niceSelect
$(document).ready(function() {
	$('select').niceSelect();
  });

})(jQuery);