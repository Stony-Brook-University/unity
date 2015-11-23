(function($){
	
	// section subnav

    $('.section-nav-trigger a').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $sectionNav = $(this).closest('.section-nav-trigger').next('.section-nav');

        if($sectionNav.hasClass('open')) {
            $sectionNav.fadeIn(0,function(){
              $sectionNav.removeClass('open')
                .slideUp('fast',function() {
                    $sectionNav.addClass('sbu-dropdown-nav-hide').fadeIn('fast');
                });
            });
        } else {
            $sectionNav.fadeOut(0,function(){
              $sectionNav.removeClass('sbu-dropdown-nav-hide').addClass('open')
                .slideDown('fast');
            });
        }

    });

    // Get the text of the currently selected section nav and update the dropdown
    if($('.section-nav .selected').length) {
    	$('.section-nav-trigger a').text($('.section-nav .selected').text());
    }

	$('input[type="text"]').on('focus',function() {
		$(this).addClass('focus');
	}).on('focusout',function() {
		if($(this).val().length == 0) {
			$(this).removeClass('focus');
		}
	});

$(document).ready(function($){
	//open/close lateral filter
	$('.cd-filter-trigger').on('click', function(){
		triggerFilter(true);
	});
	$('.cd-filter .cd-close').on('click', function(){
		triggerFilter(false);
	});

	function triggerFilter($bool) {
		var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
		elementsToTrigger.each(function(){
			$(this).toggleClass('filter-is-visible', $bool);
		});
	}

	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Select',
		filter_tab_placeholder_text = filter_tab_placeholder.text();
	
	$('.cd-tab-filter li').on('click', function(event){
		//detect which tab filter item was selected
		var selected_filter = $(event.target).data('type');
			
		//check if user has clicked the placeholder item
		if( $(event.target).is(filter_tab_placeholder) ) {
			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
			$('.cd-tab-filter').toggleClass('is-open');

		//check if user has clicked a filter already selected 
		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
			filter_tab_placeholder.text($(event.target).text());
			$('.cd-tab-filter').removeClass('is-open');	

		} else {
			//close the dropdown and change placeholder text/data-type value
			$('.cd-tab-filter').removeClass('is-open');
			filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
			filter_tab_placeholder_text = $(event.target).text();
			
			//add class selected to the selected filter item
			$('.cd-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');
		}
	});
	
	//close filter dropdown inside lateral .cd-filter 
	$('.cd-filter-block h4').on('click', function(){
		$(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
	})

	//fix lateral filter and gallery on scrolling
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
	});

	function fixGallery() {
		if($('.cd-main-content').length)
		{


		var offsetTop = $('.cd-main-content').offset().top,
			scrollTop = $(window).scrollTop();
		( scrollTop >= offsetTop ) ? $('.cd-main-content').addClass('is-fixed') : $('.cd-main-content').removeClass('is-fixed');
		
		}

	}

	/************************************
		MitItUp filter settings
		More details: 
		https://mixitup.kunkalabs.com/
		or:
		http://codepen.io/patrickkunka/
	*************************************/

	buttonFilter.init();
	$('.cd-gallery ul').mixItUp({
	    controls: {
	    	enable: false
	    },
	    callbacks: {
	    	onMixStart: function(){
	    		$('.cd-fail-message').fadeOut(200);
	    	},
	      	onMixFail: function(){
	      		$('.cd-fail-message').fadeIn(200);
	    	}
	    }
	});

	//search filtering
	//credits http://codepen.io/edprats/pen/pzAdg
	var inputText;
	var $matching = $();

	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		};
	})();

	$(".cd-filter-content input[type='search']").keyup(function(){
	  	// Delay function invoked to make sure user stopped typing
	  	delay(function(){
	    	inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
	   		// Check to see if input field is empty
	    	if ((inputText.length) > 0) {            
	      		$('.mix').each(function() {
		        	var $this = $(this);
		        
		        	// add item to be filtered out if input text matches items inside the title   
		        	if($this.attr('class').toLowerCase().match(inputText)) {
		          		$matching = $matching.add(this);
		        	} else {
		          		// removes any previously matched item
		          		$matching = $matching.not(this);
		        	}
	      		});
	      		$('.cd-gallery ul').mixItUp('filter', $matching);
	    	} else {
	      		// resets the filter to show all item if input is empty
	      		$('.cd-gallery ul').mixItUp('filter', 'all');
	    	}
	  	}, 200 );
	});
});

