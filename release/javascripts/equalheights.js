jQuery(document).ready(function() {
   var maxHeight = -1;

   jQuery('.equal-height ul li').each(function() {
   	//alert(jQuery(this).height());

     maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
   });

   jQuery('.equal-height ul li').each(function() {
   	jQuery(this).height(maxHeight+25);
   });
 });