
(function($){

$(document).ready(function() {
	$('.nivo-lightbox').nivoLightbox();
});

})(jQuery);


/* Scalable use of accordion-style slideUp/slideDown with hide-accessible */

/* drop-accordion */

(function( $ ) {

var accordionContent;
var openTab;
$('.drop-accordion .tab').on('click',function() {
  accordionContent = $(this).closest('.item').find('.accordion-content');
  openTab = $(this).closest('.drop-accordion').find('.open').closest('.item').find('.tab');

  if(accordionContent.hasClass('hide-accessible')) {
    $(this).addClass('active');
    accordionContent.slideUp(0,function(){
      accordionContent.removeClass('hide-accessible').addClass('open')
        .slideDown('fast');
      openTab.click();
    });

  } else {
    $(this).removeClass('active');
    accordionContent.slideUp('fast',function(){
      accordionContent.addClass('hide-accessible').removeClass('open')
        .slideDown(0);
    });

  }

});

})(jQuery);

/* scroll button */

(function($) {

$(".hero-scroll").click(function () {
   $('html, body').animate({scrollTop:$(this).parent().parent().next().offset().top}, 'slow');
});

})(jQuery);

 new WOW().init();