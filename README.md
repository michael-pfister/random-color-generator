### Random Color Generator

## About

This program generates random colors and outputs some ASCII art in that color to the terminal, it is possible to request for specific colors by giving the right arguments.

## How to use this Program

- execute it without any arguments for Art of random color
- you can request specific colors by adding one of the following arguments (red, blue, black, white, green, magenta, grey, yellow, cyan)
- you can add some luminocity by adding the term (Bright) as a second argument

### Examples

```
$ node index.js blue Bright
###############################
###############################
###############################
###                         ###
###         #0000ff         ###
###                         ###
###############################
###############################
###############################
```

```
$ node index.js cyan
Debugger attached.
###############################
###############################
###############################
###                         ###
###         #00ffff         ###
###                         ###
###############################
###############################
###############################
```

```
$ node index.js
###############################
###############################
###############################
###                         ###
###         #4cdaed         ###
###                         ###
###############################
###############################
###############################
```

## Hint

Don't use Hyper for this since it doesn't support the entire HEX color scheme (it will use the most similiar color it knows).
