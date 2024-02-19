let cellNumber = prompt("Enter your phone number.\n To exit type close");
let message;

while(true){
    if (cellNumber ==="close"){
        break;

    } else if (cellNumber.length < 11) {
        cellNumber = prompt(cellNumber + " " + "phone number typed is less than eleven digits.\n Type number again.");
    } else if (cellNumber.length > 11) {
        cellNumber = prompt(cellNumber + " " + "phone number typed is more than eleven digits.\n Type number again.");
    } else{
        message =  " " + "Number typed is correct";
        break;
    }

}



document.write("<h1>"+ message + "</h1>");
