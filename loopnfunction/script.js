// multiplication table of 3

// for (let i = 2; i <= 10; i++) {
//   console.log("3*" + i + " = " + 3 * i);
//   // let mul= i
// }

// even number
// do with modulus

// for (let i = 2; i <= 10; i++) {

//     // let mul= i
//   }s

//function

// WAF to find area of square

// function areaOfSquare(a) {
// or let square= Math.pow(a,a)
//   let square = a * a;
//   return square;
// }
// let aos = areaOfSquare(5);
// console.log(aos);
// concat , dollor

// function fName(name, midname, lastname) {
//   let fulName = name + " " + midname + " " + lastname;
//   return fulName;
// }
// const fullName = fName("raktim", "kumar", "shrestha");
// console.log(fullName);

// function evenNum(i) {
//   let num = i % 2;
//   if (i == 0) {
//     console.log("Given number is even");
//   } else console.log("Given number is odd");
//   return num;
// }
// let input = prompt("enter a number");
// const finalI = evenNum(input);

//slice and substring diff

//pcase

// function upCase(name) {
//   return name.toUpperCase();
// }
// let fin = upCase("raktim");
// console.log(fin);

//ES6
//arrow function

// const upperCase = (name) => {
//   return name.toUpperCase();
// };
// const finalA = upperCase("sujata");
// console.log(finalA);

//interview imp

// anonymous function and inline function
// inline vaneko function lai kei variable mah assign garney
// default, parametre, implicit, explicit,iifes, closure(interview que)
//closure is for pw or any unauthorize folder  //private variable declare

// const pass = () => {
//   const password = " sujata";
//   return password;
// };
// console.log(pass());

// default parameter
// const sum = (page = 1, limit = 10) => {
//   console.log(page, limit);
// };
// sum();

// const mult = (num = 5) => {
//   for (let i = 1; i <= 10; i++) {
//     const multiply = num * i;

//     console.log(multiply);
//   }
// };
// console.log(mult());

// simple intrest

// const simInt = (p, t, r) => {
//   const simpleIntrest = (p * t * r) / 2;
//   return simpleIntrest;
// };

// console.log(simInt(2, 2, 2));

// amount using math

// const cI = (p, r, t) => {
//   const fin = p * Math.pow(1 + r, t);
//   return fin; /,mnb1// };
// console.log(cI(10000, 0.1, 10));

// find the first not repeated character

// const repeated = (character) => {
//   let splits = character.split("");
//   let counting = splits.length;

//   let bigs = character.toUpperCase();
//   let revers = splits.reverse().join("");

//   return { splits, counting, bigs, revers };
// };
// console.log(repeated("ababae"));

// const rev = (fName) => {
//   let spliting = fName.split("");
//   let reversing = spliting.reverse();
//   let joining = reversing.join(" ");
//   return { spliting, reversing, joining };
// };
// const finalAns = rev("My name is sujata");
// console.log(finalAns);
