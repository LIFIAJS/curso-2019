all: start

start:
	reveal-md curso.md

build: clean
	reveal-md curso.md --static --static-dirs=static

clean:
	-rm -r _static

open: build
	sensible-browser _static/index.html
