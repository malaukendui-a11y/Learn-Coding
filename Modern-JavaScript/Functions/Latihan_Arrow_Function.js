// Latihan arrow functions

// contoh regular function nya
// const greet = function (){
//     return "asoy banget nih!";
// }

// const greet = () => "asoy banget nih";
// const hasil = greet();

// console.log(hasil);

// Contoh Ke-2
// const bill = function(produk, pajak){
//     let total = 0;
//     for(let i = 0; i < produk.length; i++){
//         total += produk[i] + produk[i] * pajak;
//     }
//     return total;
// };

const bill = (produk, pajak) => {
    let total = 0;
    for(let i = 0; i < produk.length; i++){
        total += produk[i] + produk[i] * pajak;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));




