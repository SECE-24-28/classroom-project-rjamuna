//if ,if-else ,else if
a=67 
if(a%2==0 && a%3==0 && a%7==0){
    console.log("a is divible 2,3,7")
}
else if(a%2==0){
  console.log("a is divible 2")
}
else if(a%3==0){
    console.log("a is divible 3")
}
else if(a%7==0){
    console.log("a is divible 7")
}
else{
    console.log("a is not divible 2,3,7") 
}

//switch case 
day=9;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//terinary operator
a=6;
var res=a%2==0?"even":"odd" //two condition sam as if else style
console.log(res)


var res1=a%2==0?"even": a%3==0?"divisible by 3":"odd"// multi condition same as  else if style
console.log(res1)

