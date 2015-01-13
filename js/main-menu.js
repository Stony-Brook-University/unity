(function($)
{


$(document).ready(function() {
    $("#main-menu ul.menu li").each(
        function() {


            var menuItemWidth = 200;

            if($(this).width() > 200)
                menuItemWidth = $(this).width()-2;
            $('#main-menu ul.menu ul', this).width(menuItemWidth);
            $('#main-menu ul.menu ul li', this).width(menuItemWidth);
        }
    );

    $('#main-menu ul.menu li').hover(
        function() {
            $('ul.menu', this).slideDown(200);
        },
        function() {
            $('ul.menu', this).stop(true, true).slideUp(200);
        }
    );
});

})(jQuery);
