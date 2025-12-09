//Template Literals

var age=18;
var str = `jamuna age is ${age}`
console.log(str)
var name='jamuna'
console.log(`${name} age is ${age}`)

//Map
var arr=[1,2,3,4,5]
var double=arr.map(num=>num*2);
console.log(double)

//Filter
var even=arr.filter(num=>num%2==0);
console.log(even)

//Reducer
var total=arr.reduce((sum,num)=>(sum+num),0)
console.log(total);

var total1=arr.reduce((sum,num)=>(sum+1),0)
console.log(total1);

//combine use
var arr1=[1,2,3,4,5];
var three =arr1.map(num=>num*3).filter(num=>num%2==0).reduce((sum,num)=>(sum+1),0);
console.log(three)


//object
var student=[
    {
    name:"jamuna",
    mark:90
    },
    {
        name:"nivi",
        mark:80
    },
    {
        name:"maha",
        mark:99
    },
    {
        name:"siva",
        mark:88
    }
]

//filter
var studentMark=student.filter(s=>s.mark>80)
console.log(studentMark)

//map 
var names=student.map(s=>s.name)
console.log(names)

//reduces
var totalmark=student.reduce((sum,s)=>(sum+s.mark),0)
console.log(totalmark)

var avg=totalmark/student.length;
console.log(avg)


//promise
const promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        resolve('success')
    }
    else{
        reject('Failed')
    }
})
promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err))


// 2- promise use settimeout
const promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },2000)
})

promise1.then((msg)=>console.log(msg)).catch((err)=>console.log(err))

const getData=()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
}
getData().then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))


//async
const getData1=async(req,res)=>{
    var res= await fetch('https://jsonplaceholder.typicode.com/posts')
    var data= await res.json();
    console.log(data)
}

getData1()

//try-catch
const getData2=async(req,res)=>{
    try{var res= await fetch('https://jsonplaceholder.typicode.com/posts')
    var data= await res.json();
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

getData2()