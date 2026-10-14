// String
console.log("hello, world");

let email = "kenny@gmail.com";
console.log(email);

// string concatenation
let namaDepan = "Ananda";
let namaBelakang = "Kenny";

let namaLengkap = `${namaDepan} ${namaBelakang}`;
console.log(namaLengkap);

// getting characters
console.log(namaLengkap[0]);

// string length
console.log(namaLengkap.length);

// string methods
console.log(namaLengkap.toLocaleUpperCase());
let hasil = namaLengkap.toLocaleLowerCase();
console.log(hasil, namaLengkap);

let index = email.indexOf("@");
console.log(index);