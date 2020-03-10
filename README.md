# LEDLightshow
An Arduino-based project that uses the Spotify API to control an LED light strip.

## Setup
First, [download the Arduino IDE](https://www.arduino.cc/en/main/software) or use the online IDE to install the Firmata protocol on the Arduino board. 
To do this, connect the Arduino to your computer with the serial cable and then open the StandardFirmata sketch in the IDE:

File > Examples > Firmata > StandardFirmata

Verify and run this sketch on your Arduino board.

Next, [download](https://nodejs.org/en/download/) and setup NodeJs if you haven't already. Check that it installed correctly with the following commands:

```node -v```

```npm -v```

After verifying NodeJs is installed correctly, you should be all set!

[For troubleshooting, go here.](https://www.instructables.com/id/NodeJs-and-Arduino/)

### Spotify Setup (IN PROGRESS)
https://developer.spotify.com/documentation/web-api/quick-start/
https://github.com/spotify/web-api-auth-examples

### Hardware Setup
For this project, you will need an Arduino Uno with a 12V power supply, a 12V RGB LED light strip, wires, three NMOSFETs, and a breadboard. 

1. Connect the power rail to the power wire on the LED strip.

2. Connect pins 9, 10, and 11 to the red, green, and blue LEDs, respectively. To connect the RGB components, you must use a N-type MOSFET rated for the LED strip used (330mA per meter of LED strip). Be sure to ground each MOSFET. 

3. Power on your circuit!


## Running code
index.js is the main file that the project runs on. To run the project, use the following command:

```node index.js```

To stop the app, press Ctrl+C.


## Useful documentation
This project uses [Johnny-Five](http://johnny-five.io/), an open-source JavaScript robotics and IoT platform. [The LED documentation](http://johnny-five.io/api/led/) is particularly useful. 
