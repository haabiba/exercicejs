
let month1 = prompt("Enter month");
let year = prompt("Enter year");
var getDaysInMonth = function(month1,year) {
   return new Date(year, month1, 0).getDate();

  };
  console.log(getDaysInMonth(month1, year));


function checkLeapYear(year1) {

    if ((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)) {
        console.log(year1 + ' is a leap year');
    } else {
        console.log(year1 + ' is not a leap year');
    }
}

const year1 = prompt('Enter a year:');

checkLeapYear(year1);