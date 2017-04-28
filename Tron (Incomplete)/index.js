var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var player1 = false;
var player2 = false;
var player3 = false;
var player4 = false;

const lineSpeed = 10;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

/*
 -----2------
 |			|
 1			3
 |			|
 -----4------
*/

function createPlayer(slot, color) {
	var name = "";
	var alive = true;
}

io.on('connection', function(socket){
	io.sockets.emit('connected', "Someone connected.");
	//socket.on('connection', function(){  });
	socket.on('user_input_state', function(data){
		console.log(data);
	});
});