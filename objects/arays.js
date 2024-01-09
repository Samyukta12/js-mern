// const details = ["sujaata", { name: "sujata", class: "intern" }, 25];

// console.log(details[1]);

// details[1].name = "Sujata";
// console.log(details[1].name);

// //spread operataor
// const [, ...rest] = details;
// console.log(rest);

const obj = {
  name: "sujata",
  age: 24,

  upName: () => {
    return obj.name.concat(" " + "joshi");
  },
};
console.log(obj.upName());
console.log(obj.age);
