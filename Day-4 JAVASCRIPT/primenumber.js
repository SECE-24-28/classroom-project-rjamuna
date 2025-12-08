//1-prime number  use boolean but this program use number
var a=2;
var c=1;

for( i=2;i<=a/2;i++){ 
    if(a%i==0){
        c=0;
        break;
    }
}
if(c){
    console.log("prime number")
}else{
    console.log("not prime number")
}

// 2-prime number  
var a=2;
var c=0;

for( i=2;i<=a/2;i++){ 
    if(a%i==0){
        c++;
        break;
    }
}
if(c==0){
    console.log("prime number")
}else{
    console.log("not prime number")
}

//3-prime number 
var a=2;
var c=0;

for( i=1;i<=a;i++){ 
    if(a%i==0){
        c++;
       //not use break
    }
}
if(c==2){
    console.log("prime number")
}else{
    console.log("not prime number")
}