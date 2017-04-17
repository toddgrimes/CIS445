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

/*******************************************************************************
  Character routes.
*******************************************************************************/
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
    Expects a JSON object from the client with all fields.
*/
    .put(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.update({'_id': player}, req.body, function(err, results) {
        if(!err) {
          console.log("Updated character id: " + req.params.id);
          res.send("Character Updated");
        }
        else {
          console.log(err);
        }
      });
    })


/*
  Delete a character
    Expects just the route with :id populated only.
    Deletes the selected character and sends "Character Deleted" to client.

    This is Complete
*/
    .delete(function(req, res) {
      var player = objid(req.params.id);
      var collection = db.collection('character');
      collection.remove({'_id': player} , function(err, results) {
        if(!err) {console.log("Removed character id: " + req.params.id);
        res.send("Character Deleted")}
        else console.log(err);
      })
    })

    game.route( '/player/' )
/*
  Create a new character
    Client should send full character sheet with all completed fields.
    Will respond to client with the _id

    This is completed!
*/
    .post(function(req, res) {
      var collection = db.collection('character');
      collection.insert(req.body , function(err, results) {
        if(!err) {console.log("New Character Added with id: " + results.insertedIds);
        res.send(results.insertedIds)}
        else console.log(err);
      })
    })



/*******************************************************************************
   Item Routes.
*******************************************************************************/
  game.route( '/item/:id' )

/*
  Gets a single item's information.

  This Works!
*/
    .get(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.findOne({'_id': item}, function(err, results) {
        if(!err) {
          console.log("Looking up item id: " + req.params.id);
          res.send(results);
        } else {
          console.log(err);
        } // End !err
      })
    })

/*
  Updates a single item.
    What would we be changing?  Durability?
*/
    .put(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.update({'_id': item}, req.body, function(err, results) {
        if(!err) {
          console.log("Updated character id: " + req.params.id);
          res.send("Item Updated");
        }
        else {
          console.log(err);
        }
      });
    })

/*
  Deletes a single item.
    This would delete a single item from the player's character.
*/
    .delete(function(req, res) {
      var item = objid(req.params.id);
      var collection = db.collection('items');
      collection.remove({'_id': item} , function(err, results) {
        if(!err) {console.log("Removed item id: " + req.params.id);
        res.send("Item Deleted")}
        else console.log(err);
      })
    })

  game.route( '/item/' )
/*
  Create a new item.
    Crafting?  Or from a game design mode?
*/
    .post(function(req, res) {
      var collection = db.collection('items');
      collection.insert(req.body , function(err, results) {
        if(!err) {console.log("New item Added with id: " + results.insertedIds);
        res.send(results.insertedIds)}
        else console.log(err);
      })
    })

/*******************************************************************************
  Location Routes.
*******************************************************************************/
  game.route( '/location/' )

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
  Update a player location. - Done with player update.
*/


  } // End !err

}); // End Connect to mongo

// Process API First
app.use('/', game);

app.listen('8080', function(err) {
    if (err) {
        console.log(err);
    } else { console.log("Good to go on 8080"); }
});
