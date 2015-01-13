<?php

// Plugin definition
$plugin = array(
  'title' => t('Front Layout'),
  'category' => t('Columns: 3'),
  'icon' => 'frontlayout.png',
  'theme' => 'frontlayout',
  'css' => 'frontlayout.css',
  'regions' => array(
	'topcallout' => t('Top Callout'),
	'banner' => t('Banner'),
	
    'top-left' => t('Top Left side'),
	'top-middle' => t('Top Middle side'),
    'top-right' => t('Top Right side'),
	
	'bot-left' => t('Bottom Left side'),
  'bot-mid' => t('Bottom Middle side'),
	'bot-right' => t('Bottom Right side'),
  ),
);
