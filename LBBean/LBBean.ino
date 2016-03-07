/* 
  This sketch reads the ambient temperature from the Bean's on-board temperature sensor. 
  
  The temperature readings are sent over serial and can be accessed in Arduino's Serial Monitor.
  
  To use the Serial Monitor, set Arduino's serial port to "/tmp/tty.LightBlue-Bean" 
  and the Bean as "Virtual Serial" in the OS X Bean Loader.
    
  This example code is in the public domain.
*/
String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

void setup() {
  // Bean Serial is at a fixed baud rate. Changing the value in Serial.begin() has no effect.
  Serial.begin(57600);
  inputString.reserve(10);
  //inputString = ">> ";
}
void loop() {
  // Get the current ambient temperature in degrees Celsius with a range of -40 C to 87 C.
  //int temperature = Bean.getTemperature();
  
  //Serial.print("Temperature: ");
  //Serial.print(temperature);
  //Serial.println(" C");
  //Bean.sleep(3000);
  serialEvent();
  // print the string when a newline arrives:
  if (stringComplete) {
    Serial.print("Arduino output: ");
    Serial.println(inputString);
    /*Serial.println(inputString.toInt());
    Serial.println("...........................");
    Serial.println(inputString.toInt() == 1);
    Serial.println(inputString.toInt() == 0);
    Serial.println("...........................");
    */
    if ( inputString.toInt() == 1 ){
      Bean.setLed(255, 0, 0);
      Bean.sleep(1000); 
    }else if ( inputString.toInt() == 0 ){
      Bean.setLed(0, 0, 0);
      Bean.sleep(1000);
    }
    // clear the string:
    inputString = "";
    stringComplete = false;
  }
    
}

void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}
