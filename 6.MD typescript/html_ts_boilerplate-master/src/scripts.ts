// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const mathSum = (a:number ,b:number):number =>  a + b;

console.log(mathSum(1,2));
// Expected
// 3
console.log(mathSum(1,10));
// Expected
// 11
console.log(mathSum(99,1));
// Expected
// 100

// Write a function that takes a value as argument
// Return the type of the value

const valueType = (x:any) => typeof(x);

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

console.log(valueType("String"));
// Expected
// 'string'

console.log(valueType(['array']));
// Expected
// 'object'


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
const areEquals = (x:any, y:any) => x===y ;

console.log(areEquals(2,3));
// Expected
// false

console.log(areEquals(3,3));
// Expected
// true

console.log(areEquals(1,'1'));
// Expected
// false

console.log(areEquals("10","10"));
// Expected
// true

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
const nthCharacter =(a:string, n:number) => a.charAt(n-1);

console.log(nthCharacter('abcd',1))
// Expected
// 'a'

console.log(nthCharacter('zyxbwpl',5))
// Expected
// 'w'

console.log(nthCharacter('gfedcba',3))
// Expected
// 'e'

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const sliceThreecharacters = (a:string) => a.slice(3);

console.log(sliceThreecharacters("abcdefg"))
// Expected
// 'defg'

console.log(sliceThreecharacters("1234"))
// Expected
// '4'

console.log(sliceThreecharacters('fgedcba'))
// Expected
// 'dcba'

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const ExtractlastThreecharacters = (a:string) => a.substr(a.length - 3) ;

console.log(ExtractlastThreecharacters('abcdefg'))
// Expected
// 'efg'
//
console.log(ExtractlastThreecharacters('1234'))
// Expected
// '234'

console.log(ExtractlastThreecharacters('fgedcba'))
// Expected
// 'cba'

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
const FirstthreeCharacters = (a:string) => a.slice(0,3);


console.log(FirstthreeCharacters('abcdefg'))
// Expected
// 'abc'

console.log(FirstthreeCharacters('1234'))
// Expected
// '123'

console.log(FirstthreeCharacters('fgedcba'))
// Expected
// 'fge'


// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const Firsthalf = (a:string) => a.slice(0, a.length/2);


console.log(Firsthalf('abcdefgh'))
// Expected
// 'abcd'

console.log(Firsthalf('1234'))
// Expected
// '12'

console.log(Firsthalf('gedcba'))
// Expected
// 'ged'

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const RemovelastThreecharacters = (a:string) => a.slice(0,-3);


console.log(RemovelastThreecharacters("abcdefg"))
// Expected
// 'abcd'

console.log(RemovelastThreecharacters("1234"))
// Expected
// '1'
//
console.log(RemovelastThreecharacters("fgedcba"))
// Expected
// 'fged'

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const BpercentOfa = (a:number, b:number) => a*b/100 +"%";


console.log(BpercentOfa(100,50))
// Expected
// 50
//
console.log(BpercentOfa(10,1))
// Expected
// 0.1
//
console.log(BpercentOfa(500,25))
// Expected
// 125

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const NextlevelEngineering = (a:number,b:number,c:number,d:number,e:number,f:number) => Math.pow((a+b-c)*d/e,f);

console.log(NextlevelEngineering(6,5,4,3,2,1))
// Expected
// 10.5

console.log(NextlevelEngineering(6,2,1,4,2,3))
// Expected
// 2744

console.log(NextlevelEngineering(2,3,6,4,2,3))
// Expected
// -8


// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const Even = (a:number) =>  a % 2 == 0;


console.log(Even(10))
// Expected
// true
//
console.log(Even(-4))
// Expected
// true
//
console.log(Even(5))
// Expected
// false
//
console.log(Even(-111))
// Expected
// false

