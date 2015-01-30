(function($)
{


$(document).ready(function() {
   /* $("#main-menu ul.menu li").each(
        function() {


            var menuItemWidth = 200;

            if($(this).width() > 200)
                menuItemWidth = $(this).width();

            if(menuItemWidth > 300)
                menuItemWidth = 300;

            alert(menuItemWidth);

            $('#main-menu ul.menu ul', this).width(menuItemWidth);
            $('#main-menu ul.menu ul li', this).width(menuItemWidth);
        }
    );*/

    $('#main-menu ul.menu li').hover(

        function() {
            $('ul.menu', this).slideDown(200);
        },
        function() {
            $('ul.menu', this).stop(true, true).slideUp(200);
        }
    );

    $( window ).resize(function() {

        $( "#main-menu ul.menu ul" ).css( "display", "none" );
});
});

})(jQuery);
