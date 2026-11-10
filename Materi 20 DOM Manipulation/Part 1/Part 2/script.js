let tambah = document.getElementById("tambah");
let daftar = document.getElementById("daftar");

tambah.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "Belajar DOM";

    daftar.appendChild(li);
})