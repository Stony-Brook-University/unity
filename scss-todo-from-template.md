function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!--#include virtual="header.htm" -->\n\n\n<xmp theme="united" style="display:none;">\n\n' +
((__t = ( marker )) == null ? '' : __t) +
'\n\n</xmp>\n\n<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>\n\n\n<!--#include virtual="footer.htm" -->\n\n';

}
return __p
}