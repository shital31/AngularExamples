function testequal(val){
    if(val == 20){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testequal("20"));

/*
3===3 strict equal operator
3==="3"  with strict equal sign this will not equal /
but with only == second will be equal 
i.e diffrence between strict eqaual and only equal
*/

function teststrictequal(val){
    if(val === 20){
        return "Equal";
    }
    return "Not Equal";
}
console.log(teststrictequal("20"));

function compare(a,b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compare(10,"10"));

function strictcompare(a,b){
    if(a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(strictcompare(10,"10"));

