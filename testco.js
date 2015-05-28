var pg = require('pg');
var client = new pg.Client("postgres://Users:Users@localhost:5433/Nuage");
var req ='SELECT count(id) FROM public."Nuage"';
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query(req, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("");
    client.end();
  });
});