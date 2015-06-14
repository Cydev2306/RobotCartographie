/* Fichier client qui permet au client de faire des requetes ( que des SELECT)
*
*/
var pg = require('pg');
var client = new pg.Client("postgres://WebApp:WebApp@localhost:5433/Nuage");
var req='SELECT * FROM public."Nuage"';
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(req, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    i=0;
    while(result.rows[i]){
    console.log(result.rows[i]);
  i++;
}
    client.end();
  });
});