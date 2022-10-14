"use strict";

var countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
var webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']; //1. Declare an empty array;

var arr = Array();
console.log(arr);
var myArray1 = [];
var total1 = myArray1.length;
console.log(total1);
/*Declare an array with more than 5 number of elements
 Find the length of your array*/

var myArray = [99, 101.5, 5, 6, 44];
var total = myArray.length;
console.log(total); //4. Get the first item, the middle item and the last item of the array

console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[myArray.length - 1]);
/*Declare an array called mixedDataTypes, put different data types in the array
and find the length of the array. The array size should be greater than 5*/

var arr1 = [1, 'test', {}, 123.43, false, []];
console.log(arr1);
console.log(arr1.splice(0, arr1.length));
/*Declare an array variable name itCompanies and assign initial values
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array*/

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", " Oracle", " Amazon"];
console.log(itCompanies);
console.log(arr1.splice(arr1.length)); //console.log(itCompanies.splice(0,itCompanies.length));
//Print the first company, middle and last company

console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
itCompanies = itCompanies.map(function (e) {
  console.log(e.toUpperCase());
});
/*12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
IBM,Oracle and Amazon are big IT companies.*/

var ITcompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companies = ITcompanies.split(',');
console.log(companies);

if (itCompanies.indexOf("Facebook") !== -1) {
  console.log(' exist in the array');
} else {
  console.log('not exist in the array');
}

var index = itCompanies.indexOf('Facebook');

if (index === -1) {
  console.log('This itCompanies does not exist in the array');
} else {
  console.log('This itCompanies does exist in the array');
}

index === -1 ? console.log('This itCompaniesdoes not exist in the array') : console.log('This itCompanies does exist in the array');
var indexOftiktok = itCompanies.indexOf('tiktok');

if (indexOftiktok === -1) {
  console.log('This itCompaniesdoes does not exist in the array');
} else {
  console.log('This itCompaniesdoes does exist in the array');
} //14.Filter out companies which have more than one 'o' without the filter method


var yes = [];
var no = [];
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length);

for (var i = 0; i < itCompanies.length; i++) {
  var k = itCompanies[i].match(/o.{2}/g);

  if (k) {
    yes.unshift(itCompanies[i]);
    console.log(i, " OK");
  } else {
    no.unshift(itCompanies[i]);
    console.log(i, " NO");
  }
}

console.log(yes);
console.log(no); //15.Sort the array using sort() method

itCompanies.sort();
console.log(itCompanies); //16.Reverse the array using reverse() method

var reversed = itCompanies.reverse();
console.log('reversed:', reversed); //17.Slice out the first 3 companies from the array

console.log(itCompanies.slice(Math.max(0, 2))); //18.Slice out the last 3 companies from the array

console.log(itCompanies.slice(Math.max(itCompanies.length - 5, 4))); //19.Slice out the middle IT company or companies from the array

function sliceMiddle(itCompanies) {
  console.log(itCompanies.length);
  console.log(itCompanies.slice((itCompanies.length - 1) / 2, itCompanies.length / 2 + 1));
}

sliceMiddle(itCompanies); //20.Remove the first IT company from the array

itCompanies.splice(0, 1);
console.log(itCompanies); //21.Remove the middle IT company or companies from the array

itCompanies.splice(itCompanies.length / 2 - 1, 2);
console.log(itCompanies); //22.Remove the last IT company from the array

itCompanies.splice(itCompanies.length - 1, 1);
console.log(itCompanies); //23.Remove all IT companies

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);