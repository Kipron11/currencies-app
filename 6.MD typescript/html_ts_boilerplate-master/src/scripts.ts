// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const mathSum = (a: number, b: number): number => a + b;

console.log(mathSum(1, 2));
// Expected
// 3
console.log(mathSum(1, 10));
// Expected
// 11
console.log(mathSum(99, 1));
// Expected
// 100

// Write a function that takes a value as argument
// Return the type of the value

const valueType = (x: any) => typeof (x);

console.log(valueType(1));
// Expected
// 'number'

console.log(valueType(false));
// Expected
// 'boolean'

console.log(valueType({}));
// Expected
// 'object'

console.log(valueType(null));
// Expected
// 'object'

console.log(valueType('String'));
// Expected
// 'string'

console.log(valueType(['array']));
// Expected
// 'object'

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const areEquals = (x: any, y: any) => x === y;

console.log(areEquals(2, 3));
// Expected
// false

console.log(areEquals(3, 3));
// Expected
// true

console.log(areEquals(1, '1'));
// Expected
// false

console.log(areEquals('10', '10'));
// Expected
// true

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const nthCharacter = (a: string, n: number) => a.charAt(n - 1);

console.log(nthCharacter('abcd', 1));
// Expected
// 'a'

console.log(nthCharacter('zyxbwpl', 5));
// Expected
// 'w'

console.log(nthCharacter('gfedcba', 3));
// Expected
// 'e'

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const sliceThreecharacters = (a: string) => a.slice(3);

console.log(sliceThreecharacters('abcdefg'));
// Expected
// 'defg'

console.log(sliceThreecharacters('1234'));
// Expected
// '4'

console.log(sliceThreecharacters('fgedcba'));
// Expected
// 'dcba'

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const ExtractlastThreecharacters = (a: string) => a.substr(a.length - 3);

console.log(ExtractlastThreecharacters('abcdefg'));
// Expected
// 'efg'
//
console.log(ExtractlastThreecharacters('1234'));
// Expected
// '234'

console.log(ExtractlastThreecharacters('fgedcba'));
// Expected
// 'cba'

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
const FirstthreeCharacters = (a: string) => a.slice(0, 3);

console.log(FirstthreeCharacters('abcdefg'));
// Expected
// 'abc'

console.log(FirstthreeCharacters('1234'));
// Expected
// '123'

console.log(FirstthreeCharacters('fgedcba'));
// Expected
// 'fge'

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const Firsthalf = (a: string) => a.slice(0, a.length / 2);

console.log(Firsthalf('abcdefgh'));
// Expected
// 'abcd'

console.log(Firsthalf('1234'));
// Expected
// '12'

console.log(Firsthalf('gedcba'));
// Expected
// 'ged'

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const RemovelastThreecharacters = (a: string) => a.slice(0, -3);

console.log(RemovelastThreecharacters('abcdefg'));
// Expected
// 'abcd'

console.log(RemovelastThreecharacters('1234'));
// Expected
// '1'
//
console.log(RemovelastThreecharacters('fgedcba'));
// Expected
// 'fged'

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const BpercentOfa = (a: number, b: number) => `${a * b / 100}%`;

console.log(BpercentOfa(100, 50));
// Expected
// 50
//
console.log(BpercentOfa(10, 1));
// Expected
// 0.1
//
console.log(BpercentOfa(500, 25));
// Expected
// 125

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const NextlevelEngineering = (a: number, b: number, c: number, d: number, e: number, f: number) => Math.pow((a + b - c) * d / e, f);

console.log(NextlevelEngineering(6, 5, 4, 3, 2, 1));
// Expected
// 10.5

console.log(NextlevelEngineering(6, 2, 1, 4, 2, 3));
// Expected
// 2744

console.log(NextlevelEngineering(2, 3, 6, 4, 2, 3));
// Expected
// -8

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const Even = (a: number) => a % 2 === 0;

console.log(Even(10));
// Expected
// true
//
console.log(Even(-4));
// Expected
// true
//
console.log(Even(5));
// Expected
// false
//
console.log(Even(-111));
// Expected
// false

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const numberOfTimes = (a: string, b: string): number => b.split(a).length - 1;

console.log(numberOfTimes('m', 'how many times does the character occur in this sentence?')); // 2
console.log(numberOfTimes('h', 'how many times does the character occur in this sentence?')); // 4
console.log(numberOfTimes('?', 'how many times does the character occur in this sentence?')); // 1
console.log(numberOfTimes('z', 'how many times does the character occur in this sentence?')); // 0

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (a: any) => a % 1 === 0;

