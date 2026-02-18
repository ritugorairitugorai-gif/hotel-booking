//1.write a program to add two numbers in java script

// let a=5;
// let b=10;
// sum=a+b;
// console.log("sum of two numbers:"+sum);

//2.write a program to check if the no is even or odd

// let num=5
// if(num%2===0)
// {
//     console.log("num is even");
// }
// else
// {
//     console.log("num is odd");
// }

//3.write a program to find a largest no among three numbers

// let a=9;
// let b=10;
// let c=47;
// if(a>b && a>c)
// {
// console.log("largest no="+a);
// }
// else if(b>a && b>c){
// console.log("largest no="+b);
// }
// else
// {
//     console.log("largest no="+c);
// }

//4.print no from 1 to 10 using loop

// for(let i=1;i<=10;i++){
//     console.log(i++);
// }
// 6.write a program to reverse a string in java script

// let a="ritu";
// let rev=a.split("").reverse().join("");
// console.log(rev);

//7.write a program to check string is a palindrome

// let a="madam";
// let reversestr=a.split("").reverse(a).join("");
// if(a===reversestr)
// {
//     console.log("palindrone no");
// }
// else{
//     console.log("not palindrone no");
// }
//function
//8.write a function to add three no

// function addthreenumbers(a,b,c)
// {
//     return a+b+c;
// }
// let result=addthreenumbers(15,17,19);
// console.log("the sum is:",result);

//9.write a funtion to return squre of  number
// function squarenumber(num)
// {
//     return num*num;
// }
// let result=squarenumber(5);
// console.log("square is:",result);

//10.write a function that greets a user by name

// function greetuser(name)
// {
//     return "hello,"+ name + "!welcome!";
// }
// let greeting=greetuser("ritu");
// console.log(greeting);

//11.write a function to check if a no is positive

// function ispositive(number)
// {
//     return number>0;
// }
// let result=ispositive(25);
// console.log("ispositive:",result);

//12.write a function to return largest of two number

// function max(a,b)
// {
//   return a>b ? a:b; 
// }
// let result=max(15,57);
// console.log("largest no is:",result);

//13.write a function to return largest of three number

// function max(a,b,c)
// {
//     return Math.max(a,b,c);
// }
// let result=max(20,30,78);
// console.log("largest no is:",result);

//hw......
//.....Event Handling.....
//1.print a message when a button is clicked.
// document.getElementById("dj").addEventListener("click",function(){
//     document.getElementById("boss").textContent= "hii";
// });

//2.change the text on button when clicked.

// document.addEventListener("click",function(){
//     document.getElementById("btn").addEventListener("click",function(){
//         this.textContent= "text changed!";
//     });
// });
//3.print the value of an input fild when a button is clicked.

// document.addEventListener("click",function(){
//     document.getElementById("btn3").addEventListener("click",function(){
//         const value=Document.getElementById("input3").value;
//         alert("you typed:" +value);
//     });
// });
//4.change the background colour of a div on mouseover.

// document.addEventListener ("DOMContentLoaded", function ()
//  {
//   const box = document.getElementById("hoverBox");

//   box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "orange";
//   });

//   box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "lightgray";
//   });
// //5.give a alert message when a form is submitted.

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("form5").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//   });
// });
// //form validation(clint side)
// //1.write a program to check if input is empty

 function checkEmpty() {
   const value = document.getElementById("input1").value;
   if (value.trim() === "") {
     alert("Input is empty!");
   } else {
     alert("Input is not empty.");
   }
 }


// //2.write a program to check if input length is atleast three character

 function checkLength() {
   const value = document.getElementById("input2").value;
  if (value.length < 3) {
     alert("Input must be at least 3 characters long!");
   } else {
     alert("Valid input length.");
   }
 }
// //3.write a program to validate if input contains only letters

 function checkLetters() {
   const value = document.getElementById("input3").value;
   const regex = /^[A-Za-z]+$/;
   if (!regex.test(value)) {
     alert("Input must contain only letters!");
   } else {
     alert("Valid input (letters only).");
   }
 }
// //4.write a program to check weather input has both upper case and lower case

 function checkCase() {
  const value = document.getElementById("input4").value;
   const hasUpper = /[A-Z]/.test(value);
   const hasLower = /[a-z]/.test(value);
   if (hasUpper && hasLower) {
     alert("Input has both uppercase and lowercase letters.");
   } else {
     alert("Input must contain both uppercase and lowercase letters!");
   }
 }
// // //5.wrie a program to make sure check box is checked before submitting

 function checkCheckbox() {
   const isChecked = document.getElementById("agree").checked;
   if (!isChecked) {
     alert("Please check the checkbox before submitting.");
   } else {
     alert("Checkbox is checked. Submitting...");
   }
 }