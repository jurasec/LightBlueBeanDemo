//var SerialPort = require("serialport").SerialPort

var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor
var s = require('sleep');
var stdin = process.openStdin();


var serialPort = new SerialPort("/dev/cu.LightBlue-Bean", {
  baudrate: 57600,
   parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]


s.sleep(2);

serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    serialPort.on('data', function(data) {
      if( data != "\n")
      console.log('data received: ' + data);
    });

    stdin.addListener("data", function(d) {
      // note:  d is an object, and when converted to a string it will
      // end with a linefeed.  so we (rather crudely) account for that  
      // with toString() and then trim() 
      console.log("you entered: [" + 
          d.toString().trim() + "]");

      serialPort.write( d.toString().trim()+"\n" , function(err, results) {
        //console.log('err ' + err);
        //console.log('results ' + results);
      });
    });    
  }
});