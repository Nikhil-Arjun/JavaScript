// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = '123abc';
tinderUser.name = 'Sammy';
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    userFullname: {
      firstName: 'Nikhil',
      lastName: 'Arjun',
    },
  },
};

// console.log(regularUser.fullName?.userFullname.firstName);

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };
const obj4 = { 5: 'a', 6: 'b' };
// const obj3 = { obj1, obj2 };

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// Object.assign() => static method copies all enumerable own properties from one or more source objets to a target object. It returns the modified target object.

// Spread Operator
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

// array of objects
// mostly this type of data came from Databases.
const user = [
  {
    id: 1,
    email: 'h@gmail.com',
  },
  {
    id: 2,
    email: 'g@gmail.com',
  },
  {
    id: 3,
    email: 'm@gmail.com',
  },
];

user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // get array of keys
// console.log(Object.values(tinderUser)); //get array of values
// console.log(Object.entries(tinderUser)); //(keys, values get combined and get stored in a arrays)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Determines whether an object has a property with the specified name.

// Destructuring - can do with both arrays and objects

// The destructuring assignments syntax is a JavaScript expressions that makes it possible to unpack values from arrays, or properties from objects, into  distinct variables

const course = {
  courseName: 'Js in hindi',
  price: '999',
  courseInstructor: 'Hitesh Sir',
};

// course.courseInstructor;

const { courseInstructor: Instructor } = course;

// console.log(courseInstructor);
console.log(Instructor);
