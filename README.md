unity
=====
This is a theme for Stony Brook University; See it in action at http://it.stonybrook.edu


package.json
=====
This file is used for node.js 
From a command prompt in this directory you should run npm install and it will load the required node.js packages based on this manifest. It is probably smart to add NodeJS to your system paths. 


Gemfile
=====
This file is used for our ruby packages
From a command prompt in this directory type "bundle install" -- 

You will need ruby installed https://www.ruby-lang.org/en/ and the bundler extension http://bundler.io/ (gem install bundler). It is probably smart to add the ruby bin folder to your System Paths

gulpfile.js
=====
This file contains our gulp scripts which are used to automate the build process


.dist
=====
This is the directory where the final produced assets (stylesheets, javascripts, images and fonts) are copied to. It can be safely deleted, but will be recreated the next time the script runs. 

fonts
=====
Any webfonts should be included in this project, typically each font set should be put in its own folder

images
=====
Collection of images referenced inside the CSS. 

js
=====
All javascripts should be placed in the appropriate folder inside JS, scripts can be targeted for inclusion in either the header of footer. 
If the JS Script is from a library it should be placed in the appropriate libraries folder.

scss
=====
This is where the SASS / SCSS files are stored. 
	- Libraries: this is where third party css/scss files should be placed. You should not directly modify those libraries so that in the future we can easily upgrade without losing any customizations.
	- Global: these are a collection of files aimed at scaffolding this project, includes variables, mix-ins and extensions.
	- Elements: these are styles that apply to a single tag (link, table, ul) or type of tag (headings), they are useful for defining simple styles that can be incorporated in more complex components.
	- Components: these are patterns built from multiple html elements to form a style component.