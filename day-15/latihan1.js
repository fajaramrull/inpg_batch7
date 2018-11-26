// jika jarak karakter a ke b 3 maka nilai true selain itu false

function threeStepAB(text){
    var cara,carb;
    // var tex2 = text.split(" ").join("");
     
    for (var i = 0; i < text.length; i++){
         if(text[i] === 'a'){
             cara = i;
         }else if(text[i] === 'b'){
             carb = i;
         }
     }
    return cara - carb === 4 || carb - cara === 4;
}

console.log(threeStepAB('lane borrowed')); // true
console.log(threeStepAB('i am sick')); // false
console.log(threeStepAB('you are boring')); // true
console.log(threeStepAB('barbarian')); // true
console.log(threeStepAB('bacon and meat')); // false