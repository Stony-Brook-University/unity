/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.main div');
});


$(window).resize(function(){
  equalheight('.main div');
});

(function($){

$(document).ready(function(){
var $window = $(window),
        $body = $(document.body),
        $doc = $('.doc-container'),
        $nav = $doc.find ('.doc-nav');

    // make the document navigation affix when scroll
    $nav.affix({
      offset: {
        top: function () {
          return 200; // replace with your top position to start affix
        },
        bottom: function () {
          return 300; // replace your bottom position to release the affix
        }
      }
    });

    // change navigation active according to scroll
    $body.scrollspy({
      target: '.doc-sidebar'
    });   

    // add progress bar for navigation
    $nav.find ('a').before ($('<span class="docs-progress-bar" />'));

    $nav.on ('activate activate.bs.scrollspy', function () {
      $body.scrollspy("refresh");
      var $active = $nav.find('li.active');
      $active.prevAll().find('.docs-progress-bar').css ('width', '100%');
      $active.nextAll().find('.docs-progress-bar').css ('width', '0%');
    });

    $window.on ('scroll', function (event) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout (function () {
        var $active = $nav.find('li.active'),
            $progress = $active.find('.docs-progress-bar'),
            $scrollspy = $body.data('bs.scrollspy'),
            scrollTop    = $scrollspy.$scrollElement.scrollTop() + $scrollspy.options.offset,
            scrollHeight = $scrollspy.$scrollElement[0].scrollHeight || $scrollspy.$body[0].scrollHeight,
            maxScroll    = scrollHeight - $scrollspy.$scrollElement.height(),
            offsets      = $scrollspy.offsets,
            targets      = $scrollspy.targets,
            activeTarget = $scrollspy.activeTarget,
            i;

        if (scrollTop >= maxScroll) {
          $progress.css ('width', '100%');
          return ;
        }

        if (activeTarget && scrollTop <= offsets[0]) {
          $progress.css ('width', '0%');
          return ;
        }
        for (i = offsets.length; i--;) {
          if (scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
            var p1 = offsets[i],
                p2 = scrollTop,
                p3 = !offsets[i + 1] ? maxScroll : offsets[i + 1],
                p = (p2-p1)/(p3-p1)*100;
            $progress.css ('width', (p < 2 ? 2 : p) + '%');
            return ;
          }
        }
      }, 100);
    });   

});

})(jQuery);