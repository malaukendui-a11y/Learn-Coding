// Ambil Variabel
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Klik Tombol
addButton.addEventListener("click", function() {
    console.log("Berhasil Input");

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";

});