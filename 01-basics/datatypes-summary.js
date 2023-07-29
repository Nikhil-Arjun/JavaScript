/*
->Primitive Types

7 types : String / Number / Boolean / null / undefined / Symbol / BigInt 

JavaScript is dynamically typed language
e.g const score = 100

Typescript is statically typed language
e.g const score:Number = 100

Boolean typed = True / False
e.g const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

Symbol -> const id = symbol('123)
          const anotherID = symbol('123')
    
const bigNumber = 342585461165448414n

-> Reference (Non Primitive)

// Array, Objects, Functions

Arrays ->
const heros = ["Ironman", "Captain America", "Thor"]

Objects ->
let person = {
  name: "Nikhil"
  age: 26
}


const myFunction = function (obj) {
  console.log("Hello World!")
}

To check type of any DataType

->  Types of val     |        Results
-------------------------------------------
    Undefined        |      "undefined"
    Null             |      "Object"
    Boolean          |      "boolean"
    Number           |      "number"
    String           |      "string"
    Object           |      "object"
    Object           |      "Function"
    Object           |      Implementation-defined 
                            except may not be "undefined", "boolean", "number", or "string"
                            
 e.g console.log(typeof outsideTemp)
*/
