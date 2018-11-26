function gcd (firstNumber, secondNumber){

    for(var i = secondNumber; i > 1; i--){
         if(firstNumber % i === 0 && secondNumber % i === 0){
             return i;
         }
    }

    return i;
}

console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99));// 11
console.log(gcd(24, 36));// 12
console.log(gcd(17, 23));// 1