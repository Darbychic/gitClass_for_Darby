const obj = {
    name : "Ayodele Deborah Oluwaseun",
    gender: "non-binary",
    age: 30,    
    complexion: "dark",
};

let phone = {
    brand: "samsung",
    model: "Galaxy S22",
    price: 350000
};
console.log(phone);

phone.color = "black";
console.log(phone);
let student = {
    name: "Godwin",
    regNo: "C8/001",
    course: "Javascript",
    year: 2024,
    friends : ["john", "jane", "doe"]
}
//adding to the object
console.log(student);
student.gender = "Male";
console.log(student);
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);

//destructuring
let employee = {        
    name : "Tunde Balogun",
    role : "Frontend Developer",
    salary : 450000,
    city : "Lagos",
};
const {name:userName, role, salary, city} = employee;  //object structuring   

//spread and rest
//spread operator
let DNA = {
    gender : "XY",
    complexion : "Dark"
}

let offSpring = {
    ...DNA,
    name : "AYODELE DEBORAH OLUWASEUN",
    age : 30
}
console.log(offSpring);

console.log(Object.keys(offSpring));
console.log(Object.values(offSpring));
console.log(Object.entries(offSpring));


