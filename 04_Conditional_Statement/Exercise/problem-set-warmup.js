/*
    1. Create a variable called points that starts at 40
    2. Create an if statement that checks if points are greater than 20
    3. If points are greater than 20, subtract 10 from points
    4. Log out the points at the end of the program (this should always log)
    5. Change points to start at 15 and run the program again
*/

let points = 21;

if (points > 20) {
  let new_points = `${points - 10}`;
  console.log(new_points);
} else {
  console.log("Nahhh..do it again");
}