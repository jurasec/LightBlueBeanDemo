var express = require('express.io')
var app     = express()
app.http().io()

app.use( express.static( __dirname  + '/public') )
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// Setup the ready route, and emit talk event.
app.io.route('ready', function(req) {
    /*req.io.emit('talk', {
        message: 'io event from an io route on the server'
    })*/
})

// Send the client html.
app.get('/', function(req, res) {
    res.sendfile('public/html/TimeSeriesChart.html')
})

app.listen(7076)