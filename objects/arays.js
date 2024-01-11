// const details = ["sujaata", { name: "sujata", class: "intern" }, 25];

// console.log(details[1]);

// details[1].name = "Sujata";
// console.log(details[1].name);

// //spread operataor
// const [, ...rest] = details;
// console.log(rest);

// const obj = {
//   name: "sujata",
//   age: 24,

//   upName: () => {
//     return obj.name.concat(" " + "joshi");
//   },
// };
// console.log(obj.upName());
// console.log(obj.age);

//array properties
//imp

// const person = [
//   { fName: "a", pw: "test0" },
//   { fName: "a", pw: "test0" },
//   { fName: "a", pw: "test0" },
// ];
// const other = [];

// person.forEach(({ pw, ...rest }) => other.push({ ...rest }));
// console.log(other);

// const [, ...other] = person;
// console.log(other);
// const nGroup= person.sort((a,b)=> )

//map, filter,reduce, some, find, every

// const sum = (num) => {
//   const initialValue = 0;
//   const result = num.reduce(
//     (sums, currentValue) => sums + currentValue,
//     initialValue
//   );
//   // const ffg = num.reduce();
//   return result;
// };
// const f = sum([1, 2, 3, 4]);
// console.log(f);
