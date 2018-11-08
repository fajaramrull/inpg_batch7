var name = "adi";
var age = 17;
var money = 200000;
var juice = 50000;
var anggur = 100000;


if(name !== null){
    if(age < 17){
        if(money > juice){
            console.log("Anda hanya boleh memesan juice. Harga Juice Rp. "+ juice);
            money = money - juice;
            console.log("Anda bisa pesan minum. Sisa uang anda : "+ money);
        }else{
            console.log("Uang Anda tidak cukup, Anda harus pulang");
        }
    }else if(age >= 17){
        if(money > anggur){
        console.log("Anda hanya boleh memesan anggur. Harga Anggur Rp. "+ anggur);
        money -= anggur;
        console.log("Anda bisa pesan minum. Sisa uang anda : "+ money);
    }else{
        console.log("Uang Anda tidak cukup, Anda harus pulang");
    }
    }else{
        console.log("Umur Anda belum sampai");
    }
}else{
    console.log("Anda Tidak Boleh Masuk!");
}
/*
if(money >= juice){
    money -= juice || money -= anggur;
    console.log("Anda bisa pesan minum. Sisa uang anda : "+ money);
    
}else{
    console.log("Uang Anda tidak cukup, Anda harus pulang");
}*/