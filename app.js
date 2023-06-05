let c= confirm("confirm if you want to skip the welcoming message");

if (c == false) {
    let person = prompt("Please enter your name");
    let gender = prompt("Please enter your gender The answer should be either (male or female)");
    
    // if (gender !="male" && gender!="female"){
    //      gender = prompt("Please re enter your gender The answer should be either (male or female)");
    // }
    let age = prompt("Please enter your age"); 
    while(age<=0){
        alert("your age must be bigger than zero");
        age = prompt("Please enter your age"); 
    }  
    if (gender == "male")
    alert("Welcome Mr "+person);
    else if (gender == "female"){
        alert("Welcome Ms "+person);
    }
    else 
    {
        alert("Welcome"+person);
    }
 
  } 
