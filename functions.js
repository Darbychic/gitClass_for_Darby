//declare
//function functionName() {
    //code to run
//}
//function with parameters
function greetings (){
    console.log("HELLO WORLD")
}
greetings()
//function with parameters
function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`)
}
welcome("Darby")

function add(){
    let x = 4;
    let y = 5;
    console.log("the addition of x and y")
    return x + y
}
console.log(add())

function addition(x, y){
    return x + y
}
console.log(addition(9, 10)) 

function ageCheck(age){
    if (age <= 18){
        return "please GET OUT....YOU ARE UNDERAGED"
    }else{
        return "Buy one bottle for me egbon!!"
    }
}

let estherAge = ageCheck(15)
console.log(estherAge)

function lotteryCheck(number){
    if (number=== 4){
        return "Congratulations"
    }else{
        return "Try again!"
    }
}
let Darbynumber = lotteryCheck(4)
console.log(Darbynumber)

//scope
//global scope
//let score = 75;
//function gradingSystem(){
    //if (score >= 50){
        //return "    PASSED!!"
    //}else {
        //return "FAILED!!!"
    //}
//}
//function deliveryFee(){
//let fee = 5000
//return fee
//}

//ARROW FUNCTIONS
const minus = (num) =>{
    return num - 50
}
let result = minus(75)
console.log(minus)


