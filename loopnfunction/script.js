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

function evenNum(i) {
  let num = i % 2;
  if (i == 0) {
    console.log("Given number is even");
  } else console.log("Given number is odd");
  return num;
}
let input = prompt("enter a number");
const finalI = evenNum(input);
