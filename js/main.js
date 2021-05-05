jQuery(document).ready(() => {
    jQuery('.gallery_block').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
		items: 1,
		dots:true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		smartSpeed: 5000,
		autoplay:true,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				mouseDrag: false,
                touchDrag: false
			},
			640:{
				mouseDrag: false,
                touchDrag: false
			},
			768:{ 
				mouseDrag: false,
                touchDrag: false
			},
			992:{ 
				touchDrag : true
			}
		}
    });
});

jQuery(window).ready(() => {
	jQuery().fancybox({
	  selector : '.project_slider .slick-slide:not(.slick-cloned)',
	  backFocus : false,
	  afterShow : function( instance, current ) {
		current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
	  }
	});
	jQuery(".project_slider").slick({
	  slidesToShow   : 1,
	  infinite : true,
	  dots     : true,
	  arrows   : true
	});
});

jQuery(window).on('click', '.slick-cloned', function (e) {
  var $slides = $(this)
  .parent()
  .children('.slick-slide:not(.slick-cloned)');
  
  $slides
    .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
    .trigger("click.fb-start", { $trigger: $(this) });
  return false;
});

jQuery(window).ready(function(){
	setTimeout(() => jQuery('nav.main_nav').fadeIn(5000), 3000);
	setTimeout(() => jQuery('.main_about_block p').fadeIn(5000), 7000);
	setTimeout(() => jQuery('.gallery_block').fadeIn(5000), 7000);
});
