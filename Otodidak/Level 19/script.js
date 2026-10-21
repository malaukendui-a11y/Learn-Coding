const nama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombolSapa");
const hasil = document.getElementById("hasil");

function sapaPengguna() {
    hasil.textContent = `Halo Cuy ${nama.value}! Selamat belajar JavaScript`
}

tombolSapa.addEventListener("click", sapaPengguna);