var fruits=["Apple","Banana","cherry","Grapes","Mango","papaya"];

var _ = require("underscore");

var items = _.rest(fruits,2);
items = _.take(items,3);
console.log ( items)