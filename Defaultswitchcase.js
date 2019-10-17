function defaultSwitch(val){
    var answer ="";
    switch (val){
        case "a":
            answer ="apple";
            break;
        case "b" :
             answer="barbie";
            break;
        case "c":
            answer = "cat";
            break;
    }
    return answer;
   
}
console.log(defaultSwitch(3));