var mongodb = require("mongodb");

var mongoClient=mongodb.MongoClient;

var url = "mongodb://localhost:27017/KiranDB";

mongoClient.connect(url,function(err,db){
	if ( err )
		console.log("Error : "+err);
	else
	{
		console.log("Connection established successfully");
		db.close();
	}
});