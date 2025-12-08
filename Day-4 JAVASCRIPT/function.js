//without paramenter
function add(){
    console.log(10+20)
}
add();

//with parameter
function add(a,b){
    console.log(a+b)
}
add(10,30);

console.log(typeof add)
//Arrow function
var addd=(a,b)=>{
    console.log(a+b);
}

addd(10,40)

console.log(typeof (addd));

//callback function
var demo=()=>{
    console.log("hello world!")
}

var main=(callback)=>{// callback is not keyword function - any name eg: cb ,call
    console.log("main called")
    callback();

}
main(demo)

var main1=(callback)=>{// callback is not keyword function - any name eg: cb ,call
    console.log("main called")
    callback();

}
main1(()=>{
    console.log("hello world!")
});

//with parameter use callback
var add=(a, b,callback)=>{
    var result=a+b;
    callback(result)
}   
add(10, 20, (res)=>{
    console.log(res)
})


console.log("Start")
var Demo=()=>{
    setTimeout(()=>{
        console.log("processing...")
    }, 2000)
}
Demo()