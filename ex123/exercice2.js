let score = prompt("Enter your score:");
if ((score >= 80) && (score <=100))
grade = 'A';
else if ((score >= 700) && (score <= 89))
grade = 'B';
else if ((score >= 60) && (score <= 69))
grade = 'C';
else if ((score >= 50) && (score <= 59))
grade = 'D';
else if ((score >= 0) && (score <= 49))
grade = 'F';

console.log("Your score is "+ score+" grade "+grade)



const month = prompt('entere the month name')

switch(month) {
    case "september":
    case "october":
    case "november":
        console.log("The Season is Autumn.");
        break;
    case "december":
    case "january":
    case "february":
        console.log("The Season is Winter.");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The Season is Spring.");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The Season is Summer.");
        break;
    case console.log("Not a month"):

}


let weekDay = prompt("Enter day");

    switch(weekDay) {
        case "saturday":
        case "sunday":
      
            console.log("is a weekend day.");
            break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("is a work day.");
            break;
} 
