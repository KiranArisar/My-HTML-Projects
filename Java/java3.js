const num = [1,2,3,4,5];
const sum = num.reduce((acc,curr)=>{
    return acc+curr;
},1
);
console.log(sum);

let numbers = [10, 25, 5, 40, 15];

let maxNumber = numbers.reduce((max, current) => {
    return max > current ? max : current;
},50);

console.log("Maximum Number:", maxNumber);

//objects 
let person ={
    firstname: "Ayesha",
    lastname: "Khan",
    Class: 5,
    City: "Karachi",
    Marks: 67.5
}

console.log("First Name: ",person.firstname);
console.log("Last Name: ",person.lastname);
console.log("Class: ",person.Class);
console.log("City: ",person.City);
console.log("Marks: ",person.Marks);

person.email = "ayesha@gmail.com";
person.Class = 6;
delete person.City;
console.log(person);
console.log(person["firstname"]);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let student = {
    name: "Kiran",
    age: 24
};
let marks = {
    math: 90,
    science: 85
};
console.log(Object.assign(student, marks));

