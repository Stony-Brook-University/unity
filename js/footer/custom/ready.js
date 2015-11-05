/* Slick Scripts */

(function($) {
    $(document).ready(function() {
        $('.js-unity-slider--single-item').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

})(jQuery);

(function($){

  $(document).ready(function() {
  	$('.nivo-lightbox').nivoLightbox();
  });

})(jQuery);

/* jshint ignore:start */
/* Crossfade Images for Homepage */

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 7000);
})
/* jshint ignore:end */



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

$('.hero-scroll').click(function () {
   $('html, body').animate({scrollTop:$(this).parent().parent().next().offset().top}, 'slow');
});

})(jQuery);