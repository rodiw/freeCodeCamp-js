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


// Confirm the Ending
function confirmEnding(str, target) {
	if (str.substr(str.length - target.length) === target) {
		return true;
	} else {
		return false;
	}
}
confirmEnding("Open sesame", "same");

// Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
	let result = "";
	for (let i = 0; i < num; i++) {
		result += str;
	}
	return result;
}
repeatStringNumTimes("abc", 3);


// Truncate a string
function truncateString(str, num) {
	if (num <= 3)
		return str.slice(0, num) + "...";
	else if (num >= str.length)
		return str;
	else
		return str.slice(0, num - 3) + "...";
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Chunky Monkey
function chunkArrayInGroups(arr, size) {
	let newArr = [];
	while (arr.length > 0)
		newArr.push(arr.splice(0, size));

	return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Slasher Flick
function slasher(arr, howMany) {
	return arr.splice(howMany);
}
slasher([1, 2, 3], 2);

// Mutations
function mutation(arr) {
	let compare = arr[1].toLowerCase();
	for (let i = 0; i < compare.length; i++) {
		if (arr[0].toLowerCase().indexOf(compare[i]) === -1)
			return false;
	}
	return true;
}
mutation(["hello", "hEy"]);

// Falsy Bouncer
function bouncer(arr) {
	return arr.filter(val => Boolean(val));
}
bouncer([false, null, 0, NaN, undefined, "", null]);


// Seek and Destroy
function destroyer(arr) {
	let args = [...arguments].splice(1);
	return arr.filter(val1 => {
		return args.every(val2 => val1 !== val2)
	});
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Where do I belong
function getIndexToIns(arr, value) {
	let sortedArr = arr.sort((a, b) => a - b)
	for (let i = 0; i < sortedArr.length; i++) {
		if (value <= sortedArr[i])
			return i
		else if (i == sortedArr.length - 1)
			return sortedArr.length
	}
}

getIndexToIns([40, 60, 53], 50);


// Caesars Cipher
function rot13(str) {
	let rot13Rule = 13
	let result = ""
	let symbolRegex = /[^a-zA-Z]/g

	for (let i = 0; i < str.length; i++) {
		if (symbolRegex.test(str[i])) {
			result += str[i]
		} else {
			if (65 > (str[i].charCodeAt() - rot13Rule)) {
				result += String.fromCharCode(91 - (65 - (str[i].charCodeAt() - rot13Rule)))
			} else {
				result += String.fromCharCode(str[i].charCodeAt() - rot13Rule)
			}
		}
	}
	return result;
}

rot13("LBH QVQ VG!");

// Sum All Numbers in a Range
function sumAll(arr) {
	let maxNum = arr.reduce((a, b) => Math.max(a, b))
	let minNum = arr.reduce((a, b) => Math.min(a, b))

	return createNumberArray(minNum, maxNum).reduce((a, b) => a + b)
}

function createNumberArray(begning, endning) {
	let numArr = []
	for (let i = begning; i <= endning; i++) {
		numArr.push(i);
	}
	return numArr
}

sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
	let newArr = []
	let firstMatch = arr1.filter(item => arr2.indexOf(item) == -1)
	let secondMatch = arr2.filter(item => arr1.indexOf(item) == -1)

	return newArr.concat(firstMatch, secondMatch)
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//DNA Pairing
function pairElement(str) {
  return Array.from(str).map(e => {
    switch (e) {
      case 'A':
        return ['A', 'T']
      case 'T':
        return ['T', 'A']
      case 'G':
        return ['G', 'C']
      case 'C':
        return ['C', 'G']
      default:
        return ["undefined DNA Type"]
    }
  })
}
result = pairElement("GCGP")

