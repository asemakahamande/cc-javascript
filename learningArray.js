const  alphabets = ['a', 'b', 'c'];


document.write("<h1>" + alphabets + "</h1>")
document.write("<h1>" + (alphabets.length - 1) + "</h1>")



let evenNumbers = [2, 4, 6, 8];
let oddNumbers = [1, 3, 5, 7, 9];
let namesOfFruits = ["apple", "orange", "mango",  "pineapple"];



document.write("<h1 > The index of Even numbers is " + evenNumbers.length + ".", "</h1>")
document.write("<h1 > The index of Odd numbers is " + oddNumbers.length + ".", "</h1>")
document.write("<h1 > The index of of names of fruits is " + namesOfFruits.length + ".", "</h1>")


document.write("<h1 > The index for orange in  names of fruits is " + (namesOfFruits.length - 2) + ".", "</h1>")
document.write("<h1 > The index for pineapple in names of fruits is " + (namesOfFruits.length  -1) + ".", "</h1>")
document.write("<h1 > The index for mango in names of fruits is " + (namesOfFruits.length -3) + ".", "</h1>")


namesOfFruits.push('guava')
namesOfFruits.push('grape')

document.write("<h1>" + namesOfFruits +  "</h1>")



namesOfFruits.pop('guava')
namesOfFruits.pop('grape')

document.write("<h1>" + namesOfFruits + "</h1>")







