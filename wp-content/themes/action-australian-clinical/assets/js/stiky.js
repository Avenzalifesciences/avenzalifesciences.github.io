$(document).ready(function () {
	// Sticky Header
	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() > 0) {
			jQuery('.et-l--header').addClass('sticky');
		}
		if (jQuery(window).scrollTop() < 1) {
			jQuery('.et-l--header').removeClass('sticky');
		}
	});
	if (matchMedia('only screen and (min-width: 768px) and (max-width: 959px)').matches) {
		jQuery(window).scroll(function () {
			if (jQuery(window).scrollTop() > 0) {
				jQuery('.et-l--header').addClass('sticky');
			}
		});
	}
	else if (matchMedia('only screen and (max-width: 767px)').matches) {
		jQuery(window).scroll(function () {
			if (jQuery(window).scrollTop() > 0) {
				jQuery('.et-l--header').addClass('sticky');
			}
		});
	}
});