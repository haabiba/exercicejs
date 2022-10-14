import {countryList} from './countries.js'
console.log(countryList);

import {webTechs} from './web_techs.js'
console.log(webTechs);
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React,Python.'


let newWord = text.replace(/[\.\,\s]/g, ' ');
newWord= newWord.replace(/[\s]{2,}/g," ");//les espaces doubles
newWord= newWord.replace(/^[\s]/, ""); //espace d
newWord= newWord.replace(/[\s]$/,"");//espace f
console.log(newWord);
console.log(newWord.length)

let array= newWord.split(' ');
console.log(array)
console.log(array.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.unshift("Meat") // -> add d
console.log(shoppingCart) 
shoppingCart.push("Sugar")  // -> add fin

shoppingCart.splice(4,4);
console.log(shoppingCart)


console.log(shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea");
console.log(shoppingCart)

let countryFounded = countryList.find((countries) => countries == "Ethiopia");
countryFounded
	? console.log(countryFounded.toUpperCase())
	: countryList.push("Ethiopia");

let SASS = webTechs.find((web_techs) =>web_techs == "Sass");
SASS ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");  
let SASS1 = webTechs.find((web_techs) =>web_techs != "Sass");
SASS1 ? console.log("Sass not CSS preprocess") : webTechs.push("Sass");   

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
 let fullStack=frontEnd.concat(backEnd);
 console.log(fullStack)
