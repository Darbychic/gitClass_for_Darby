const arr = [1, "Esther", true , [1, 2, 3]]
let student1 = "Sara"
let student2 = "Samad"
let student3 = "Godwin"
let student4 = "Mohh"
let students = ["Sara", "Samad", "Godwin", "Mohh"]
//array starts from zero
console.log(students[0])
console.log(students.length)
//changing items in an array
students[3] = "Effiong"
console.log(students)
//adding elements to an array
students.push("Mohh")//adds items to the end of an array
console.log(students)

students.unshift("Uzoma")//adds an item to the beginning of an array
console.log(students)

//removing elements
students.pop()//removes the last item in array
console.log(students)
students.shift()//removes the first item in the array
console.log(students)

//includes, indexOf
console.log(students.includes("Sara"))
console.log(students.indexOf("Sara"))//returns the index position in that array and if it doesn't exist it will put minus 1 (-1)

//reverse, sort, slice,splice
students.reverse()
console.log("this is reverse:" ,students)
students.sort()
console.log("this is sorted:" ,students)

console.log("this is sliced:" ,students.slice(1, 3))//returns a new array with the sliced elements
console.log("this is spliced:" ,students.splice(1 ,2 , "Mohh" , "Esther"))//removes the elements from the array and returns the elements in an array
//higher order array methods
//map, filter, reduce, forEach, find, findIndex, some, every
//map methods(create a new array by transforming each of the elementsin the array)

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers)

const marketlist =["rice" , "beans" , "garri" , "yam" , "plantain"]
const addedPrefix = marketlist.map((item) => "I will buy " + item)
console.log(addedPrefix)

//filter methods
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const complexion = ["dark" , "fair" , "medium" , "dark" , "fair"]
const darkComplexion= complexion.filter((item) => item === "dark")
console.log(darkComplexion)
//or
//const double = numbers.map((num)=>{
  //  return num *2;
//})

const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark)

const findIndexDark = complexion.findIndex((item) => item ==="dark")

//reduce syntax
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)














