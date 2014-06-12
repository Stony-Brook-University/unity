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
	


	<div id="content-primary">
		<div id="section-a" class="unity-region"><?php print $content['section-a']; ?></div>
		<div id="section-b" class="unity-region"><?php print $content['section-b']; ?></div>
		<div id="section-c" class="unity-region"><?php print $content['section-c']; ?></div>

		<div id="section-d" class="unity-region"><?php print $content['section-d']; ?></div>
		<div id="section-e" class="unity-region"><?php print $content['section-e']; ?></div>
		<div id="section-f" class="unity-region"><?php print $content['section-f']; ?></div>
	</div>