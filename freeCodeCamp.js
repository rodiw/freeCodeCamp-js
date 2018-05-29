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

// Roman Numeral Converter
function convertToRoman(num) {
	let roman = ""
	let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
	let numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	for (let i = 0; i < numeral.length; i++) {
		while (num >= numeral[i]) {
			roman += romanNumeral[i]
			num -= numeral[i]
		}
	}
	return roman
}

convertToRoman(36);

// Wherefore art thou
function whatIsInAName(collection, source) {
	let keys = Object.keys(source)

	return collection.filter((obj) => {
		for (let key of keys) {
			if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
				return false
			}
		}
		return true
	})
}

whatIsInAName([{
	"a": 1,
	"b": 2
}, {
	"a": 1
}, {
	"a": 1,
	"b": 2,
	"c": 2
}], {
	"a": 1,
	"b": 2
})

// Search and replace
function myReplace(str, before, after) {
	let stringArray = str.split(" ")

	return stringArray
		.map((currentItem) => {
			if (currentItem.toLowerCase() == before.toLowerCase()) {
				return seeIfCapitalLetter(currentItem) ? after[0].toUpperCase() + after.slice(1) : after
			} else {
				return currentItem
			}
		})
		.join(" ")
}

function seeIfCapitalLetter(str) {
	return str[0] == str[0].toUpperCase() ? true : false
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

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
pairElement("GCGP")

//Missing letters
function fearNotLetter(letters) {
  let lettersToArr = Array.from(letters.toLowerCase())
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")

  let shortenAlphabet = alphabet.map((letter, i) => 
    (letter.charCodeAt(0) >= lettersToArr[0].charCodeAt(0)) && 
    (letter.charCodeAt(0) <= lettersToArr[lettersToArr.length - 1].charCodeAt(0)) ? letter : false)
    .filter(remainingLetters => remainingLetters != false)

  for (let i = 0; i < shortenAlphabet.length; i++) {
    if (shortenAlphabet[i].charCodeAt(0) !== lettersToArr[i].charCodeAt(0)) {
      return shortenAlphabet[i]
    }
  }  
}
fearNotLetter("abd");

//Boo Who
function booWho(bool) {
	return typeof bool === "boolean"
}
let booWhooResult = booWho()
booWhooResult

//Sorted Union
function uniteUnique(arr) {
  let resultArr = []
  
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach(num => resultArr.push(num))
  }
	
  return resultArr.filter((uniqueNum, index, self) => self.indexOf(uniqueNum) === index)
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

//Convert HTML Entities
function convertHTML(str) {
  return str
    .split("")
    .map(characters => {
      switch (characters) {
        case '&':
          return "&amp;"
        case '<':
          return "&lt;"
        case '>':
          return "&gt;"
        case '\"':
          return "&quot;"  
        case '\'':
          return "&apos;"
        default:
          return characters
      }
  })
  .join("")
}

let convertResult = convertHTML("Dolce & Gabbana")

function spinalCase(str) {
  let regExpNonLetters = /^[^A-Za-z]*$/
  let regExpCapsLetters = /^[A-Z]/

  return str
    .split("")
		.map(symbolChars => 
			symbolChars.match(regExpNonLetters) ? symbolChars.replace(regExpNonLetters, " ") : symbolChars)
    .map((upperCaseChars, index) => upperCaseChars.match(regExpCapsLetters) && index !== 0 ? "-" + upperCaseChars.toLowerCase() : upperCaseChars.toLowerCase())
    .map(spaceChars => spaceChars === " " ? "-" : spaceChars)
    .join("")
    .split("")
    .map((dashChars, index, self) => dashChars === "-" && self[index - 1] === "-" ? "" : dashChars)
    .join("")
}

let spinalCaseResult = spinalCase("Teletubbies say Eh-oh")
spinalCaseResult


//Sum All Odd Fibonacci Numbers
function createOddFibonacciArray(num) {
  let arr = [0, 1]
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i-2] + arr[i-1])
  }
  return arr
          .filter(numsUnderNum => numsUnderNum <= num)
          .filter(oddNums => oddNums % 2 != 0)
}

function sumFibs(num) {
  return num <= 1 ? num : createOddFibonacciArray(num).reduce((prevVal, currVal) => prevVal + currVal)
}


let numArr = sumFibs(75025)

// Sum All Primes
function creatPrimNumberArray(num) {
  let arr = []
  let timesNumCanBeDivided = 0
  for (let currentNum = 2; currentNum <= num; currentNum++) {
    for (let dividNums = 1; dividNums <= currentNum; dividNums++) {
      if (currentNum % dividNums === 0) {
        timesNumCanBeDivided++
      }
    }
    if (timesNumCanBeDivided == 2) {
      arr.push(currentNum)
    }
    timesNumCanBeDivided = 0
  }
  return arr
}

function sumPrimes(num) {
  return creatPrimNumberArray(num).reduce((prevVal, currVal) => prevVal + currVal);
}

let primesResult = sumPrimes(23)

function createNumSequenceArr(arr) {
	let newArr = []
	if (arr[0] > arr[arr.length - 1]) {
		for (let i = arr[arr.length - 1]; i <= arr[0]; i++) {
			newArr.push(i)
		}
	}
	else {
		for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
			newArr.push(i)
		}
	}
	return newArr
}

function smallestCommons(arr) {
	return createNumSequenceArr(arr)
}


let smallestCommonResult = smallestCommons([1, 5]);
smallestCommonResult
