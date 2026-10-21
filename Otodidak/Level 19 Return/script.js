const tombolHitung = document.getElementById("tombolHitung");
const hasil = document.getElementById("hasil");

function jumlahkan(a, b) {
    return a + b;
}

tombolHitung.addEventListener("click", function() {
    let total = jumlahkan(10, 5);
    hasil.textContent = `Hasil Penjumlahan: ${total}`;
});