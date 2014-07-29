

<?php 

$bodystyles = 'html unity styleguide not-front unity-no-sidebar';


if (isset($_GET['p']) && $_GET['p'] == 'fixed')
    $bodystyles = $bodystyles . ' fixed-width';
else if((isset($_GET['p']) && $_GET['p'] == 'full'))
    $bodystyles = $bodystyles . ' full-width';


if (isset($_GET['w']) && $_GET['w'] == '1200')
    $bodystyles = $bodystyles . ' max-1200';
else if (isset($_GET['w']) && $_GET['w'] == '1080')
    $bodystyles = $bodystyles . ' max-1080';
else if (isset($_GET['w']) && $_GET['w'] == '960')
    $bodystyles = $bodystyles . ' max-960';
 

//print $bodystyles;


?> 


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" version="XHTML+RDFa 1.0" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">

<head profile="http://www.w3.org/1999/xhtml/vocab">
  
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="-1" />  
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,
      width=device-width, user-scalable=no, target-densitydpi=medium-dpi" />
        
 <link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/a8a128e0-bc0f-4153-aa44-ede674f36473.css"/>
 
  <title>DoIT Unity Style Guide- Division of Information Technology, Stony Brook University</title>
<style>
@import url("/stylesheets/drupal-base.css");


@import url("/stylesheets/style.css");

@import url("/local-styles/local-styles.css");

</style>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">

  <link rel='shortcut icon' href='/stylesheets/images/favicon.ico' />


  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  
		
		<script src="/javascripts/main-menu.js"></script>
    <script src="/javascripts/sidr/jquery.sidr.min.js"></script>
    <script src="/javascripts/sidr/unity.sidr.js"></script>
		

  

</head>
<body class="<?php print $bodystyles ?>" >

<div id="page" class="clearfix">

 	<div id="header">
    			<div id="header-content"><a href="http://www.stonybrook.edu" title="Stonybrook University" rel="home" id="university-logo"><img src="/stylesheets/images/stony-brook-university.png" alt="Stony Brook University Logo" /></a><a id="site-logo" href="/"><img title="Home" src="/stylesheets/images/doit-logo.png" /></a></div>
	</div>
	
  <div id="main-menu">
          <div id="main-menu-content">


                  <div id="main-menu-navigation" class="navigation">

            			
                <ul id="main-menu-parent-list" class="menu main-menu-list">
                <li id="main-menu-sidr-button" class="main-menu-menu-item main-menu-small-screen"><a href="#"><span class="sb-icon-menu"></span> Menu</a></li>
            		<li class="first leaf main-menu-menu-item" class="main-menu-menu-item"><a href="/" title="Home">About Unity</a></li>
            		<li class="leaf main-menu-menu-item"><a href="/text.php" title="Home">Design</a></li>
            		<li class="leaf main-menu-menu-item"><a href="/layouts.php" title="Home">Layouts</a></li>
                
					<li class="leaf main-menu-menu-item"><a href="/examples/index.php" title="Home">Examples</a>
						<ul class="main-menu-sub-menu">
							<li><a href="/examples/blackboard.php">Blackboard</a></li>
							<li><a href="followed.html">menu item</a></li>
							<li><a href="followed.html">menu item</a></li>
						</ul>
					</li>
            	</ul>

            	</div>

            </div>
 			

</div>

  
