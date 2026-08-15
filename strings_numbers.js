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
