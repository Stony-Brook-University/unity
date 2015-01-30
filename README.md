unity
=====
This is a theme for Stony Brook University


package.json
=====
This file is used for node.js 
From a command prompt in this directory you should run npm install and it will load the required node.js packages based on this manifest. It is probably smart to add NodeJS to your system paths. 


Gemfile
=====
This file is used for our ruby packages
From a command prompt in this directory type "bundle install" -- 

You will need ruby installed https://www.ruby-lang.org/en/ and the bundler extension http://bundler.io/ (gem install bundler). It is probably smart to add the ruby bin folder to your System Paths

Gruntfile.js
=====
This file contains our grunt scripts which are used to automate the build process
grunt styleguidewatch will watch our sass folder for changes, compile them and copy compiled css files to the styleguide folder. 



.working
=====
This is a scratch directory used by the grunt script, it can be safely deleted, but will be recreated the next time the script runs. 

.release
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

scss
=====
This is where the SASS / SCSS files are stored. 
	- Partials/design: this set of files should represent the design elements incorporated in a site: Fonts, Colors, backgrounds
	- Partials/components: this set of files should represent components used in a site: Buttons, Banners, Sections
	- Partials/layouts: this set of files should represent major page structural stylings for page layouts, headers, footers