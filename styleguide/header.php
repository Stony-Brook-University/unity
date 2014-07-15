

<?php 

$bodystyles = 'html unity not-front unity-no-sidebar panel-layout-snape ';


if (isset($_GET['q']) && $_GET['q'] == 'fixed')
    $bodystyles = $bodystyles . ' fixed-width';
  else
    $bodystyles = $bodystyles . ' full-width';

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
@import url("stylesheets/drupal-base.css");


@import url("stylesheets/style.css");

</style>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

</head>
<body class="<?php print $bodystyles ?>" >

<div id="page" class="clearfix">

 	<div id="header">
    			
		   <a href="http://www.stonybrook.edu" title="Stonybrook University" rel="home" id="university-logo"><img src="stylesheets/images/stony-brook-university.png" alt="Stony Brook University Logo" /></a><a id="logo" href="/"><img title="Home" src="stylesheets/images/doit-logo.png" /></a>       
       
	</div>
	
  <div id="main-menu-wrap">

  	<div id="main-menu">

  	  <div id="main-menu-controller" class="navigation show-phone">
  	  	<ul class="links clearfix">
  	  		<li id="prefix-display-button"><a href="#"><span class="sb-icon-menu"></span> Menu</a></li>
  	  	</ul>
  	  </div>
  	  
        <div id="main-menu-navigation" class="navigation hide-phone">

  			
      <ul class="menu">
  		<li class="first leaf"><a href="/" title="Home">About Unity</a></li>
  		<li class="leaf"><a href="/text.php" title="Home">Design</a></li>
  		<li class="leaf"><a href="/layouts.php" title="Home">Layouts</a></li>
  	</ul>

  	</div>

  </div>
			

</div>

  
