let students = ["kiran","Ali","Sara","Ahmed"];

students[1] = "Eman";
students.push("Aiza")
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
students.unshift("Alia");
students.pop();
console.log(students);
console.log(students.length);


let boys = ["Ali", "Ahmed", "Usman"];
let girls = ["Sara", "Kiran", "Ayesha"];
let all = boys.concat(girls);

console.log(all);

let fruits = ["Apple", "Mango", "Banana"];
fruits.splice(1, 0, "Grapes");
console.log(fruits);


let fruit = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
let selfruit = fruit.slice(1,3);

let a = ["a","b","c"];
a.reverse();
console.log(a);

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30));
console.log(numbers.includes(100));

let number = [1, 2, 3, 4];
let result = number.map(num => num * 2);
console.log(result);

let number1 = [1, 2, 3, 4];
const result2 = number1.forEach(num => {
    return  num *2
});
console.log(result2);

let b = [10, 20, 30, 40, 50];
let result3 = b.find(num => num > 25);

console.log(result3);

let c = [10, 20, 30, 40, 50];
let result4 = c.filter(num => num > 25);
console.log(result4);

let d = [2, 4, 7, 8];
let result5 = d.some(num => num % 2 !== 0);
console.log(result5);

let e = [2, 4, 6, 8, 9];
let result6 = e.every(num => num % 2 === 0);
console.log(result6);


















// Creating an object
/*let student={
    name: "Kiran",
    age: 24,
    department: "Data Science",
    university: "NED University",
    isGraduated: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.department);*/