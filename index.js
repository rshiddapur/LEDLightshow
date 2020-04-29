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

board.on('ready', function(){

	// Definitions for individual LEDs
	RedLED = new five.Led(9);
	GreenLED = new five.Led(10);
	BlueLED = new five.Led(11);

	LightStrip = new five.Led.RGB([9, 10, 11]);

	BPM = 171; // TODO: pull BPM information from Spotify API

	bpmStrobe(BPM, "white");
}); 

function bpmStrobe(BPM, color) {
	var MSPB = (60.0 / BPM) * 1000.0; // milliseconds per beat

	LightStrip.off();

	//LightStrip.color(0, 255, 255);
	LightStrip.color(color);
	// Can also use LightStrip.color() without inputs to return the current state value

	LightStrip.strobe(MSPB);
}
