


	jQuery(document).ready(function() {


		if(document.getElementById('main-prefix') != null)
		{
			jQuery('#prefix-display-button').sidr(
			{
				name: 'sidr-left',
				source: '#main-menu-navigation, #main-prefix'
			});
		}
		else
		{
			

			jQuery('#prefix-display-button').sidr(
			{
				name: 'sidr-left',
				source: '#main-menu-navigation'
			});
		}

		jQuery('#search-controller-button').sidr(
		{
			name: 'sidr-right',
			source: '#search-wrapper',
			side: 'right'
		});


		jQuery(window).resize(function() {
       		jQuery.sidr('close', 'sidr-left');
		});
	
	});

