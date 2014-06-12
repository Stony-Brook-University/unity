<?php

// Plugin definition
$plugin = array(
  'title' => t('Responsive 2 Column Layout'),
  'category' => t('Columns: 2'),
  'icon' => 'responsive-2col.png',
  'theme' => 'responsive-2col',
  'css' => 'responsive-2col.css',
  'regions' => array(

	'title-content' => t('Title Area'),
	
	
    'main-content' => t('Main Content'),
	
	
	
	'right-prefix' => t('Right Column Prefix'),
	'right-postfix' => t('Right Column Postfix'),
	
  ),
);
