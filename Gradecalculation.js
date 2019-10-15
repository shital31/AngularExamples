function grade(num){
    if(num<35){
        console.log("Fail");
    }
    else if(num>=35 && num<=60){
        console.log("Pass");
    }
    else if(num>60 && num<=80){
        console.log("First class");
    }
    else if(num>80 && num<=100){
        console.log("First Class Distintion")
    }
    else{
        console.log("Invalid")
    }
}
grade(30)