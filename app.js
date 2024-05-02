/*This is the exam for JavaScript. You will have one class period
to complete this exam. You will be graded on the following
1: Proper Syntax
2: Half points will be awarded for proper syntax but not answering the questions
PLEASE REMEMBER TO READ THE QUESTIONS INCREDIBLY CAREFULLY */

/*QUESTION 1: 3 Points/*
/*Below this comment, i want you to create 3 variable for each data type.
those data-types being integer, string, and boolean */
let integer = 4
let string = "Hi";
let maybe = true;
/*Question 2: 3 points */

/*Inside this comment, i want you to explain what each data type is 
What is an integer data type?
What is a string data type?
What is a boolean data type

An integer date type is numbers 
A string data type are texts 
A boolean data type is true or false 
*/

/* QUESTION 3: 4 Points */
/* Below, you will see a variable that is equal to 5. Using an if else statement, i want you to
create an if statement that checks to see if the variable is less than or equal to 5. If it is, console.log("hi")
After the if statement, i want you to create an else statement that console.log("bye"). This will be inside
the else statement
please post the code below this comment */
let number = 5;
if(number <=5){
console.log("hi");
}

else{
    console.log("bye");
}

/*QUESTION 4: 4 Points */

/* Below, yoou will see a variable called number2 that is equal to 1. Using a while loop, i want you create a
while loop that checks to see if number 2 is less than 5. Inside the while loop, i want you to increment number2
using ++ and console.log('si') 
Post your code below this comment
*/

let number2 = 1;
while(number2 < 5){
console.log('si')
number2++
}



/*Question 5: 4 points */

/*Below this comment, i want you to create a for loop. this for loop should declare a variable i, check to see
if i is less than 5, and then increment the value. Inside the for loop, i want you to console.log('fortnite) 
please post the code below this comment
*/
for(let i = 0; i < 5; i++){
    console.log('fortnite');
}

/*QUESTION 6: 4 POINTS */

/*Below this comment, i want you to create a function called sayName. And then inside that function, i want you
to console.log("hello") and then call the function you just created 
please post the code below this comment
*/
function sayName(){
    console.log("hello");}
sayName();
/*QUESTION 7: 4 Points */

/*In a paragraph, explain what the HTML dom is 
TYPE ANSWER HERE
/*
HTML dom is a feature that allows us to access html and also the CSS of webpages while allowing us to modify html elements
/*Question 8: 4 points*/

/*Explain what the script tag does in an index.html file
TYPE ANSWER HERE 
The script tag allows external Javascript files to be linked 
*/
/*Question 9: 4 points */
/* Explain the importance of JavaScript in web development 
TYPE ANSWER HERE
Javascript is important in web development because JavaScript allows us to add functionaility to our websites 
*/


/*Question 10: 4 points */
/*Inside the index.html file, you will see that there is a h1 id with the name of fortnite.
Using getElementById, i want you to select that h1 id using getElementById
Please type the answer below this comment */
let fortnite = document.getElementById("fortnite");
/*QUESTION 11: 4 POINTS */
/*Using the h1 id variable that you just selected, change the text inside the h1 element using .innerHTML
Please type the answer below this comment */
fortnite.innerHTML = ("Fortnite2");
/*QUESTION 12: 4 POINTS */
/*Inside the index.html file, you will see that there is a p class with the class of no. Using
getElementByClassName, i want you to select that p class using getElementByClassName
Please type the answer below this comment */
let no = document.getElementsByClassName("no");
/*Question 13: 4 Points */

/*Inside the index.html file, you will see that there are 3 buttons with the class name of btn. I want
you to select that class using querySelectorAll. Please post the code below this comment */
let btn = document.querySelectorAll("btn");
/*QUESTION 14: Extra Credit 
Create an array of 3 integer values
*/
let array2 = [1, 1, 7];
/*QUESTION 15: EXTRA CREDIT */
/*Below you will see an array of 3 integers
*/
let array = [1,2,3];

/*Answer the following questions

What is the index value of the first number?
It's 0
what is the index value of the last number?
It's 2
*/