/*****************************************************
	MixItUp - Define a single object literal 
	to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
  	// Declare any variables we will need as properties of the object
  	$filters: null,
  	groups: [],
  	outputArray: [],
  	outputString: '',
  
  	// The "init" method will run on document ready and cache any jQuery objects we will need.
  	init: function(){
    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    	self.$filters = $('.cd-main-content');
    	self.$container = $('.cd-gallery ul');
    
	    self.$filters.find('.cd-filters').each(function(){
	      	var $this = $(this);
	      
		    self.groups.push({
		        $inputs: $this.find('.filter'),
		        active: '',
		        tracker: false
		    });
	    });
	    
	    self.bindHandlers();
  	},
  
  	// The "bindHandlers" method will listen for whenever a button is clicked. 
  	bindHandlers: function(){
    	var self = this;

    	self.$filters.on('click', 'a', function(e){
	      	self.parseFilters();
    	});
	    self.$filters.on('change', function(){
	      self.parseFilters();           
	    });
  	},
  
  	parseFilters: function(){
	    var self = this;
	 
	    // loop through each filter group and grap the active filter from each one.
	    for(var i = 0, group; group = self.groups[i]; i++){
	    	group.active = [];
	    	group.$inputs.each(function(){
	    		var $this = $(this);
	    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
	    			if($this.is(':checked') ) {
	    				group.active.push($this.attr('data-filter'));
	    			}
	    		} else if($this.is('select')){
	    			group.active.push($this.val());
	    		} else if( $this.find('.selected').length > 0 ) {
	    			group.active.push($this.attr('data-filter'));
	    		}
	    	});
	    }
	    self.concatenate();
  	},
  
  	concatenate: function(){
    	var self = this;
    
    	self.outputString = ''; // Reset output string
    
	    for(var i = 0, group; group = self.groups[i]; i++){
	      	self.outputString += group.active;
	    }
    
	    // If the output string is empty, show all rather than none:    
	    !self.outputString.length && (self.outputString = 'all'); 
	
    	// Send the output string to MixItUp via the 'filter' method:    
		if(self.$container.mixItUp('isLoaded')){
	    	self.$container.mixItUp('filter', self.outputString);
		}
  	}
};

jQuery(document).ready(function($){
	var slidesWrapper = $('.sbu-hero-slider');

	//check if a .sbu-hero-slider exists in the DOM 
	if ( slidesWrapper.length > 0 ) {
		var primaryNav = $('.sbu-primary-nav'),
			sliderNav = $('.sbu-slider-nav'),
			navigationMarker = $('.sbu-marker'),
			slidesNumber = slidesWrapper.children('li').length,
			visibleSlidePosition = 0,
			autoPlayId,
			autoPlayDelay = 5000;

		//upload videos (if not on mobile devices)
		uploadVideo(slidesWrapper);

		//autoplay slider
		setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);

		//on mobile - open/close primary navigation clicking/tapping the menu icon
		primaryNav.on('click', function(event){
			if($(event.target).is('.sbu-primary-nav')) $(this).children('ul').toggleClass('is-visible');
		});
		
		//change visible slide
		sliderNav.on('click', 'li', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if(!selectedItem.hasClass('selected')) {
				// if it's not already selected
				var selectedPosition = selectedItem.index(),
					activePosition = slidesWrapper.find('li.selected').index();
				
				if( activePosition < selectedPosition) {
					nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
				} else {
					prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
				}

				//this is used for the autoplay
				visibleSlidePosition = selectedPosition;

				updateSliderNavigation(sliderNav, selectedPosition);
				updateNavigationMarker(navigationMarker, selectedPosition+1);
				//reset autoplay
				setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
			}
		});
	}

	function nextSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
		checkVideo(visibleSlide, container, n);
	}

	function prevSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
		checkVideo(visibleSlide, container, n);
	}

	function updateSliderNavigation(pagination, n) {
		var navigationDot = pagination.find('.selected');
		navigationDot.removeClass('selected');
		pagination.find('li').eq(n).addClass('selected');
	}

	function setAutoplay(wrapper, length, delay) {
		if(wrapper.hasClass('.sbu-slider-autoplay')) {
			clearInterval(autoPlayId);
			autoPlayId = window.setInterval(function(){autoplaySlider(length)}, delay);
		}
	}

	function autoplaySlider(length) {
		if( visibleSlidePosition < length - 1) {
			nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
			visibleSlidePosition +=1;
		} else {
			prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
			visibleSlidePosition = 0;
		}
		updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
		updateSliderNavigation(sliderNav, visibleSlidePosition);
	}

	function uploadVideo(container) {
		container.find('.sbu-bg-video-wrapper').each(function(){
			var videoWrapper = $(this);
			if( videoWrapper.is(':visible') ) {
				// if visible - we are not on a mobile device 
				var	videoUrl = videoWrapper.data('video'),
					video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
				video.appendTo(videoWrapper);
				// play video if first slide
				if(videoWrapper.parent('.sbu-bg-video.selected').length > 0) video.get(0).play();
			}
		});
	}

	function checkVideo(hiddenSlide, container, n) {
		//check if a video outside the viewport is playing - if yes, pause it
		var hiddenVideo = hiddenSlide.find('video');
		if( hiddenVideo.length > 0 ) hiddenVideo.get(0).pause();

		//check if the select slide contains a video element - if yes, play the video
		var visibleVideo = container.children('li').eq(n).find('video');
		if( visibleVideo.length > 0 ) visibleVideo.get(0).play();
	}

	function updateNavigationMarker(marker, n) {
		marker.removeClassPrefix('item').addClass('item-'+n);
	}

	$.fn.removeClassPrefix = function(prefix) {
		//remove all classes starting with 'prefix'
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});

})(jQuery);