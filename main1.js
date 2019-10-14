var express= require("express")();
var bodyparser = require("body-parser");
express.set('view engine','ejs');
express.use(bodyparser());

express.get('/',function(req,resp){
    var htmlSource= `<h1>post Demo</h1>
    <form method="Post">
        Enter id: <input type="number" name="id" /> <br/>
        Enter name: <input type="text" name="name"/> <br/>
        <input type="submit"/>

    </form>` ;
    // resp.render("index");
    resp.send(htmlSource);
});
    express.post('/',function(req,resp){
        var id = req.param("id");
        var name = req.param("name");
        resp.send(`ID: ${id}, Name: ${name}`);
    });


express.listen(9000  , () => console.log("Web API started listening"));