
$(document).ready(function() {
    $("li.main-menu-menu-item").each(
        function() {


            var menuItemWidth = 200;

            if($(this).width() > 200)
                menuItemWidth = $(this).width()-2;
            $('ul.main-menu-sub-menu', this).width(menuItemWidth);
            $('ul.main-menu-sub-menu li', this).width(menuItemWidth);
        }
    );

    $('li.main-menu-menu-item').hover(
        function() {
            $('ul', this).slideDown(200);
        },
        function() {
            $('ul', this).stop(true, true).slideUp(200);
        }
    );
});
