


	jQuery(document).ready(function() {


		if(document.getElementById('main-prefix') != null)
		{
			jQuery('#sidr-0-button').sidr(
			{
				name: 'sidr-0',
				source: '#main-menu ul.menu, #main-prefix'
			});
		}

	});

		/*else
		{
			jQuery('#main-menu-sidr-button').sidr(
			{
				name: 'sidr-left',
				source: '#main-menu-navigation'
			});
		}*/

	/*	jQuery('#search-controller-button').sidr(
		{
			name: 'sidr-right',
			source: '#search-wrapper',
			side: 'right'
		});*/

/*
		jQuery('#sidr-id-main-menu-sidr-button').remove();

		jQuery(window).resize(function() {
       		jQuery.sidr('close', 'sidr-left');
		});*/
	
	//});

