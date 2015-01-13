
	
	<?php if ($page['left_menu_footer']): ?>
		<div id="left-menu-footer" class="sub-footer first odd">
		  <?php print render($page['left_menu_footer']); ?>
		</div>
	<?php endif; ?>
	
	<?php if ($page['middle_menu_footer']): ?>	
		<div id="middle-menu-footer" class="sub-footer even">
			<?php print render($page['middle_menu_footer']); ?>
		</div>
	<?php endif; ?>
	
	<?php if ($page['right_menu_footer']): ?>	
		<div id="right-menu-footer" class="sub-footer last odd">
					  <?php print render($page['right_menu_footer']); ?>
		</div>
	<?php endif; ?>
	
	<?php if ($page['social_footer']): ?>	
		<div id="social-footer" class="social-footer">
			  <?php print render($page['social_footer']); ?>
		</div>
	<?php endif; ?>

	<?php if ($page['bottom_footer']): ?>	
		<div id="bottom-footer">
			  <?php print render($page['bottom_footer']); ?>
		</div>		 
	<?php endif; ?>
</div>