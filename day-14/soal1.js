function compareNumbers (firstNumber, secondNumber) {
    var num;
    if(firstNumber === secondNumber){
         num = (firstNumber-1) - secondNumber;
     }else{
         num = firstNumber < secondNumber;
     }
    return num;
  }
  
  // TEST CASES
  console.log(compareNumbers(5, 8)); // true
  console.log(compareNumbers(5, 3)); // false
  console.log(compareNumbers(4, 4)); // -1
  console.log(compareNumbers(3, 3)); // -1
  console.log(compareNumbers(17, 2)); // false