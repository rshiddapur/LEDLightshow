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

## Running code
index.js is the main file that the project runs on. To run the project, use the following command:

```node index.js```

To stop the app, press Ctrl+C.


## Useful documentation
This project uses [Johnny-Five](http://johnny-five.io/), an open-source JavaScript robotics and IoT platform. [The LED documentation](http://johnny-five.io/api/led/) is particularly useful. 
