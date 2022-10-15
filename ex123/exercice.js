let age = prompt("Enter your age:");
if (age < 18) {
	console.log(` You are left with  `+(18-age)+` years to drive.`);
} else {
	console.log(`You are old enough to drive.`);
}


let myAge = prompt("Enter your age");
let yourAge = prompt("Enter your age");
if (myAge > yourAge) {
    console.log(`You are ` +(myAge-yourAge) +` years older than me`);

} else{
    console.log(`You are ` +(yourAge - myAge) +` years older than me`);
}


let a = prompt("Enter a:");
let b = prompt("Enter b:");
if (a > b) {
	console.log(a+` is greater than`+b);
} else {
	console.log(b+` is greater than `+a);
}


a > b ? console.log(a+` is greater than` +b) : console.log(b +` is greater than `+ a);

let n = prompt("Enter a number:");

if (n % 2 == 0) {
	console.log(n+`  is an even number`);
} else {
	console.log(n+` is is an odd number.`);
}
