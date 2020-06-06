# mystery-time
Escape room browser based game

## Development
This project is intended to be entirely STATIC! Built on top of Pelican and some javascript. I intend to dump this mess in an S3 bucket and serve away!

Pelican is intended to generate blog posts and such, I think this use case is abusing it a little bit.

What maps in the Pelican system to the concept of an 'article', now corresponds to a game screen/state. I am overloading the 'article' metatdata to get a few variables that can be plugged into the templates.

Very simple puzzle types can have most of their data in the 'article' itself, and only have a simple JS function to validate the solution (intro_pussle1 is an example).

More complex puzzles pretty much entirely live in the javascript library, and get populated at document ready.

### During development
You put your virtualenv in "staticsite" like a dingus
```
source staticsite/bin/activate
```

If your dev server isn't running, start it
```
make devserver
```

It will probably pop the pid into `srv.pid`, you will have to manually kill it to turn it off. Lives at `http://localhost:8000/`


Make some changes to the code/templates, then run

```
pelican -s pelicanconf.py -o output -t theme content
```

to re-generate what needs regeneration (needed for static assets too).


### Misc Links
[Helpful Pelican Quickstart](https://www.fullstackpython.com/blog/generating-static-websites-pelican-jinja2-markdown.html) - Easy tutorial for first timers

[Pelican Read the Docs](https://docs.getpelican.com/en/stable/content.html) - More in-depth docs

[jQuery UI Autocomplete](https://jqueryui.com/autocomplete/) - JS Library for autocomplete

[Slick](https://github.com/kenwheeler/slick/) - JS image carosel library 

[JS Cookie](https://github.com/js-cookie/js-cookie) - JS Cookie interacting library