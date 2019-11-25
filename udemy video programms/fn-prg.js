// var x = myFunction(4, 3);
// document.getElementById("demo").innerHTML = x;

// function myFunction(a, b) {
//     return a * b;
// }





// function can  be return as a return value
let fn = (a, b) => console.log(a + b);
fn(4, 4);


//functions can be passed as paamemeter
let fn1 = (a, b) => { return a + b;} 
console.log(fn1(20, 4)) ;

function fnPrms(fn1){
    fn1()
}

//it can be assign to variables
function fnRtn(){
    return() => {
        console.log(`returning function from function`) 
    }
}

//fnRtn()()
let ft=fnRtn()
ft()

//Asynchronous programming
console.log(`Started`)
setTimeout(() => console.log(`completed`),1000)
console.log(`Executed`)
 


