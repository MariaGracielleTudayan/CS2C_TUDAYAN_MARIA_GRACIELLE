//Creating 2 Variables with String Values
let mem1Age = "19";
let mem2Age = "22";

//Result1:
//1.1 Convert both values (individually) and print the final value.
let convertedAgeMem1 = parseInt(mem1Age); // "19" to 19
let convertedAgeMem2 = parseInt(mem2Age); // "22" to 22

console.log("Member 1 Age Converted:", convertedAgeMem1);
console.log("Member 2 Age Converted:", convertedAgeMem2);

//1.2 Add each value
let value = convertedAgeMem1 + convertedAgeMem2; //19 + 22
console.log("Value:", value); 

//Result2:
//2.1 Convert the 2nd age (of your partner) and concatinate it with the use of the 1st age
let concatinate = convertedAgeMem2 + mem1Age; //22 + "19"

//2.2 Totally convert the final value from 2.1 and subtrac it to aanother constant of the birth year of member 1
let int_concatinate = parseInt(concatinate); // 2219 is an integer
console.log("Final Value:" , int_concatinate - 2004); //2219 - 2004
