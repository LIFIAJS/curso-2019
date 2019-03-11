all: start

start:
	reveal-md --preprocessor preproc.js curso.md
 
build: clean
	reveal-md curso.md --static docs --static-dirs=static

clean:
	-rm -r _static

open: build
	sensible-browser _static/index.html
