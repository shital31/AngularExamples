function age(dob){
    var diff= Date.now()-dob.getTime();
    var age=new Date(diff);
    return Math.abs(age.getUTCFullYear()-1970);   
}
console.log(age(new Date(1996,02,11)));
