// Reverse a string
function reverseString(str) {
	return str
		.split("")
		.reverse()
		.join("");
}
reverseString("hello");

// Factorialize a Number
function factorialize(num) {
	if (num === 0)
		return 1;
	
	let newArr = [];
	for (let i = 0; i < num; i++) {
		newArr.push(i + 1);
	}
	return newArr.reduce((prev, curr) => prev * curr);
}
factorialize(5);


// Check for Palindromes
function palindrome(str) {
	let newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	let reversedNewStr = newStr
		.split("")
		.reverse()
		.join("");
	if (newStr === reversedNewStr) {
		return true;
	} else {
		return false;
	}
}
palindrome("eye");

// Find the Longest Word in a String
function findLongestWord(str) {
	return str
		.split(" ")
		.map(val => val.length)
		.reduce((prev, curr) => Math.max(prev, curr));
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence
function titleCase(str) {
	return str
		.split(" ")
		.map(val => val.substr(0, 1).toUpperCase() + val.substr(1, val.length).toLowerCase())
		.join(" ");
}
titleCase("I'm a little tea pot");


// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]
                .reduce((prev, curr) => Math.max(prev,curr))
               );
  }  
  return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);