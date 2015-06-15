// Ajout des modules nécessaires pour la connection en socket
var clientio  = require('socket.io-client');
var client    = clientio.connect('http://194.57.110.4:80',{'reconnect':false});
//var client    = clientio.connect('http://localhost:3013',{'reconnect':false});
// 
var myArgs = process.argv.slice(2);
client.emit('client', 'galileo');
/*  Affichage de l'id du client une fois connecté au serveur
 *
 */
client.on('identifiant',function(data){
        console.log('Vous avez cet identifiant : '+ data);
});
/*  Fonction qui permet :
 *      - la conversion de coordonnées polaires en coordonnées cartésiennes
 *      - Envoi des données grâce à la WS 
*/
function Envoi(){
    x = myArgs[0];// 1
    y = myArgs[1];//  2
        // x =Math.floor(Math.random()*11) ,y=Math.floor(Math.random()*11)
        //for(var i=1;i<=10;i++){
            //xi=Math.floor(Math.random()*11), yi =Math.floor(Math.random()*11);
            //  "numeroPoint":i
    angle = myArgs[2]; // 3
    distance = myArgs[3]; // 4
    // changer angle / distance par des coordonnées
    distanceX=distance*Math.cos(angle);
    distanceY=distance*Math.sin(angle);
    xi = parseFloat(x) + distanceX;
    yi = parseFloat(y) + distanceY;
    var emit = {
        "PosX": x,
        "PosY": y,
        "Xi": xi.toFixed(2),
        "Yi": yi.toFixed(2)
    }
    client.emit('myevent', emit);
    console.log('galileo data send');
}
Envoi();

// Deconnection de la WebSocket pour pouvoir stopper le script une fois qu'il a fini l'envoir de données
client.on('disconnect',function(data){});
//setTimeout(process.exit(0),100000);