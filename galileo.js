var clientio  = require('socket.io-client');
var client    = clientio.connect('http://194.57.110.4:80');
client.on('identifiant',function(data){
        console.log('Vous avez cet identifiant : '+ data);
});
client.emit('client', 'galileo');
function Envoi() {
         a =Math.floor(Math.random()*11) ,z=Math.floor(Math.random()*11)
        for(var i=1;i<=10;i++){
            xi=Math.floor(Math.random()*11), yi =Math.floor(Math.random()*11);
            var emit = {
                "numeroPoint":i,
                "PosRobotX": z,
                "PosRobotY": a,
                "Xi": xi,
                "Yi": yi
            }
            client.emit('myevent', emit);
            console.log('galileo data send');    
        }

    }
    setInterval(function(){
            Envoi();
    } , 30000);

