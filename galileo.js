var clientio  = require('socket.io-client');
var client    = clientio.connect('http://localhost:3013');
client.on('identifiant',function(data){
        console.log('Vous avez cet identifiant : '+ data);
});
client.emit('client', 'galileo');
function Envoi() {
         a =Math.floor(Math.random()*11) ,z=Math.floor(Math.random()*11), xi=Math.floor(Math.random()*11), yi =Math.floor(Math.random()*11);
        var emit = {
            "PosRobotX": z,
            "PosRobotY": a,
            "Xi": xi,
            "Yi": yi
        }
        client.emit('myevent', emit);
        console.log('galileo data send');
    }
    setInterval(function(){
            Envoi();
    } , 2000);

