<?php include("header.php"); ?>	
	
	<div id="container">

		<div class="section">
			<div class="section-content">
				<h1 class="heading-styleguide">Header</h1>
				
				<p class="intro-text">

				The header is the first section of the page. It contains The Stony Brook University Logo and your sites image based text treatment. It also incorporates the sites navigation and search elements. 


				</p>
				
				<p class="intro-text"> We currently have one version of header, but are planning to incorporate addtional styles, specifically the black bar style followed on lots of departmental sites. 
				</p>
			</div>
		</div>

		<div class="section gray-background">
			<div class="section-content">
				<h1 class="heading-styleguide">Navigation</h1>
				
				<p class="intro-text">

				The navigation bar consists of a red band with white links using a list based structure.  


				</p>
				
				<p class="intro-text"> We currently have one version of header, but are planning to incorporate addtional styles, specifically the black bar style followed on lots of departmental sites. 
				</p>
			</div>
		</div>

		<div class="section">
			<div class="section-content">
				<h1 class="heading-styleguide">Main Wrap</h1>
				
				<p class="intro-text">The main wrap div defines the fixed width of our sites view port. Rather than being completely fluid we have opted to use these fixed viewports to ensure a more consistent experience and flow of our content.
				</p>
				
				<p class="intro-text"> We currently follow 5 main breakpoints for our content: 
				<strong>1920, 1280, 960, 640 and 320px</strong> Notice that these are multiples of one another. This allows us to build blocks that will stack and act consistently across each of our viewports. 
				</p>
			</div>
		</div>


		<div class="section gray-background">
			<div class="section-content">
				<h1 class="heading-styleguide">Sections</h1>
				
				<p class="intro-text">Each Page Is Broken Up Into Sections. Some sections should be controlled by the over all theme, like the header, navigation and footer, while other sections are content dependent allowing editors to have more control. </p>

				<p class="intro-text">
				Sections have a wrapper that will always take 100% of the available width. Section wrappers can have background colors, textures or images
				</p>

				<p class="intro-text">
				The sections themselves are capped at a max-width of 1080px and are centered within the wrapper. The sections themselves don't have backgrounds.
				</p>



			</div>
		</div>

		<div class="section">
			<div class="section-content">
				<h1 class="heading-styleguide">Cards</h1>
				
				<p class="intro-text">Sections can contain paragraph text like this, but can also include modular content in blocks called <strong>Cards</strong>.
				</p>
				
				<p class="intro-text">
				 There are different types of cards, including simple text, icon and link, quote cards, story cards </p>


				<p class="intro-text">
				 Cards are floated elements with a fixed percentage size and padding based on the number of desired cards per row.  </p>

				 

			
			</div>
		</div>

		<div class="section gray-background">

<div class="section-content has-cards one-card">

				<div class="card sample-card">
			
				Card 1
				</div>

			</div>


<div class="section-content has-cards two-cards">

				<div class="card sample-card link-card">
				<a href="#">Card 1 (Link Card)
				</a>
				
				</div>

				<div class="card sample-card">
			
				Card 2
				</div>

			</div>

			<div class="section-content has-cards three-cards">

				<div class="card sample-card">
			
				Card 1
				</div>

				<div class="card sample-card">
				Card 2
				</div>

				<div class="card sample-card">
				
				Card 3
				</div>
			</div>

			<div class="section-content has-cards four-cards">

				<div class="card sample-card border-card-black">
				Card 1
				</div>

				<div class="card sample-card border-card-black">
				Card 2
				</div>

				<div class="card sample-card">
				Card 3
				</div>

				<div class="card sample-card">
				
				Card 4
				</div>

				<div class="card sample-card">
				
				Card 5
				</div>

				<div class="card sample-card">
				
				Card 6
				</div>

				<div class="card sample-card">
				
				Card 7
				</div>

				<div class="card sample-card">
				
				Card 8
				</div>
			</div>

		</div>
	</div>


<?php include("footer.php"); ?>