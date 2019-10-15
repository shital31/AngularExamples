function testlogicalAnd(val){
    if(val<=50 && val>=20){
        return "yes";
    }
     return "no";
}
console.log(testlogicalAnd(10));

function testlogicaOr(val){
    if(val<10 || val>20){
        return "OutofRange";
    }
        return "Inrange";
}
console.log(testlogicaOr(15));
