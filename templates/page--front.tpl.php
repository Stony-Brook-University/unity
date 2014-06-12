
<div id="page" class="clearfix">

 	<div id="header">
        
		<?php include "header.inc"; ?>
    
	</div><!--#header-->
	
	<div id="main-menu">

		<?php include "main-nav.inc"; ?>

	</div>
	
    
	<div id="main-wrapper-section">	
		
		
			
		<?php if ($page['content']): ?>	
			<?php print render($page['content']); ?>		 
		 <?php endif; ?>
	
	</div>
		
	<div id="footer">
		
		<?php include "footer.inc"; ?>
		
	 </div>
	 
</div>