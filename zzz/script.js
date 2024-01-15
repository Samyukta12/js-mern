//object

// const objName = {
//   //key value pair

//   fNmae: "sujata",
//   lName: "joshi",
//   dob: 2000,

//   // function
//   fullName: () => {
//     const currentAge = 2023 - objName.dob;
//     return currentAge;
//   },
// };
// const final = objName.fullName();
// console.log(final);

// array
// crud create read update delete/spread
// const array = ["sujata", { name: "sujata", lName: "joshi" }, 23];
// console.log(array[1]);

// //update

// array[1] = "suja joc";
// console.log(array[1].lName);

// //spread operator
// const [, ...rest] = array;
// console.log(rest);

// every , map, reduce some, find, filter immutable js
// to convert the string into the proper case " the fox is sly". -> The Fox Is Sly

//palindrome

// loop inside the  function use map.

// const properCase = (eg) => {
//   const splitting = eg.split(" ");
//   // console.log(splitting);
//   const up = splitting.map(
//     (upC) => {
//       // console.log(upC);
//       let newSplit = upC.split("");
//       // console.log(newSplit);
//       const sp = newSplit[0].toUpperCase();
//       // console.log(capital);
//       const joining = sp.join();
//       console.log(joining);
//     }
//     // (split) => splitting[0].toUpperCase,
//     // splitting[1].slice[1]
//   );
//   // console.log(up);
// };

// const finalAns = properCase("the fox is sly");

const properCase = (proper) => {
  const splitting = proper.split(" ");
  const up = splitting.map((nSp) => {
    const newSplit = nSp.split("");
    newSplit[0] = newSplit[0].toUpperCase();
    return newSplit.join("");
  });

  const finalAns = up.join(" ");
  console.log(finalAns);
};

properCase("the fox is sly");
