// parent class
class Person{
    constructor(name,age,mobile,address){
        this.name = name;
        this.age=age;
        this.mobile=mobile;
        this.address=address;
    }
}
// child classes (student is a person)
class Student extends Person{
    constructor(name,age,mobile,address,course,fee){
        //  to pass the first 4 arguments to the parent class (Person)
        super(name,age,mobile,address)
        this.course=course;
        this.fee=fee;
    } 
}

let student1 = new Student('vamshi',21,9999,'hyd','cse',15000);
console.log(student1);

// employee is a person
class Employee extends Person{
    constructor(name,age,mobile,address,designation,company){
        super(name,age,mobile,address)
        this.designation=designation;
        this.company=company;
    }
}

// cosntructor and super keyword are important to make the execution    
// every object contains property called prototype  