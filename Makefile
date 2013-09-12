PUBLIC=./public
APP=./app
JADE=./node_modules/jade/bin/jade
STYLUS=./node_modules/stylus/bin/stylus
BROWSERIFY=./node_modules/browserify/bin/cmd.js
UGLIFY=./node_modules/uglify-js/bin/uglifyjs
CLEANCSS=./node_modules/clean-css/bin/cleancss
LESS=./node_modules/less/bin/lessc

all: install jade stylus browserify less concat min

jade:
	node $(JADE) $(APP)/markup/index.jade --obj '{"env":"development"}' --pretty --out $(PUBLIC)
	mv $(PUBLIC)/index.html $(PUBLIC)/dev.html
	node $(JADE) $(APP)/markup/index.jade --obj '{"env":"production"}' --out $(PUBLIC)

stylus:
	mkdir -p $(PUBLIC)/styles
	rm -f $(PUBLIC)/styles/app.css
	@for style in `ls $(APP)/styles/*.styl`; do \
		node $(STYLUS) < $$style >> $(PUBLIC)/styles/app.css ; \
	done

browserify:
	mkdir -p $(PUBLIC)/scripts
	node $(BROWSERIFY) -t brfs $(APP)/index.js > $(PUBLIC)/scripts/app.js

less:
	node $(LESS) ./vendor/styles/bootstrap/bootstrap.less > ./vendor/styles/bootstrap.css
	node $(LESS) ./vendor/styles/font-awesome/font-awesome.less > ./vendor/styles/font-awesome.css

concat:
	cat ./vendor/scripts/jquery-2.0.0.js > $(PUBLIC)/scripts/site.js
	cat $(PUBLIC)/scripts/app.js >> $(PUBLIC)/scripts/site.js
	
	cat ./vendor/styles/bootstrap.css > $(PUBLIC)/styles/site.css
	cat ./vendor/styles/font-awesome.css >> $(PUBLIC)/styles/site.css
	cat $(PUBLIC)/styles/app.css >> $(PUBLIC)/styles/site.css

min:
	node $(UGLIFY) $(PUBLIC)/scripts/site.js -o $(PUBLIC)/scripts/site.min.js
	node $(CLEANCSS) $(PUBLIC)/styles/site.css -o $(PUBLIC)/styles/site.min.css
	# Add GA script to production
	cat ./vendor/scripts/ga.js > ./tmp && cat $(PUBLIC)/scripts/site.min.js >> ./tmp
	mv ./tmp $(PUBLIC)/scripts/site.min.js

install: 
	@npm install

.PHONY: jade stylus browserify less concat min
