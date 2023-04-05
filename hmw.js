//question 1
const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.push('pineapple');
fruits.unshift('kiwi');
//question 2
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);
//question 3
const selectedFruits = fruits.slice(2,5);
//question 4
fruits.indexOf('grape');
console.log(fruits);
//question 5
const fruitstring = fruits.join(', ');
const fruitFromString = fruitstring.split();
console.log(fruitstring);
console.log(fruitFromString);
//question 6
const reversefruits = fruits.reverse();
console.log(reversefruits);
//question 7
fruits.sort();
console.log(fruits);
//question 8
const email = "john.doe@example.com";
const emailParts = email.split("@"); 
const username = emailParts[0]; 
const domain = emailParts[1]; 
console.log(username); 
console.log(domain); 
//question 9
const temperatures = [72, 85, 90, 65, 75, 88];
let highestTemperature  = temperatures[0];

for(let i = 0; i < temperatures.length; i++) {
  if(temperatures[i] > highestTemperature) {
    highestTemperature = temperatures[i];
  }
}
console.log(highestTemperature);

//question 10
const names = ['Alice','Bob','Charlie','David','Eva'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + ' is at index ' + i);
}