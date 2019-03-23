//FIB SEQ iteratively 
function fib(num){
    let var1 =0; var2=1, sum =0;
    if (num <= 1){
        return num;
    }
    let fib = 1;
    let prev = 1;
    for(let i=2; i<num ; i++){
        let temp = fib;
        fib += prev;
        prev = temp;
    }
    return fib;
}
//0 1 1 2 3 5 8 13 21 24

//recursive
function fibRec(num){
    if (num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return fibRec(num-1) + fibRec(num-2)
}

console.log(fibRec(1));
console.log(fib(1));
console.log(fibRec(2));
console.log(fib(2));
console.log(fibRec(0));
console.log(fib(0));
console.log(fibRec(5));
console.log(fib(5));
console.log(fibRec(8));
console.log(fib(8));