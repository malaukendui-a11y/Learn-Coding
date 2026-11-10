// Ambil Variabel
const inputHarga = document.getElementById("harga");
const tombol = document.getElementById("hitung");
const output = document.getElementById("hasil");

// Validasi Data
tombol.addEventListener("click", function(){
    if (inputHarga.value.trim() === ""){
        output.textContent = "Harga Wajib Diisi!";
        return;
    } 

    const hargaBarang = Number(inputHarga.value);

    if (hargaBarang === 0){
        output.textContent = "Harga tidak boleh 0";
        return;
    }
    if (hargaBarang < 0){
        output.textContent = "Harga tidak boleh minus";
        return;
    }

// Perhitungan
function hitungDiskon(harga){
    if (harga >= 500000){
        return harga * 0.20;
    } else if (harga >= 200000){
        return harga * 0.10;
    } else
        return 0;
}

function hitungTotal(harga, diskon){
    return harga - diskon;
}

// Baris 1: Hitung nominal diskon
const diskon = hitungDiskon(hargaBarang);

// Baris 2: Hitung harga akhir
const total = hitungTotal(hargaBarang, diskon);

// Hasil Output
output.textContent = `Harga Awal Rp${hargaBarang.toLocaleString("id-ID")}, Diskon Rp${diskon.toLocaleString("id-ID")}, Total Bayar Rp${total.toLocaleString("id-ID")}`;
});