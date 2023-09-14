// *********************************Assigmnent#02****************************************
// **************************Chapter no 9-10 starts from here***********************************

// Question # 01

// var userCity=prompt("Enter Your City Name");

// if (userCity==="Karachi")

// {console.log("Welcome to the city of lights")}

// else(console.log("Not for Outsiders"))

// Question # 02

// var userGender=prompt("Please enter your Gender(Male or Female)");

// if (userGender==="Male")
// {alert("Good Morning Sir")}

// else if(userGender==="Female")
// {alert( "Good Morning Madam")}

// else{alert("invalid gender.Please enter male or female")}

// Question # 03

// var trafficSignalColor=prompt("enter traffic signal colour(red,yellow or green)")
// if(trafficSignalColor==="red")

// {alert("Must Stop")}

// else if(trafficSignalColor==="yellow")

// {alert("Ready to move")}
// else if(trafficSignalColor==="green")

// {alert("Move now")}
// else{alert("please enter correct color")}

// Question # 04

// var remainingFuel=+prompt("input remaining fuel car in litres")

// if (remainingFuel < 0.25)

// {alert("Please refill the fuel in car")}

// else if(remainingFuel > 0.25)

// {alert("its okay")}

// else{alert("give true input")}

// Question # 04
// a)
// var a=4;
// if(++a===5)
// {alert("the condition is true")}
// (output) alert message will be displayed

// b)
// var b=82;
// (b++ === 83)
// {
    // alert("given condition for variable b is true");
    // }
//  (output)alert message will not be displayed

// c)

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }




// (output)condition 1 is false


// condition 2 is true


// condition 3 is false

// condition 4 is true

// d)
// the condition is true

// e)

// only the alert msg true will be displayed
// f)

// the car is smaller than cat
// 

// Question # 06

    
// var firstSubject=+prompt("Enter First Subject marks")
// var SecondSubject = +prompt("Enter Second Subject marks");
// var ThirdSubject = +prompt("Enter third Subject marks");
// var totalMarks = +prompt("Enter total subject marks");
// var obtMarks = firstSubject + SecondSubject + ThirdSubject;
// var percentage = (obtMarks / totalMarks) * 100;



// if (percentage >= 80 && percentage <= 100) {
//   document.write("totalMarks"+" "+totalMarks+"<br>"+"obtMarks"+obtMarks+" "+"<br>"+
//   "Percentage:" + percentage + "<br>" + "Grade: " + "A+"+"<br>"+"Remarks"+" "+"Excellent");
// } else if (percentage >= 70 && percentage <= 80) {
//   document.write("totalMarks"+" "+totalMarks+"<br>"+"obtMarks"+obtMarks+" "+
//   "<br>"+"Percentage:" + percentage + "<br>" + "Grade: " + "A"+"<br>"+"Remarks"+" "+"Good");
// } else if (percentage >= 60 && percentage <= 70) {
//   document.write("totalMarks"+" "+totalMarks+"<br>"+"obtMarks"+obtMarks+" "+
//   "<br>"+"Percentage:" + percentage + "<br>" + "Grade: " + "B"+"<br>"+"Remarks"+" "+"You need to improve");
// } else if (percentage >= 50 && percentage <= 60) {
//   document.write("totalMarks"+" "+totalMarks+"<br>"+"obtMarks"+obtMarks+" "+
//   "<br>"+"Percentage:" + percentage + "<br>" + "Grade: " + "Fail"+"<br>"+"Remarks"+" "+"Sorry");
// } else {
//   console.log("Please enter correct percentage...");
// }

// Question # 07
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt the user to guess the number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess matches the secret number
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else {
//     alert("Sorry, that's not the correct answer. The secret number was " + secretNumber + ".");
// }

// Question # 08
// var number = parseInt(prompt("Enter a number:"));


// if (number % 3 === 0) {
//   alert(number + " is divisible by 3.");
// } else {
//   alert(number + " is not divisible by 3.");
// }


// Question # 09
// var number = +prompt("Enter your number");

// if (number % 2 === 0) {
//   console.log("even number");
// } else if (number % 3 === 0) {
//   console.log("odd number");
// } else {
//   console.log("neither ever nor odd number..");
// }


// Question # 10



// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It is very cold outside.");
// }


// Question # 11



// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;


// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
  
//   if (secondNumber !== 0) {
//     result = firstNumber / secondNumber;
//   } else {
//     alert(" Division by zero is not allowed.");
//   }
// } else if (operation === "%") {
  
//   if (secondNumber !== 0) {
//     result = firstNumber % secondNumber;
//   } else {
//     alert("Modulo by zero is not allowed.");
//   }
// } else {
//   alert("Invalid operation. Please enter +, -, *, /, or %.");
// }


// if (typeof result !== 'undefined') {
//   alert(`Result: ${result}`);
// }



// ******************************chapter # 9-11 Ends Here************************************************





































































































































