function primenumber(num){
    if(num == 1){
        console.log("It is not Prime number")
    }
    else if(num==2){
        console.log("Prime Number")
    }
    else {
        for(i=2;i<num;i++){
            if(i%num==0){
                console.log("Number is not prime")
            }
        }
        console.log("Number is prime")
    }
    
}
primenumber(5)