console.log(wholeNumber(4)); // true
console.log(wholeNumber(1.123)); // false
console.log(wholeNumber(1048)); // true
console.log(wholeNumber(10.48)); // false

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const calculateAB = (a: number, b: number) => (a < b ? a / b : a * b);

console.log(calculateAB(10, 100)); // 0.1
console.log(calculateAB(90, 45)); // 4050
console.log(calculateAB(8, 20)); // 0.4
console.log(calculateAB(2, 0.5)); // 1

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const theConcatenation = (a: string, b: string) => (a.includes(b) ? b + a : a + b);

console.log(theConcatenation('cheese', 'cake')); // 'cheesecake'
console.log(theConcatenation('lips', 's')); // 'slips'
console.log(theConcatenation('Java', 'script')); // 'Javascript'
console.log(theConcatenation(' think, therefore I am', 'I')); // 'I think, therefore I am'

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundTwoDigits = (a: number) => Math.round(a * 100) / 100;

console.log(roundTwoDigits(2.12397)); // 2.12
console.log(roundTwoDigits(3.136)); // 3.14
console.log(roundTwoDigits(1.12397)); // 1.12
console.log(roundTwoDigits(26.1379)); // 26.14

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
const numberForsplitting = (a: number) => a.toString().split('').map(Number);

console.log(numberForsplitting(10));// [1,0]
console.log(numberForsplitting(931)); // [9,3,1]
console.log(numberForsplitting(193278)); // [1,9,3,2,7,8]

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
//     Write a function that joins these strings together such that they form the following words:
//     'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const noChaos = (a: string, b: string) => {
    const stringA = a.replace(/[^a-zA-Z]/g, '');
    const stringB = b.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
    return stringA[0].toUpperCase() + stringA.slice(1) + stringB;
};
console.log(noChaos('java', 'tpi%rcs')); // 'Javascript'
console.log(noChaos('c%ountry', 'edis'));// 'Countryside'
console.log(noChaos('down', 'nw%ot'));// 'Downtown'

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isPrime = (a: number): number => {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return isPrime(a + 1);
        }
    }
    return a;
};

console.log(isPrime(38)); // 41
console.log(isPrime(7)); // 7
console.log(isPrime(115)); // 127
console.log(isPrime(2000)); // 2003

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (x: number, y: number): number => (x % y === 0 ? x : isDivisible(x + 1, y));

console.log(isDivisible(1, 23)); // 23
console.log(isDivisible(23, 23)); // 23
console.log(isDivisible(7, 3)); // 9
console.log(isDivisible(-5, 7)); // 0

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const bAfter3Char = (a: string, b: string) => {
    const bAfter3CharArr = a.split('');
    for (let i = bAfter3CharArr.length - 3; i >= 0; i -= 3) {
        bAfter3CharArr.splice(i, 0, b);
    }
    return bAfter3CharArr.join('');
};

console.log(bAfter3Char('1234567', '.')); // '1.234.567'
console.log(bAfter3Char('abcde', '$')); // 'ab$cde'
console.log(bAfter3Char('zxyzxyzxyzxyzxyz', 'w')); // 'zwxyzwxyzwxyzwxyzwxyz'

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const nextInalphabet = (a: string) => {
    let alphaString = '';
    for (let i = 0; i < a.length; i++) {
        a[i] === 'z' ? alphaString += 'a' : alphaString += String.fromCharCode(a.charCodeAt(i) + 1);
    }
    return alphaString;
};

console.log(nextInalphabet('bnchmf')); // coding
console.log(nextInalphabet('bgddrd')); // cheese
console.log(nextInalphabet('sdrshmf')); // testing

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthEl = (a: number[], n: number) => a[n - 1];

console.log(nthEl([1, 2, 3, 4, 5], 3)); // 3
console.log(nthEl([10, 9, 8, 7, 6], 5)); // 6
console.log(nthEl([7, 2, 1, 6, 3], 1)); // 7

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstthreeEl = (a: string[] | number[]): string[] | number[] => a.slice(3);

console.log(removeFirstthreeEl([1, 2, 3, 4])); // 4
console.log(removeFirstthreeEl([5, 4, 3, 2, 1, 0])); // 2 1 0
console.log(removeFirstthreeEl([99, 1, 1])); // []

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const removeLastThreeEl = (a: string[] | number[]): string[] | number[] => a.slice(-3);

console.log(removeLastThreeEl([1, 2, 3, 4])); // 2, 3, 4
console.log(removeLastThreeEl([5, 4, 3, 2, 1, 0])); // 2 1 0
console.log(removeLastThreeEl([99, 1, 1])); // 99, 1, 1

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFirstthreeEl = (a: string[] | number[]): string[] | number[] => a.slice(0, 3);

