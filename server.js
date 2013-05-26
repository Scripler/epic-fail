var port = 8080;
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketIO = require('socket.io');

var epicFail = require( './src/epic-fail' );

app.use(express.static('./static'));

server.listen(port);

var io = socketIO.listen(server) ;

// Switch off debug messages.
io.set( 'log level', 3);

io.sockets.on( 'connection', function( socket ) {
	epicFail.add( io, socket );
});
console.log('EPIC server is running at http://localhost:%d', port);