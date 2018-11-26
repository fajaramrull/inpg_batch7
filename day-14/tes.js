function checksort(a,b){
    if(a>b){
        return false;
    }else if(a<b){
        return true;
    }else{
        return true;
    }
}

function mysort(arr){
    var array = [];

    for(var i=0; i<arr.length; i++){
        var bool = checksort(arr[i], arr[i+1]);
        if(!bool){
            var restarr = arr.slice(i + 2, arr.length);
            return mysort([...array, arr[i+1], arr[i], ...restarr])
        }else{
            array.push(arr[i]);
        }
    }
    return array;
}