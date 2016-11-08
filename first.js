console.log("You have the following options\n 1.) Add a Post\n 2.) Search a post\n 3.) Delete a post\n");

var stdin = process.openStdin();

//Connect to MongoDB
var url = 'mongodb://localhost:27017/blog';

var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    var blog = db.collection("blog");
    
  }


stdin.addListener("data", function (d)
	{
		var enteredOption = d.toString().trim();
		if (enteredOption == "1")
		{
			// We will ask for title and post contents
		}
		else if (enteredOption == "2")
		{
			// We will ask for title contents
		}
		else if (enteredOption == "3")
		{
			// We will ask for number of post to delete
		}
		else
		{
			console.log("Please enter a valid option");
		}
	});


});

