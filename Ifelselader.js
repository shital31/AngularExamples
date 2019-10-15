function ifelse(val){
    if(val<10){
        return "Less than 10";
    }
    else if(val<100){
        return "Less than 100";
    }
    else{
        return "Other than that";
    }
}
console.log(ifelse(150));