var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
server.listen(80,'194.57.110.4');
//server.listen(3013,'localhost');
var clients = [];
var client_id=0;
var i= 0;
var pg = require('pg');


/*
* Fonction pour les requetes Insert Into
*/
function InsertDB(ConnString, req){
var client = new pg.Client(ConnString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(req, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("requete executee");
    client.end();
  });
});
}


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/animation.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/animation.css');
});

app.get('/canvas.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/canvas.js');
});

app.get('/interpolation.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/interpolation.js');
});

app.get('/Slam_robot.png', function (req, res) {
  res.sendFile(__dirname + '/public/Slam_robot.png');
});

app.get('/ClientBD.js', function (req, res) {
  res.sendFile(__dirname + '/ClientBD.js');
});

app.get('/resetBD.js', function (req, res) {
  res.sendFile(__dirname + '/resetBD.js');
});


io.sockets.on('connection', function (socket) {
	socket.client_id = client_id;
	clients[client_id] = socket;
  /*  
  *   Affichage de l'id du client une fois connecté (coté serveur)
  */
	console.log('Un client vient de se connecter :'+socket.id);
	client_id++;

		socket.on('client',function(data){
			if(data == 'galileo'){
				clients[client_id] = socket;
				console.log('la galileo est connectee');
        this.emit("identifiant",socket.id);
				client_id++;
			}else client_id++;
		});

	/*
	* Envoie un message a tous les clients connectes 
	*/

  socket.on('myevent', function (data) {
   	console.log('server data', data);
    /*
    * Ajout des points dans la base de donnees -> appel à la fonction 
    */
    var requete = 'Insert into public."Nuage"("PosX","PosY","Xi","Yi") Values('+data.PosRobotX+','+data.PosRobotY+','+data.Xi+','+data.Yi+');';
    InsertDB("postgres://Galileo:galileo@localhost:5432/slam", requete);
    // local slam = Nuage port 5433
    socket.broadcast.emit('message', data); 
    this.disconnect();
    //socket.disconnect('client'); 
	});

  /*
  * Script qui log la deconnection d'un client.
  */
	socket.on('disconnect', function(){
    	console.log('client '+socket.id+' est deconnecte');
    	delete clients[this.client_id];
  });

});
