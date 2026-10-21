
if (inputBelanja.value.trim() === "") {
    hasil.textContent = "Input tidak boleh kosong!";
    return;
}

let belanja = Number(inputBelanja.value);

if (Number.isNaN(belanja)) {
    hasil.textContent = "Input harus berupa angka!";
    return;
} else if (belanja < 0) {
    hasil.textContent = "Nilai belanja tidak valid!";
    return;
}

if (belanja >= 100000) {
    hasil.textContent = "Diskon 10%";
} else {
    hasil.textContent = "Tidak ada diskon";
}
