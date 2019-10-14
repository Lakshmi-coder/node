var fs = require("fs");

fs.mkdir("pictures",function(err){
    if ( !err)
      console.log("Folder created sucessfully...");
      else
          console.log("Error: "+err);
});