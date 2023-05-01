jQuery(document).ready(function($){

	//Menu
	$('#menu').visualNav({
		externalLinks     : 'external',
		selectedClass : 'current_page_item'
	});

	$('#menu').mobileMenu({
		defaultText: 'Navigate to...',
		className: 'mobile-menu',
		subMenuDash: '&ndash;'
	});
	//Menu End
	
	//Slider
	$('#layerslider').layerSlider({
		skinsPath : 'js/layerslider/skins/',
		skin : 'fullwidth',
		thumbnailNavigation : 'hover',
		hoverPrevNext : true,
		responsive : true,
		responsiveUnder : 930,
		sublayerContainer : 708
	});
	
	$('input').customInput(); //Radio Button

	//PORTFOLIO ISOTOPE...
	var $container = $('.portfolio-container');
	$container.isotope({ filter: '*', animationOptions: { duration: 750, easing: 'linear', queue: false } });
	
	$('.category-filter a').click(function(){ 
		$('.category-filter').find('a').removeClass('active'); 
		$(this).addClass('active'); 
		var selector = $(this).attr('data-filter');
		
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	return false;
	});
	//PORTFOLIO ISOTOPE END

	//PRETTYPHOTO...
	$("a[class^='prettyPhoto']").prettyPhoto({
		hook:'data-gal',
		theme:"dark_rounded", 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false 
	});

	//Parallax
	$window = $(window);
	$(".parallax").each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function(){
			var yPos = -($window.scrollTop()/4),
				coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
	
	$('.grayscale img').hide().fadeIn(1000);
	
	//AJAX SUBMIT...
	$('form#frmrsvp').submit(function () {
										   
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_message').html(response);
					$('#ajax_message').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
    });
});

jQuery(window).load(function () {
	jQuery('.grayscale img').greyScale({
		// call the plugin with non-defult fadeTime (default: 400ms)
		fadeTime: 500,
		reverse: false
	});
});