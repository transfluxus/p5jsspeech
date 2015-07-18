# p5jsspeech
Finally speech supported generative Art!
Based on the p5.js Speech Recognition

The Library only runs on a server. 
The easiest way is to start a simple python server: python -m SimpleHTTPServer 8000 in the project folder.

The program prefers german or english.
Scream into microphone a shape of the following, a color and a size (not for lines) 
These are the 3 available shapes:
kreis, circle
quadrat, square
linie, line

these are the 4 available colors:
rot,red
green (grün doesn't work cuz of some anoying umlaut stuff)
blau, blue
schwarz, black

the size can be any integer number

the shape is drawn at a random spot on the screen.

you can also scream zeichnen, draw to draw with a subset of parameters or scream clear,start to clear the already set parameters.

