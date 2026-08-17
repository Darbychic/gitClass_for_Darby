let herName = "Samantha";
function lowerMe (value){
    return value.toLowerCase();
}   
        console.log(lowerMe(herName));
const trimExample = "   Hello, World!   ";
console.log(trimExample.trim());
console.log(trimExample.trimStart());
console.log(trimExample.trimEnd());

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.startsWith("daft"));
console.log(filename.endsWith(".pdf")); // true
console.log(filename.endsWith(".docx")); // false

const extractExample = "Esther"
console.log(extractExample.slice(0, 3)); // "Est"
console.log(extractExample.slice(3)); // her
console.log(extractExample.slice(-3)); // her
console.log(extractExample.substring(0, 3)); // "Est"
console.log(extractExample.substring(3)); //her
console.log(extractExample.substring(-3)); // Esther (negative index treated as 0)

//replace and the replaceAll methods
const stringText = "Uzoma is a fine girl , Uzoma is so smart and cute and Uzoma is a developer"
//console.log(stringText.replace("Uzoma" , "She"))//replaces the first occurrence of Uzoma with Esther
//console.log(stringText.replaceAll("Uzoma" , "She"))
let splittedText = stringText.split(",")
console.log(splittedText[1].replaceAll("Uzoma" , "She"))

//reverse 
let panlidrome = "madam"
let reversed = panlidrome.split("").reverse().join("")
console.log(reversed)

function wordChecker(word){
   return word === word.split("").reverse().join("") ? "Yes it is a palindrome" : "No it is not a palindrome"
}

console.log(wordChecker("Tundeednut"))  