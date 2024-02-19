let phoneNumber =  prompt("Please type in your phone number:")
let message;

while (True) {
    if (phoneNumber === "close") {
        break;
    }
    if (phoneNumber.length < 11) {
        message = phoneNumber + "phone number is less than 11 digits"; 
    } else if ( phoneNumber.length > 11) {
        message = phoneNumber + "phone number is greater than less digits";
    } else {
        message = phoneNumber + "phone number is correct"
    }
}




document.write("<h1>" + " " + message + "."+ "<h1>")