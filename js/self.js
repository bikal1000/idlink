jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		var wScroll = jQuery(this).scrollTop();/*scroll desitnation*/
		jQuery('#header').addClass('headerfixed');

		if (wScroll < 150) {
			jQuery('#header').removeClass('headerfixed');
			jQuery('.banner-section figure img').addClass('.animation');
		}
		if (wScroll < 550) {
			jQuery('#header').removeClass('headeranimation');
			jQuery('.banner-section figure img').removeClass('.animation');
		}
		else {
			jQuery('#header').addClass('headeranimation');
		}
		if (wScroll > jQuery('.features-div').offset().top - (jQuery(window).height() / 1.2)) {
			jQuery('.feature-div').addClass('normaltran');	
		}
		if (wScroll > jQuery('.herosection2').offset().top - (jQuery(window).height() / 1.2)) {
			jQuery('.herolist figure').addClass('normalrotate');	
		}
	});
});