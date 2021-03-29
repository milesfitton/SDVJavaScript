/**function firstFunction(){
    throw new Error('Stack Trace Error');
    }
    function secondFunction(){
    firstFunction();
    }
    function thirdFunction(){
    secondFunction();
    }
    thirdFunction();
    console.log (firstFunction)
*/
function greet () {
    return 'Hi'
    }
    console.log('Whats up')

    const name = 'Kenny'

    const anotherName = 'Bob'

    console.log (greet ())

    function firstFunction(){
        console.log("Hello from firstFunction");
       }
       function secondFunction(){
        firstFunction();
        console.log("The end from secondFunction");
       }
       secondFunction();

       function callMyself(){
        callMyself();
      }
     //callMyself();

    // let myNumber = 23 // address 12345678
        //  let myNumber = 23 + 1 
    // let newVar = myNumber //address 12345678
    let myString = 'abc' // declare a variable myString with a value of abc
    // memory address 12345 etc
    console.log (myString)
    myString = myString + 'd' // new memory address 
    console.log (myString)

   // Primitive Data Types = specifies the size and type of variable values
   //Non-primitive data types are called reference types because they refer to objects - 
   //Non-primitive data types = arrays objects and functions

  /* let myArray = []
      myArray.push("first")
      console.log (myArray)
myArray.push("second")
myArray.push("third")
console.log (myArray)
myArray.push("fourth")
myArray.pop()
console.log (myArray)

let sum = 0
sum = 1 + 2 + 3 + 4 + 5
const numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)
console.log (numbers)
console.log (sum)

const importantID = 489
//importantID = 100 // TypeError: Assignment to constant variable
*/

const myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
console.log(myArray)
myArray.push ('a')
console.log (myArray)