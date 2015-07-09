
function getColors()
{
	colors = ['bg-red','bg-dark-red','bg-gray','bg-light-gray','bg-dark-gray','bg-white','bg-black','bg-pom','bg-turquoise','bg-alizarin','bg-amethyst','bg-sun','bg-asphalt'];
	//foreach color card

 	return colors;
}

function getOverlays()
{
	overlays = [];
	//foreach color card
	
	$("#colors .overlay-card").each(function() {

		classList = $(this).attr('class').split(/\s+/);
	 	
	 	$.each(classList, function(index, item) {
	 		
	 		if(item.indexOf('overlay-') == 0 && item != 'overlay-card')
	 		{
	 			overlays.push(item);
	 		}
	 	});
 	});

 	return overlays;
}


function getTextures(callBack)
{

	
	//console.log('colors: ' + colors);

  	//read list of textures from json
  	$.getJSON("assets/textures.json", callBack); 

}

function getPaddings()
{
	paddings = ['fluffy', 'cushy', 'airy', 'spacey', 'comfy', 'cozy', 'snug', 'tight'];
}

function getArrayAsListItems(arr)
{
	var listItems='';
	
	$.each(arr, function(index, item) {
				listItems += "<li class=" + item + "></li>";
	});	
  	
}
