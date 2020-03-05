var five =require('johnny-five'); //require/import the johnny-five module
var board=new five.Board(); //the Board class from johnny-five module

//When the board is ready strobe white every 500 milliseconds.

board.on('ready',function(){
    var RedLED=new five.Led(9);
    var GreenLED=new five.Led(10);
    var BlueLED=new five.Led(11);
    
    RedLED.strobe(500);
	GreenLED.strobe(500); 
	BlueLED.strobe(500);
}); 
