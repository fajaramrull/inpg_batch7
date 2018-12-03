// Diberikan sebuah function yang menerima parameter berupa array, buatlah sebuah program JavaScript untuk grouping score yang lulus dan yang gagal.
// (Gagal jika score < 75)

function grouping (scores) {
    var hasil = {
        pass : [],
        fail: []
    };

    for(var i = 0; i < scores.length; i++){
        
        if(scores[i] < 75){
            hasil.fail.push(scores[i]);
        }else{
            hasil.pass.push(scores[i]);
        }
    }
    // Your code here
    return hasil;
  }
  
  console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
  // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }
  
  console.log(grouping([]));
  // { pass: [], fail: [] }