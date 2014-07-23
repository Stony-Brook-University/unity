


	jQuery(document).ready(function() {


		if(document.getElementById('main-prefix') != null)
		{
			jQuery('#main-menu-sidr-button').sidr(
			{
				name: 'sidr-left',
				source: '#main-menu-navigation, #main-prefix'
			});
		}
		else
		{
			jQuery('#main-menu-sidr-button').sidr(
			{
				name: 'sidr-left',
				source: '#main-menu-navigation'
			});
		}

	/*	jQuery('#search-controller-button').sidr(
		{
			name: 'sidr-right',
			source: '#search-wrapper',
			side: 'right'
		});*/


		jQuery('#sidr-id-main-menu-sidr-button').remove();

		jQuery(window).resize(function() {
       		jQuery.sidr('close', 'sidr-left');
		});
	
	});

