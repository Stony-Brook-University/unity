
<div id="page" class="clearfix">

 	<div id="header">
    			
		<?php include "header.inc"; ?>			
       
	</div>
	

	

	<div id="main-menu">

	<?php include "main-nav.inc"; ?>

	
	</div>	
	

		<?php if ($page['banner']): ?>
			<div id="banner">

			</div>
		<?php endif; ?>
	
		<?php if ($page['main_prefix']): ?>
				<div id="main-prefix"><?php print render($page['main_prefix']); ?></div>
			<?php endif; ?>
		
		<?php if ($page['content']): ?>	
		<div id="main-wrap" class="clearfix">
		
		
				 <?php print render($title_prefix); ?>
				  <?php if ($title): ?>
					<h1 class="title" id="page-title">
					  <?php print $title; ?>
					</h1>
				  <?php endif; ?>
				  <?php print render($title_suffix); ?>
				  
				  	
				  <?php if ($tabs): ?>
					<div class="tabs">
					  <?php print render($tabs); ?>
					</div>
				  <?php endif; ?>
				
				<?php print render($messages); ?>
				 
				  <?php print render($page['content']); ?>
				 
		</div>
				 
		 <?php endif; ?>
		 
		 	<?php if ($page['main_suffix']): ?>
				<div id="main-suffix"><?php print render($page['main_suffix']); ?></div>
			<?php endif; ?>
	
	
	<div id="footer">
		
		<?php include "footer.inc"; ?>
		
	 </div>

</div> 
