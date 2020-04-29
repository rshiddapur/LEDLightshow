var five = require('johnny-five'); //require/import the johnny-five module
var board = new five.Board(); //the Board class from johnny-five module

// When the board is ready, strobe to the BPM of a given song.

// If individual control is needed 
var RedLED;
var GreenLED;
var BlueLED;

// Controls the strip as an RGB LED
var LightStrip;

// Global song information values
var BPM;
var valence;

board.on('ready', function(){

	// Definitions for individual LEDs
	RedLED = new five.Led(9);
	GreenLED = new five.Led(10);
	BlueLED = new five.Led(11);

	LightStrip = new five.Led.RGB([9, 10, 11]);
	LightStrip.off(); // reset from previous state

	BPM = 171; // TODO: pull BPM information from Spotify API. Represented as "tempo"
	valence = 0.5; // TODO: pull valence information from Spotify API. Represented as "valence"

	// Can also use LightStrip.color() without inputs to return the current state value
	//bpmStrobe(BPM, "white"); // Strobe the light strip based on a given song BPM and color.
	valenceColor(valence); // Change the color of the LED strip based on a given song valence.
}); 

// Strobe the LED strip based on a given song BPM and color. 
// Color can be parsed as any CSS color name string, a hex color string (w/ or w/o a leading #),
// an array of 8-bit bytes, or an object of 8-bit bytes. 
function bpmStrobe(BPM, color) {
	var MSPB = (60.0 / BPM) * 1000.0; // milliseconds per beat

	LightStrip.off(); // reset from previous state

	LightStrip.color(color);
	LightStrip.strobe(MSPB);
}

// Change the color of the LED strip based on a given song valence.
// Valence represents the happiness of a song and ranges from 0 (sad) to 1 (happy).
// The light strip will go from blue (sad) to red (happy) based on valence.
function valenceColor(valence) {

	LightStrip.off(); // reset from previous state
	
	var red = 255.0 * valence;
	var blue = 255.0 - red;
	LightStrip.color(red, 0.0, blue);
}
