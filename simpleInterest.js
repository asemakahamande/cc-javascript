// a program to calclulate the simple interest.

let principal  = prompt("Enter the principal value:")
let rate = prompt("Enter rate value.\n convert the rate value in percentage and enter it as decimal")
let time = prompt("Enter the time value:");
let simpleInterest = ((principal * (rate / 100) * time) / 100);



document.write("<h1> The simple interest" + " = " + "₦" + simpleInterest + "." + "</h1>")

