// Implementasikan function di atas agar mengembalikan key yang memiliki value saja (bukan undefined)

function deleteUndefinedKeys (object) {

    var obj = delete Object.keys(object);
  }
  
  console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  }));
  // {}