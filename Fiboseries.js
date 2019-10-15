var fib = [0, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 

/*function fibo(num){
    for(var i=fibo.length;i<num;i++){
        fibo=fibo[i-2]+fibo[i-1]
    }
    console.log(fibo)
}
fibo(5)*/