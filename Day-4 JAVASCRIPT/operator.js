//Arithematic operator -- +,-,/,*,%

var a=10;
var b=20;
console.log("Add:",a+b)
console.log("Sub:", a-b)
console.log("Mul:", a*b)
console.log("Div:", a/b)
console.log("Mod:", a%b)

//Relational operator -- <,>,<=,>=,==,!=

var a=10;
var b=20;
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)

var a=10;
var b="10";//same output 
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)//check value  only and not check data type are equal
console.log(a!=b)//check value  only and not check data type are not equal
console.log(a===b)//check value and datatype are equal 
console.log(a!==b)//check value and datatype are not equal 

//Assignment operator -- =,+=,-=,*=,/=,%=
a=10;
console.log(a)
a+=10;
console.log(a)
a-=10;
console.log(a)
a*=2;
console.log(a)
a/=2;
console.log(a)
a%=2;
console.log(a)

//logical operator -- &&,||,!

a=true;
b=false;
console.log(a&&b)
console.log(a||b)
console.log(!a)
console.log(!b)


//spread operator - ...
const u=[10,20,30];
const i=[...a,40,50,60];
console.log(q);
console.log(i);

//destructing operator 
//Array

const [name,age,mark]=["jamuna",18,88]
console.log(name)
console.log(age)
console.log(mark)

//object
const obj={name1:"jamu", age1:18, mark1:99}
console.log(name1)
console.log(age1)
console.log(mark1)