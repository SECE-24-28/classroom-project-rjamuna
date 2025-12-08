//class and object
class person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    display(){
        console.log("name:",this.name,"age:",this.age);
    }
}
var p1=new person("jamuna",18);
p1.display();