// Tersedia 2 input: suatu kata dan suatu huruf. Carilah berapa kali huruf muncul di dalam kata. Gunakan rekursif untuk menyelesaikan soal ini.

function countLetters(word, letter) {
    var arr = 0;

    if(word[arr] === letter){
        return 1 + countLetters(word.slice(1),letter);
    }
    if(word.length === 1){
        return 0;
    }
    return countLetters(word.slice(1),letter);
  }
  
  // TEST CASES
  console.log(countLetters('12104123', '1'));  // 3
  console.log(countLetters('the quick brown fox', 'o')); // 2
  console.log(countLetters('lorem ipsum', 'a')); // 0
  console.log(countLetters('hahaha', 'h')); // 3