var five =require('johnny-five'); //require/import the johnny-five module
var board=new five.Board(); //the Board class from johnny-five module

//When the board is ready strobe every 500 milliseconds.

// If individual control is needed 
var RedLED;
var GreenLED;
var BlueLED;

// Controls the strip as an RGB LED
var LightStrip;

board.on('ready', function(){

	// Definitions for individual LEDs
	RedLED = new five.Led(9);
	GreenLED = new five.Led(10);
	BlueLED = new five.Led(11);

	LightStrip = new five.Led.RGB([9, 10, 11]);

	LightStrip.off();

	//LightStrip.color(0, 255, 255);
	LightStrip.color("darkgreen");

	LightStrip.strobe(500);

}); 
