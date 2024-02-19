// prompt user to type in their phone number
//  save the input in a variable 
// check the length of the input it meet the requirement.
// give the corresponding.
// Give th corresponding output

let phoneNumber =  prompt("Please type in your phone number:\n To Exit, Type close");
let message;

while (true) {
    if (phoneNumber === "close") {
        break;
    } else if (phoneNumber.length < 11) {
        phoneNumber= prompt(phoneNumber + "phone number is less than 11 digits.\n Please type again") 
    } else if ( phoneNumber.length > 11) {
        phoneNumber = prompt(phoneNumber + "phone number is greater than less digits.Please type again")
    } else {
        phoneNumber = "phone number is correct"
        break;
    }
}




document.write("<h1>" + " " + message + "."+ "<h1>")