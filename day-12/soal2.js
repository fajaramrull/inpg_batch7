var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
var array = [];
var tex2;
var txt = [];



 txt = text.split(",");
    for(var i=0; i < txt.length; i++){
       array[i] = txt[i].split(":");
    }
console.log(array);

