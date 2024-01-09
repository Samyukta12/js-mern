//object // crud operation

//create
const myInfo = {
  fName: "sujata",
  lName: "joshi",
  age: 23,
  edu: "Bachelor",
  doB: 2000,
  isFemale: true,

  // using function
  // Note: we can use this. in es7 function but we have to use object name in arrow function because arrow function is local function.

  //arrow function
  getFullName: () => {
    return myInfo.fName + " " + myInfo.edu;
  },
};

//read
console.log(myInfo.getFullName());
console.log(myInfo.fName);

//update
myInfo.isFemale = false;
console.log(myInfo.isFemale);
// or console.log(myInfo.isFemale= false);

// delete
delete myInfo.age;
console.log(myInfo);
