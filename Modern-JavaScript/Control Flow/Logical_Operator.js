// logical operators - OR || and AND &&

const password = "pas@23r2";

if (password.length >= 12 && password.includes("@")){
    console.log("Password anda Kuat");
} else if (password.length >= 8 || password.includes("@") && password.length > 5){
    console.log("Password anda sudah cukup kuat");
} else {
    console.log("Password anda belum cukup kuat");
}