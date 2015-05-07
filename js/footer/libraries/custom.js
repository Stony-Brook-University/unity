(function($){



		$('.count-item').each(function(i) {
			$(this).appear(function() {
				var number = $(this).find('.count-to').data('countto');
				$(this).find('.count-to').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
			});
		});

		/* ---------------------------------------------- /*
		 * Section Backgrounds
		/* ---------------------------------------------- */

		var module = $('.intro-module, .intro-module-small, .side-image');
		module.each(function(i) {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});


})(jQuery);