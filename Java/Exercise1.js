//word length counter
/*Exercise 1 — Word Length Counter
const words = ["apple", "cat", "banana", "dog", "elephant", "fox"];
Create a new array with each word's length (map)
Keep only words with length > 3 (filter)
Sort by length ascending
Find total characters of those words (reduce)
Expected: [5, 6, 8], total = 1*/

const words = ["apple", "cat", "banana", "dog", "elephant", "fox"];


let lengths = words.map(word => word.length);
console.log("Word Lengths:", lengths);


let filteredWords = words.filter(word => word.length > 3);
console.log("Words greater than 3:", filteredWords);


let sortedWords = filteredWords.sort((a, b) => a.length - b.length);
console.log("Sorted Words:", sortedWords);


let sortedLengths = sortedWords.map(word => word.length);
console.log("Sorted Lengths:", sortedLengths);


let total = sortedLengths.reduce((sum, length) => sum + length, 0);
console.log("Total Characters:", total);