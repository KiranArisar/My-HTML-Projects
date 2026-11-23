let numbers = [10,20,30,20,40,50];
//for loop
for(let i=0;i < numbers.length;i++){
    console.log(numbers[i]);
}
//for ....of
for(let num of numbers){
    console.log(num);
}
//for ...in
for(let index in numbers){
    console.log(index);
}
//while loop
let i = 0;
while(i<numbers.length){
    console.log(numbers[i]);
    i++;
}
//do while
let j = 0;
do{
    console.log(numbers[j]);
    j++;
}
while(j< numbers.length);

//find Index
console.log(numbers.findIndex(num => num > 30));

//Index of
console.log(numbers.indexOf(20));

//last Index of
console.log(numbers.lastIndexOf(20));

//Join
console.log(numbers.join("-"));

//flat
let nested = [1, 2, [3, 4], [5, 6]];
console.log(nested.flat());

//flat map
let values = [1,2,3];
console.log(values.flatMap(num => [num , num*2]));

//fill
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.fill("Orange"));

//at
console.log(numbers.at(2));
console.log(numbers.at(-1));