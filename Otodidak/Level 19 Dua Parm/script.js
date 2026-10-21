const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const tombolHitung = document.getElementById("tombolHitung");
const hasil = document.getElementById("hasil")

function jumlahkan(a, b) {
    hasil.textContent = a + b;
}

tombolHitung.addEventListener("click", function() {
    jumlahkan(Number(angka1.value), Number(angka2.value));
});