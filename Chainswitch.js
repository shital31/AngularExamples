function chainswich(val){
    var answer = "";
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
             answer = "Shital";
             break
        case 2:
            answer = "Swapnil";
             break;
        case 8:
            answer = "Aniket";
            break;
    }
    return answer;
}
console.log(chainswich(8));