game.route( '/character/:id' )
.get(function(req, res) {
    //get character info
});

.post(function(req, res) {
    //create new character 
});

.put(function(req, res) {
    //update character info
});

.delete(function(req, res) {
    //remove character
}); 



game.route( '/player/item/:id' )
.get(function(req, res) {
    //get item info
});

.post(function(req, res) {
    //create new item
});

.put(function(req, res) {
    //update item info
});

.delete(function(req, res) {
    //delete or drop item
});


game.route( '/player/location/:id' )
.get(function(req, res) {
    //get location info
}); 

.post(function(req, res) {
    //create new location
}); 

.put(function(req, res) {
    //update location
}); 

.delete(function(req, res) {
    //delete location
}); 



