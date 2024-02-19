let hypotaneous = Number(prompt("Enter the hypotaneous of the right angle triangle:"));
let adjacent = Number(prompt("Enter the adjacent of the right angle triangle:"));
let opposite = Number(prompt("Enter the opposite of the right angle triangle"));

let pytha = Number(((hypotaneous**2) === (adjacent**2) + (opposite**2)));


// pytha (hypotaneous**2 === adjacent**2 + opposite**2);

document.write("<h5> The answer is:" + pytha + " " + " Note: O means Pythgoras Rule is not achieved and 1 Means Pythagoras Rule is achieved\n"+"</h5>")


