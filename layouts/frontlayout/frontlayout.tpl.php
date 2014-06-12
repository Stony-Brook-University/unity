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

	<div id="banner" class="unity-region"><?php print $content['banner']; ?></div>
	


	<div id="main-wrap">
		<div id="service-catalog" class="unity-region"><?php print $content['top-middle']; ?></div>
		<div id="features" class="unity-region"><?php print $content['top-right']; ?></div>
		<div id="system-status" class="unity-region"><?php print $content['top-left']; ?></div>

		<div id="headlines" class="unity-region"><?php print $content['bot-left']; ?></div>
		<div id="blogs" class="unity-region"><?php print $content['bot-mid']; ?></div>

		<div id="events" class="unity-region"><?php print $content['bot-right']; ?></div>

	</div>