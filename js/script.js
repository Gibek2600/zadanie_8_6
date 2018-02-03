// scripts.js

var a = prompt ("wartość a");
var b = prompt ("wartość b");
var value = (a*a)-(2*a*b)-(b*b);
console.log('wartość działania (a*a)-(2*a*b)(b*b) dla argumentów a:' + a + ' oraz b: ' + b + ' wynosi: ' + value);

if (value == 0){
	console.log("wynik jest równy 0");
}
