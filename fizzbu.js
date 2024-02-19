displayArray = [];

for (let count =1; count<=100; count++) {
    if (count % 3 ===0 && count % 5 ===0){
        displayArray=displayArray.push("FizzBuzz\n");
    } else if (count % 3 === 0){
        displayArray = displayArray.push("Fizz\n");
    } else if (count % 5 === 0 ) {
        displayArray = displayArray.push("Buzz\n");
    } else {
        displayArray = displayArray.push(string(count))
    }
}


document.write("<h1>"+ displayArray +"<h1>")                      