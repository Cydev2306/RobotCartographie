/* Fichier client qui permet de reset la DB.
*
*/

var pg = require('pg');
var client = new pg.Client("postgres://AdminRobot:AdminRobot@localhost:5432/slam");
var req='DELETE FROM public."Nuage"';
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(req, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rowCount);
    client.end();
  });
});