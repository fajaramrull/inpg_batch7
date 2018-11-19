/* soal 1
buat function bernama multidimensi */

function multidimensi(arr1,arr2){
    var array = [];

    for(var i = 0; i < arr1; i++){
        array[i] = [];
         for(var j=1; j <= arr2; j++){
             array[i].push(j);
          }
    }
    return array;

}

console.log(multidimensi(2,5));
console.log(multidimensi(3,4));
console.log(multidimensi(5,2));