console.log(extractFirstthreeEl([1, 2, 3, 4])); // 1, 2, 3
console.log(extractFirstthreeEl([5, 4, 3, 2, 1, 0])); // 5 4 3
console.log(extractFirstthreeEl([99, 1, 1])); // 99, 1, 1

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastN = (a: string[] | number[], n: number): string[] | number[] => a.slice(-n);

console.log(lastN([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]
console.log(lastN([1, 2, 3], 6)); // [ 1, 2, 3 ]
console.log(lastN([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [ 6, 7, 8 ]

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanAfromB = (a: any[], b: any) => a.filter((el) => el !== b);

console.log(cleanAfromB([1, 2, 3], 2)); // [1, 3]
console.log(cleanAfromB([1, 2, '2'], '2')); // [1, 2]
console.log(cleanAfromB([false, '2', 1], false)); // ['2', 1]
console.log(cleanAfromB([1, 2, '2', 1], 1)); // [2, '2']

// Write a function that takes an array (a) as argument
// Return the number of elements in a

const countEl = (a: any[]) => a.length;

console.log(countEl([1, 2, 2, 4])); // 4
console.log(countEl([9, 9, 9])); // 3
console.log(countEl([4, 3, 2, 1, 0])); // 5

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const countNegative = (a: number[]) => a.filter((el) => el < 0).length;

console.log(countNegative([1, -2, 2, -4])); // 2
console.log(countNegative([0, 9, 1])); // 0
console.log(countNegative([4, -3, 2, 1, 0])); // 1

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const reverseSort = (a: number[]) => a.sort().reverse();

console.log(reverseSort([1, 3, 2])); // [3,2,1]
console.log(reverseSort([4, 2, 3, 1])); // [4,3,2,1]

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const alphaSort = (a: string[]) => a.sort();

console.log(alphaSort(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(alphaSort(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumber = (a: number[]) => a.reduce((acc, curr) => acc + curr, 0) / a.length;

console.log(averageNumber([10, 100, 40])); // 50
console.log(averageNumber([10, 100, 1000])); // 370
console.log(averageNumber([-50, 0, 50, 200])); // 50

// Write a function that takes an array of strings as argument
// Return the longest string

const longest = (a: string[]) => a.reduce((a, b) => (a.length > b.length ? a : b));

console.log(longest(['help', 'me'])); // 'help'
console.log(longest(['I', 'need', 'candy'])); // 'candy'

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allEqual = (a: any[]): boolean => a.every((i) => i === a[0]);

console.log(allEqual([true, true, true, true])); // true
console.log(allEqual(['test', 'test', 'test'])); // true
console.log(allEqual([1, 1, 1, 2])); // false
console.log(allEqual(['10', 10, 10, 10])); // fase

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const arrayOfallArrays = (...a: any[]) => a.reduce((acc, curr) => acc.concat(curr), []);

console.log(arrayOfallArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(arrayOfallArrays(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(arrayOfallArrays([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

/// /////////////////////////Write a function that takes an array of objects as argument

/// /////////////////////////Sort the array by property b in ascending order

/// /////////////////////////Return the sorted array
/// ////////////////////////////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////Write a function that takes two arrays as arguments

/// ////////////////////////////////////////Merge both arrays and remove duplicate values

/// ////////////////////////////////////////Sort the merge result in ascending order

/// ////////////////////////////////////////Return the resulting array

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumUp = (a: number[], b: number) => a.reduce((acc, curr) => (curr > b ? acc + curr : acc), 0);

console.log(sumUp([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumUp([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumUp([78, 99, 100, 101, 401], 99)); // 602

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minMax = (min: number, max: number) => Array.from({length: max - min + 1}, (v, i) => min + i);
// return Array.from({ length: max - min + 1 }).map((v, i) => min + i)

console.log(minMax(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMax(1, 3)); // [1, 2, 3]
console.log(minMax(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(minMax(2, 7)); // [2, 3, 4, 5, 6, 7]

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupByfirstLetter = (a: any[]): { [key: string]: string[] } => a.reduce((acc, curr) => {
    const firstLetter = curr[0].toLowerCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(curr);
    return acc;
}, {});

console.log(groupByfirstLetter(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupByfirstLetter(['Ant', 'Bear', 'Bird'])); // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupByfirstLetter(['Berlin', 'Paris', 'Prague'])); // { b: ['Berlin'], p: ['Paris', 'Prague']}
