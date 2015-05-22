var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
server.listen(3013,'10.251.98.169');
var clients = [];
var client_id=0;
var i= 0;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/Slam_robot.png', function (req, res) {
  res.sendFile(__dirname + '/Slam_robot.png');
});
io.sockets.on('connection', function (socket) {
	socket.client_id = client_id;
	clients[client_id] = socket;
	console.log('Un client vient de se connecter :'+socket.id);
	client_id++;
		socket.on('client',function(data){
			if(data == 'galileo'){
				clients[client_id] = socket;
				console.log('la galileo est connectee');
        this.emit("identifiant",socket.id);
				client_id++;
			}
		});

	/*
	* Envoie un message toute les 4 secondes a tous les clients connectes 
	*/

  socket.on('myevent', function (data) {
   	console.log('server data', data);
    socket.broadcast.emit('message', data);  
	});
	socket.on('disconnect', function(){
    	console.log('client '+socket.id+' est deconnecte');
    	delete clients[this.client_id];
  });

});

/*
*	Fonction pour créer un unique ID de chaque client WS. --Useless
*/
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};