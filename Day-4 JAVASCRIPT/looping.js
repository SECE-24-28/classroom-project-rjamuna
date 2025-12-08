arr={
    name:"jamuna",
    age:18,
    city:"madurai"
}


//  start and end value you known use - for loop

for( i=0;i<Object.keys(arr).length;i++){
console.log(i,Object.keys(arr)[i]);
//console.log(i,arr[i]);
}


for(i of Object.entries(arr)){
    console.log(i);
}

arr2=[12,45,60,78]
for(i of arr2){ //for of loop
    console.log(i);
}

for(i in arr2){ //for each and use "in" loop
    console.log(i, arr2[i]);
}

//day 4 - loop statement

// syntax - for loop
// for(initialvalue;condition;increment/decrement){
//     //statement
// }

for(let i=1;i<=10;i++){ //for loop
    console.log(i);
}

// while loop syntax
// while(condition){
//     //statement

// }

var a=0;
while(a!=5){
    a++;
    console.log(a);
    
}
 console.log(a);

 //do while loop
 a=0
 do{
    console.log(a);
     
 } while(a!=0);

 //for each - arror function use 
arr=[1,4,6,7]

arr.forEach((val,i)=>{
    console.log(val,i);
})