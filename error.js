try{
    //code that might fail goes here
    let result = 10 / 0;
    console.log(result);
    undefinedFuction(); // this will cause an error!

} catch(error) {
//this runs ONLY if something goes wrong
console.log(error.name)
console.log("An error occured: " + error.message);
}

console.log("The program continues here.");

function loadUserData(userId) {
    console.log("Starting to load data...");

    try{
        if (userId <= 0){ 
            throw new error("User ID must be greater than 0");
    }
    console.log("Data loaded for user: " + userId);
    }catch (error) {
    console.log("Failed: " + error.message);
    }finally{
    console.log("Loading completed. Closing connection.")
    }
}

loadUserData(5); //data loaded for user
//loadUserData(-1) //data loaded for user

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    }catch (error){
      console.log("Registeration failed: " + error.message);
    }
} 

registerStudent("Bola Okafor", 22);