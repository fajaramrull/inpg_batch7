// buat function multidemensi nilai bertambah dan yang pertama first dan terakhir last
// contoh : dikasih nilai (2,5)
// output [1,2,3,4,5] [6,7,8,9,10]

function multidimensi(arr1,arr2){
    var array = [];
    var angka =0;

    for(var i = 0; i < arr1; i++){
        array[i] = [];
         for(var j=1; j <= arr2; j++){
             array[i].push(j+angka);
             
            //  if(array[i].length > 0){
            //      for(j=1; j<=arr2; j++){
            //      array[i].splice(i+arr2,i+j,arr2+j);
            //     }
            // }
        
          }
          angka += arr2;

          for(x=0; x<=arr1; x++){
            array[i].splice(0, 1, "First");
            array[i].pop();
            array[i].push("Last");
          }
    }
    return array;

}

console.log(multidimensi(2,5));
console.log(multidimensi(4,4));