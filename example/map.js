var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);

console.log(myObject["a"]);
console.log(myObject["c"]);


var objPool = new Object();

objPool[1] = '11';
objPool[2] = '22';
objPool[3] = '33';

console.log(objPool[1]);
console.log(objPool[2]);



$ = function(var1,var2) {
  console.log(arguments.length);
  console.log(var1,var2);
}


$("1","2","3")
$("1","2","3","4")
