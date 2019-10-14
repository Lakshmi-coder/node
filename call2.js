var display = function(cb){
	cb();
}

display(function(){
    console.log("Hello from callback1");
});

display(function(){
    console.log("Hello from callback2");
});