var querystring = window.location.href.split("?").slice(1).join("?");

$('a').each(function()
{
    var href = $(this).attr('href');

    if(href) {
        href += (href.match(/\?/) ? '&' : '?') + querystring;
        $(this).attr('href', href);
    }
});