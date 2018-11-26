function removeSpaces (text) {

    return text.split(" ").join("");
  }
  
  function reverseText (text) {
    return text.split("").reverse().join("");
  }
  
  function updateVowels (text) {
    for(var i=0; i < text.length; i++){
        if(text[i] === "i"){
            text[i].splice(0,text.length,"j");
        }
    }

      return text;
  }
  
  var password = 'dimitri w';
  var noSpaces = removeSpaces(password);
  var reversed = reverseText(noSpaces);
  var encryptedPassword = updateVowels(reversed);
  
  console.log(encryptedPassword);
  console.log(noSpaces);
  console.log(reversed);