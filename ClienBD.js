/* Fichier client qui permet au client de faire des requetes ( que des SELECT)
*
*/

var pg = require('pg');
var client = new pg.Client("postgres://WebApp:WebApp@localhost:5432/slam");
var req='SELECT count(id) FROM public."Nuage"';
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(req, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].count);
    client.end();
  });
});