var clientio  = require('socket.io-client');
var client    = clientio.connect('http://194.57.110.4:80',{'reconnect':false});
// localhost:3013
var myArgs = process.argv.slice(2);
client.emit('client', 'galileo');
client.on('identifiant',function(data){
        console.log('Vous avez cet identifiant : '+ data);
});

function Envoi(){
    x = myArgs[0];
    y = myArgs[1];
        // x =Math.floor(Math.random()*11) ,y=Math.floor(Math.random()*11)
        //for(var i=1;i<=10;i++){
            //xi=Math.floor(Math.random()*11), yi =Math.floor(Math.random()*11);
            //  "numeroPoint":i
    angle = myArgs[2];
    console.log(angle);
    distance = myArgs[3];
    // changer angle / distance par des coordonnées
    xi=distance*Math.cos(angle);
    yi=distance*Math.sin(angle);
    var emit = {
        "PosRobotX": x,
        "PosRobotY": y,
        "Xi": xi.toFixed(2),
        "Yi": yi.toFixed(2)
    }
    client.emit('myevent', emit);
    console.log('galileo data send');
}
Envoi();
client.on('disconnect',function(data){});
//setTimeout(process.exit(0),100000);

/*    setInterval(function(){
            Envoi();
    } , 10000);
*/