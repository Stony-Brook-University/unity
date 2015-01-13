<?php
/**
 * @file
 * Template for a 2 column panel layout.
 *
 * This template provides a two column panel display layout, with
 * each column roughly equal in width.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:

 */
?>

	<div id="title-content"><?php print $content['title-content']; ?></div>

	<div id="right-prefix">
		 <?php print $content['right-prefix']; ?>
	</div>

	 <div id="main-content">
	 <?php print $content['main-content']; ?>
	</div>

	<div id="right-postfix">
		 <?php print $content['right-postfix']; ?>
	</div>

	