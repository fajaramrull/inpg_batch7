function numberProcessing(numberArr) {
    var max = 0;
    var min;
    var odd = [];
    var even = [];
    var mean =0;
    var num = 0;

    max = numberArr.sort(function(a, b){return a > b})
    max = numberArr.slice(numberArr.length - 1);

    min = numberArr.sort(function(a, b){return a < b})
    min = numberArr.slice(numberArr.length - 1);

    for(var i=0; i <=numberArr.length; i++){
           if(numberArr[i] % 2 !== 0){
                numberArr.sort(function(a,b){return a>=b});
                odd.push(numberArr[i]);
             }
         }

    for(var i=0; i<=numberArr.length; i++){
        if(numberArr[i] % 2 === 0){
            numberArr.sort(function(a,b){return a>=b});
            even.push(numberArr[i]);         
        }
    }

    for(var i = 1; i<numberArr.length; i++){
        mean = (numberArr.length-1)/2;
        // if(numberArr.length % 1 === 0){
        //     numberArr.length -= 1;
        //     mean = numberArr.length / 2;
        // }else if(numberArr.length % 1 !== 0){
        //     numberArr.length -= 1;
        //     mean = (numberArr.length / 2 ) - 0.5;
        // }
        // if(num1 % 1 === 0){
        //     mean.push(num1);
        // }
}

return "Max : "+max+ ", Min : "+min+", Odd : "+odd+", Even : "+even+", Mean : "+mean;
   }
   
   console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"