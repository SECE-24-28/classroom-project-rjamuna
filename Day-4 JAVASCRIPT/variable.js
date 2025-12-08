var a;
a=10;
var a;//can redeclare 
a=80;//can reassign


let b;
b=10;
//let b; cannot redeclare
b=80;

const c=10;
//const c; cannot redeclare
//c=80; cannot reassign


var p=10;//number
var q="Hii";//string
var s=true;//boolean
var r;//undefined
var t=null;//null
var big=1234455566447680897978767565449999999999999999999999n;
var symbol=Symbol("li");

console.log(typeof(p)) //typeof keyword - check variable type
console.log(typeof q)
console.log(typeof s)
console.log(typeof r)
console.log(typeof t)
console.log(typeof big)
console.log(typeof symbol)



var arr=[1,2,3,4,5];//array
console.log(arr);

var obj={
    name:"jamuna",
    age:18,
    
}

console.log(typeof obj);
console.log(typeof arr);

//hoisting
//var h;// is not declare but next line run undefined so automatically declare h
console.log(h);
var h=10;

// console.log(g);
// let g=10;   //get error not hosting const and let only var


//hosting use function var/
add()
function add(){
    console.log(10+20)
}
