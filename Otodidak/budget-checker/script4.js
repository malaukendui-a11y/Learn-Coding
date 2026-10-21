let belanja = Number(inputBelanja.value);
let diskon = 0;
let totalBayar = 0;

// Validasi input
if (inputBelanja.value.trim() === ""){
    hasil.textContent = "Input tidak boleh kosong";
    return;
} else if (Number.isNaN(belanja)){
    hasil.textContent = "Input harus berupa angka";
    return;
} else if (belanja < 0){
    hasil.textContent = "angka tidak boleh negatif";
    return;
}

// Hitung belanja
if (belanja >= 100000){
    diskon = belanja * 0.10;
} else {
    diskon = 0;
}

// Hitung total bayar
totalBayar = belanja - diskon;
hasil.textContent = `Selamat, Anda mendapat diskon Rp:${diskon.toLocaleString("id-ID")} Total pembayaran:${totalBayar.toLocaleString("id-ID")}`;

// Belanja kurang dari 100000
if (diskon > 0){
    hasil.textContent = `Selamat Anda Mendapatkan Diskon: Rp${diskon.toLocaleString("id-ID")}`;
} else {
    hasil.textContent = "Maaf anda belum mendapatkan diskon";
}