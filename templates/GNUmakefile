all:: bem-bl
all:: $(patsubst %.bemdecl.js, %.bemhtml.js ,$(wildcard pages/*/*.bemdecl.js))

BEM_BUILD=bem build \
	-l bem-bl/blocks-common/ \
	-l bem-bl/blocks-desktop/ \
	-l blocks/ \
	-d $< \
	-t $1 \
	-o $(@D) \
	-n $(*F)

BEM_CREATE=bem create block \
		-l pages \
		-t $1 \
		$(*F)

#%.html: %.bemhtml.js %.css
#	rm -f $@
#	$(call BEM_CREATE,bem-bl/blocks-desktop/i-bem/bem/techs/html.js)

%.bemhtml.js: %.deps.js
	$(call BEM_BUILD,bem-bl/blocks-desktop/i-bem/bem/techs/bemhtml.js)

%.deps.js: %.bemdecl.js
	$(call BEM_BUILD,deps.js)

#%.bemdecl.js: %.bemhtml
#	$(call BEM_CREATE,bemdecl.js)

.PRECIOUS: %.css
%.css: %.deps.js
	$(call BEM_BUILD,bem/techs/css.js)
#	yui-compressor $@ -o $@
#	gzip -cf9 $@ >$@.gz

.PHONY: all
