function Switch(val){
    var answer= "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break
        case 3:
            answer = "gama";
            break
    }
    return answer;
}
console.log(Switch(1));