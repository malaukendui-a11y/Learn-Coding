const belanja = Number(inputBelanja.value);

if (Number.isNaN(belanja)) {
    hasil.textContent = "Input Harus Berupa Angka";
    return;
} else if (belanja < 0) {
    hasil.textContent = "Nilai belanja tidak valid";
    return;
} else if (belanja >= 100000) {
    hasil.textContent = "Diskon 10%";
} else {
    hasil.textContent = "Tidak ada diskon";
}