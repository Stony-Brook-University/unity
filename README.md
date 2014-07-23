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
