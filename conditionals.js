//if/else
let age =40
if(age >= 18){
    console.log("You can vote!")
}else{
    console.log("You can not vote!")
}



//else if
let gender = "non-binary"
if (gender ==="female"){
    console.log("you are a female , use the lady's restroom")
}else if(gender === "non-binary"){
    console.log("use the non-binary restroom")
}else if(gender === "trans"){
    console.log("use the trans restroom")
}else {
    console.log("you are a male, use the men's restroom")
}


//loops
//for(start; condition ; increment){
    //loop
//}
for (let i=0; i<10; i++){
     console.log(i)
}
let arrofNames = ["james", "jane", "joe", "jin", "jin", "esther"] 
for (let names = 0; names < arrofNames.length; names++){
    console.log("TECHCRUSH"  + arrofNames [names])
}

for(let x=0; x<=36; x++){
    console.log(x * 2)
}
for(let x=0; x<= 12; x++){
    console.log(x * 3)
}

//while
let loginAttempts = 0
while(loginAttempts < 3){
    console.log(`attempts number ${loginAttempts}`)
    loginAttempts++
}

let scores = [20 , 12 , 25 , 15 , 4, 8];
for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20)
}

  


