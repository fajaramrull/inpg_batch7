function targetterdekat(arr){

    for(var i=0; i<arr.length; i++){
       if(arr[i] === "o"){
        hasil = arr.length;
        var o = arr.indexOf("o");
        var x = arr.indexOf("x");
        hasil = x - o;
       }else if(arr[i] === "x"){
        hasil = arr.length;
        var o = arr.indexOf("o");
        var x = arr.indexOf("x");
        hasil = o - x;
       }
    }
return hasil;
}


console.log(targetterdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetterdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetterdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetterdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetterdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2