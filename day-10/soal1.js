function perkalianunik(arr){
var num1 = 1;
var array = [];

for(var i=0; i<arr.length; i++){
    num1 *= arr[i];
}

for(i=0; i<arr.length; i++){
    hasil = num1 / arr[i];
    array.push(hasil);
}

return array;

}

console.log(perkalianunik([1, 2, 3, 4]));
console.log(perkalianunik([2,3,4,5,9]));