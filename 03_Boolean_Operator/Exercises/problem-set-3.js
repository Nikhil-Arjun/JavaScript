/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results,
    try to see if you can see WHY it works that way. This will come in
    very handy in the future.
*/

let result1 = true && "moo";
console.log(result1);

let result2 = true && "Moo moo ?";
console.log(result2);

let result3 = true || "hello world";
console.log(result3);

let result4 = false || "Bye friend";
console.log(result4);
