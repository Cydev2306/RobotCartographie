var Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;

var host = 'localhost';
var port =  '27017';

console.log("Connecting to " + host + ":" + port);
var db = new Db('node-mongo-examples', new Server(host, port, {}), {native_parser:true});
db.open(function(err, db) {
  db.dropDatabase(function(err, result) {
    db.collection('test', function(err, collection) {      
      // Erase all records from the collection, if any
      collection.remove({}, function(err, result) {
      	//collection.save({_id:"abc", user:"David"});
      	//collection.save({_id:"dbc", user:"Other"});
        // Insert 3 records

        for(var i = 0; i < 10; i++) {
        	var iteration = {
        		point:i,
        		PosRobotX: i*2,
            	PosRobotY: i*4,
            	xi: i*10,
            	yi: i*15
      		}
        //	collection.save(iteration);
        }
        
        collection.count(function(err, count) {
          console.log("There are " + count + " records in the test collection. Here they are:");

          collection.find(function(err, cursor) {
            cursor.each(function(err, item) {
              if(item != null) {
                console.dir(item);
                console.log("created \n")
              }
              // Null signifies end of iterator
              if(item == null) {                
                // Destory the collection
                collection.drop(function(err, collection) {
                  db.close();
                });
              }
            });
          });          
        });
      });      
    });
  });
});