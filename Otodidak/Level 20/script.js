const nama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombolSapa");
const hasil = document.getElementById("hasil");

function sapaPengguna(namaPengguna) {
    hasil.textContent = `Halo, ${namaPengguna}! Semangat Belajar Javascript`;
}

tombolSapa.addEventListener("click" ,function () {
    sapaPengguna(nama.value);
})