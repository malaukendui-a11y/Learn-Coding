// Ambil Varibel
let budget = document.getElementById("budget");
let spend = document.getElementById("spend");
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");

// Baca Input Saat diKlik
checkButton.addEventListener("click", function() {
    let uangSaya = Number(budget.value);
    let biayaNongkrong = Number(spend.value);

    console.log(uangSaya);
    console.log(biayaNongkrong);

    if (uangSaya >= biayaNongkrong) {
        let sisaUang = uangSaya - biayaNongkrong;
        
        result.textContent = "Gas Nongs Cuy! Sisa Uang lu: Rp" + sisaUang.toLocaleString("id-ID");
    } else {
        result.textContent = "Kerja dulu brok, baru nongkrong";
    }

    if (budget.value === "" || spend.value === "") {
        result.textContent = "isi input dulu brok";
        return;
    } 

    if (uangSaya < 0 || biayaNongkrong < 0) {
        result.textContent = "Angka Tidak Boleh Negatif Brok !";
        return;
    }

    if (Number.isNaN(uangSaya) || Number.isNaN(biayaNongkrong)) {
        result.textContent = "Input harus berupa angka, brok!";
        return;
    }
});