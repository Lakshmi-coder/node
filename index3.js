var express = require("express")();
var em = require("./empModule");
var bodyParser = require("body-parser");
express.set('view engine','ejs');
express.use(bodyParser());

express.get('/',function(req,resp){
        var employees= em.employees;
        var htmlSource = `
            <h2>List of Employees</h2>
            <ol>
            ${employees.map ( e => "<li>"+JSON.stringify(e)+"</li>")}
            </ol>
            <a href="/addemployee">Add</a>
        `;
        resp.send(htmlSource);
});

express.get('/addemployee',function(req,resp){
    var htmlSource=`
        <h1>Fill Details to add employee </h2>
        <form method="post" action="/">
        Enter ID: <input type="number" name="id" /> <br/>
        Enter Ename: <input type="text" name="name" /> <br/>
        Enter Job: <input type="text" name="job" /> <br/>
        <input type="submit" />
        </form>
        
    `;
    resp.send(htmlSource);
});
express.post('/',function(req,resp){
    var id = req.param("id");
    var ename=req.param("name");
    var job = req.param("job");
    var e1 = {id:id, ename:ename, job: job};
    em.employees.push(e1);
    resp.send("Row added successfully...");
});
express.listen(9000,()=>console.log("Web API started listening..."));
