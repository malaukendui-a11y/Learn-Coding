const tombol = document.getElementById("hitung");
const hasil = document.getElementById("hasil");

// Ambil Function
function hitungPajak(harga) {
    let pajak = harga * 0.11;
    return pajak;
}

tombol.addEventListener("click", function() {
    let hasilPajak = hitungPajak(200000);

    output.textContent = hasilPajak;
});