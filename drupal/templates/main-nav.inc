  <div id="main-menu-controller" class="navigation show-phone">
	  	<ul class="links clearfix">
	  		<li id="prefix-display-button"><a href="#"><span class="sb-icon-menu"></span> Menu</a></li>
	  	</ul>
	  </div>
	  
      <div id="main-menu-navigation" class="navigation hide-phone">

		<?php if ($page['primary_menu']): ?>	
				<?php print render($page['primary_menu']); ?>



		 <?php endif; ?>
		 


   
      </div> <!-- /#main-menu -->
	
 	 	
		<?php if ($page['search']): ?>	
			
			<div id="sb-search" class="sb-search">
				<?php print render($page['search']); ?>
			</div>
		 <?php endif; ?>
