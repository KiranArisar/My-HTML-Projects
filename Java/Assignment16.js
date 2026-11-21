let students = [
    {name: "Ayesha", marks: 85 },
    {name: "Sara", marks: 84 },
    {name: "Sameer", marks: 86 }, 
    {name: "Osaf", marks: 94 },
    {name: "Ali", marks: 65 },
    {name: "Ahad", marks: 55 },
    {name: "Bushra", marks: 77 },
    {name: "Fiza", marks: 78 }
]
console.log("Students: ",students);

students.push({name:"Ahmed",marks:34});
console.log("After adding 1 more student: ",students);


students.pop();
console.log("After pop: ",students);

students.unshift({name:"Isra",marks:48});
console.log("Unshift result: ",students);

students.shift();
console.log("Shift Result: ",students);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].marks);
}

for (let student of students) {
    console.log(student.name, student.marks);
}

students.forEach(function(student) {
    console.log(student.name, student.marks);
});

let passedstudents = students.filter(function(student){
    return student.marks > 50;
})
console.log("Students above 50:", passedstudents);

let findstudent = students.find(function(student){
    return student.name === "Sara";
})
console.log("Found Student:", findstudent);

let studentsname = students.map(function(student){
    return student.name;
})
console.log("Students name: ",studentsname);

let totalmarks = students.reduce(function(total,student)
{
    return total +student.marks;
},0)
let avgmarks = totalmarks / students.length;
console.log("Total marks: ", totalmarks);
console.log("Average Marks: ",avgmarks);

let sortstudents = students.sort(function(a,b)
{
      return a.marks - b.marks;
})
console.log("Ascending Order: ",sortstudents);

let descstudents = students.sort(function(a,b){
    return b.marks - a.marks;
})
console.log("Descending Order: ",descstudents);

let revstd = [...students].reverse();
console.log("Reverse order: ",revstd);

let abv90 = students.some(function(student)
{
    return student.marks >= 90;
})
console.log("Above 90: ", abv90);

let abv30 = students.every(function(student)
{
    return student.marks > 30;
})
console.log("Above 30: ", abv30);

let newStudents = [
    { name: "Danish", marks: 68 },
    { name: "Mariam", marks: 82 }
];

let allStudents = students.concat(newStudents);
console.log("Merged Students:", allStudents);

let highestStudent = students.reduce(function(highest, student) {
    return student.marks > highest.marks ? student : highest;
});

let lowestStudent = students.reduce(function(lowest, student) {
    return student.marks < lowest.marks ? student : lowest;
});

console.log("Highest Marks:", highestStudent);
console.log("Lowest Marks:", lowestStudent);