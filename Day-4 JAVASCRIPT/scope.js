var a=10;// var global scope

if(true){
   var b=20;// block inside also var is golobal scope
    console.log(a);
}
console.log(a,b);

//block scope
let c=30;
if(true){
   var h=20;//let inside block declare and initialize is not outside accesss but outside create let use inside and outside let access
    console.log(c);
}
console.log(c);//h is not accessable

const q=10; // same as let is block scope
if(true){
    const p=20
    console.log(q);
}
console.log(q);//console.log(q,h); is not work get error h is not acessable outside