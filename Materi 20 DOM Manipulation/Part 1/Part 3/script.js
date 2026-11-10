let catatan = document.getElementById("catatan");
let tambah = document.getElementById("tambah");
let daftar = document.getElementById("daftar");

tambah.addEventListener("click", function() {
    if (catatan.value.trim() === ""){
        console.log("tidak boleh kosong");
        return
    } 

    let li = document.createElement("li");
    li.textContent = catatan.value;

    daftar.appendChild(li);

    catatan.value = "";
});