//index.js	ex4
var square = function(n){
    return n*n;
}

var cube = function(n){
    return n*n*n;
}

var calculate = function ( n,  cb){
        return cb(n);
}
console.log  (calculate(4,square));

console.log  (calculate(4,cube));
