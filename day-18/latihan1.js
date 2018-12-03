// Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter berupa number. 
// Buatlah dengan metode rekursif iterasi angka tersebut dari 0 sampai num.

function numberIterator(num) {
    if(num === 0){
        return 0;
    }else{
        return  String(numberIterator(num - 1)) + String(num);
    }

    // Your code here
   }
   
   // TEST CASES
   console.log(numberIterator(5)); // '012345'
   console.log(numberIterator(7)); // '01234567'
   console.log(numberIterator(3)); // '0123'
   console.log(numberIterator(1)); // '01'
   console.log(numberIterator(0)); // '0'