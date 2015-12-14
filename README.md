unity
=====
This is a theme for Stony Brook University; See it in action at http://it.stonybrook.edu


Vagrantfile
=====
This file is used to load our vagrant VM based off of Geerling Guys DrupalVM [https://github.com/geerlingguy/drupal-vm/]
While Drupal itself isn't installed as part of our particular configuration, the VM provides a lot of useful tools out of the box that are perfect for assisting with Unity Development

This Vagrant file loads the vagrant file in the /vagrant directory. This allows us to keep the vagrant configuration separate and by itself, while still running vagrant commands from anywhere within out project directory structure. 

You will want to run 2 vagrant plugins:

vagrant plugin install vagrant-auto_network #this assigns a non-routable dynamic IP
vagrant plugin install vagrant-hostsupdater #this updates your HOST machines hosts file with the appropriate linkages


package.json
=====
This file is used for node.js 
From a command prompt in this directory you should run npm install and it will load the required node.js packages based on this manifest. It is probably smart to add NodeJS to your system paths. 


gulpfile.js
=====
This file contains our gulp scripts which sare used to automate the build process.
Simply run gulp to build things from within the unity directory.


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
	- Partials/design: this set of files should represent the design elements incorporated in a site: Fonts, Colors, backgrounds
	- Partials/components: this set of files should represent components used in a site: Buttons, Banners, Sections
	- Partials/layouts: this set of files should represent major page structural stylings for page layouts, headers, footers

Other Useful Commands
=====
npm install

IIS - new web site, ssinc in handlers for the site, add for server side include for html
=======
	- Libraries: this is where third party css/scss files should be placed. You should not directly modify those libraries so that in the future we can easily upgrade without losing any customizations.
	- Global: these are a collection of files aimed at scaffolding this project, includes variables, mix-ins and extensions.
	- Elements: these are styles that apply to a single tag (link, table, ul) or type of tag (headings), they are useful for defining simple styles that can be incorporated in more complex components.
	- Components: these are patterns built from multiple html elements to form a style component.
