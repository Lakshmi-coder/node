var wishes = function(){
	console.log("Hello from wishes!");
}

var display1 = function(cb){
	cb();
}

display1(wishes);