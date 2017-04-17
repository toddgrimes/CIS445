/*
  API for simple fantasy RPG.

  Written by: Todd Grimes, Noel Girett, & Mark Newbury
*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var game = express.Router();
app.use(bodyParser.json());
var mongoClient = require('mongodb').MongoClient;

// Required to match incomming id with BSON _id in MongoDB.
var objid = require('mongodb').ObjectID;

mongoClient.connect("mongodb://localhost:27017/game", function(err, db) {

/*
  Will error of no connection to DB can be made.
*/
  if (!err) {

/*
  Character routes.
*/
    game.route('/player/:id')

/*
  Gets Player info by id.
    Test will following string:
    https://node-jgrimes2.c9users.io/player/58d3d6c10eefd2e0da746704
    Just remember to replace jgrimes2 with your username.

    ** I believe this is done and and works as intended.
*/
    .get(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.findOne({'_id': player}, function(err, results) {
        if(!err) {
          // I just want to know whan is going on.
          console.log("Looking up character id: " + req.params.id);
          res.send(results);
        } else {
          console.log(err);
        } // End !err
      }) // end find
    }) // End get


/*
  Updates a character
    Expects a JSON object from the client with only updated fields.
*/
    .put(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.insert({'_id': player}, function(err, results) {
        if(!err) {
          console.log("Updated character id: " + req.params.id);
        }
        else {
          console.log(err);
        }
      });
    })
    
    /* Something I came across over the internet
    .put(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      player[collection] = {'$exists' : true};
      var new_player = {
        
      };
      new_player[collection] = objid(req.params.id);
      collection.insert({'_id': player}, function(err, results) {
        if(!err) {
          console.log("Updated character id: " + req.params.id);
        }
        else {
          console.log(err);
        }
      })
    })
    */
  
/*
  Delete a character
    Expects just the route with :id populated only.
*/
    .delete(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.remove({'_id': player} , function(err, results) {
        // I just want a record of what is going on.
        if(!err) console.log("Removed character id: " + req.params.id);
        else console.log(err);
      })
    })
    
    game.route( '/player/' )
/*
  Create a new character
    Client should send full character sheet with all completed fields.
*/
    .post(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.insert(req.body , function(err, results) {
        // I just want a record of what is going on.
        if(!err) console.log("New Character Added.");
        else console.log(err);
      })
    })





/*
   Item Routes.
*/
  game.route( '/player/item/:id' )

/*
  Gets a single item's information.
*/
    .get(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.findOne({'_id': item}, function(err, results) {
        if(!err) {
          // I just want to know whan is going on.
          console.log("Looking up item id: " + req.params.id);
          res.send(results);
        } else {
          console.log(err);
        } // End !err
      })
    })


/*
  Create a new item.
    Crafting?  Or from a game design mode?
*/
    .post(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.insert({'_id': item} , function(err, results) {
        // I just want a record of what is going on.
        if(!err) console.log("Added item id: " + req.params.id);
        else console.log(err);
      })
    })


/*
  Updates a single item.
    What would we be changing?  Durability?
*/
    .put(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.findOne({'_id': item}, function(err, results) {
        if(!err) {
          console.log("Updated item id: " + req.params.id);
        } else {
          console.log(err);
        }
      })
    })
    
    .put(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      item[collection] = {'$exists' : true};
      var new_item = {
        
      };
      new_item[collection] = objid(req.params.id);
      collection.insert({'_id': item}, function(err, results) {
        if(!err) {
          console.log("Updated item id: " + req.params.id);
        }
        else {
          console.log(err);
        }
      })
    })
    
    /* Something I came across over the internet
    .put(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      item[collection] = {'$exists' : true};
      var new_item = {
        
      };
      new_item[collection] = objid(req.params.id);
      collection.insert({'_id': item}, function(err, results) {
        if(!err) {
          console.log("Updated item id: " + req.params.id);
        }
        else {
          console.log(err);
        }
      })
    })
    */

/*
  Deletes a single item.
    This would delete a single item from the player's character.
*/
    .delete(function(req, res) {

    })


/*
  Location Routes.
*/
  game.route( '/player/location/:id' )

/*
  Get the player's current location.
*/
    .get(function(req, res) {
      var location = objid(req.params.id);
      var collection = db.collection('location');
      collection.findOne({'_id': location}, function(err, results) {
        if(!err) {
          // I just want to know whan is going on.
          console.log("Looking up location id: " + req.params.id);
          res.send(results);
        } else {
          console.log(err);
        } // End !err
      }) 
    })


/*
  Create a new location.
    Would this happen?  Perhaps in a map design mode?
*/
    .post(function(req, res) {
      var location = objid(req.params.id);
      var collection = db.collection('location');
      collection.insert({'_id': location} , function(err, results) {
        // I just want a record of what is going on.
        if(!err) console.log("Added location id: " + req.params.id);
        else console.log(err);

    })
 })


/*
  Update a player location.
*/
    .put(function(req, res) {
      // Remove the player location from thier "current" location
      // Then add the new location or
      // Just update the information to reflect the new location?
      var location = objid(req.params.id);
      var collection = db.collection('location');
      collection.findOne({'_id': location}, function(err, results) {
        if(!err) {
          console.log("Updated location id: " + req.params.id);
        } 
        else {
          console.log(err);
        }
      }) 
    })
    
    /* Something I came across over the internet
    .put(function(req, res) {
      var location = objid(req.params.id);
      var collection = db.collection('location');
      location[collection] = {'$exists' : true};
      var new_location = {
        
      };
      new_location[collection] = objid(req.params.id);
      collection.insert({'_id': location}, function(err, results) {
        if(!err) {
          console.log("Updated location id: " + req.params.id);
        }
        else {
          console.log(err);
        }
      })
    })
    */
    

/*
  Delete a location.
    Would this really happen outside a map design mode?
*/
    .delete(function(req, res) {

    })

  } // End !err

}); // End Connect to mongo

// Process API First
app.use('/', game);

app.listen('8080', function(err) {
    if (err) {
        console.log(err);
    } else { console.log("Good to go on 8080"); }
});
