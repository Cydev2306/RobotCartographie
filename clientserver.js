var clientio  = require('socket.io-client');
var client    = clientio.connect('http://localhost:3013');
client.on('identifiant',function(data){
	console.log('Vous avez cet identifiant : '+ data);
});
client.emit('client', 'galileo');
	setInterval(function() {
        var emit = {
            "PosRobotX": "0",
            "PosRobotY": "0",
            "xi": "200",
            "yi": "15"
        }
    client.emit('myevent', emit);
    console.log('galileo data send');
    }, 10000);


