// Ambil Variabel HTML
const inputHarga = document.getElementById("harga");
const tombol = document.getElementById("hitung");
const output = document.getElementById("hasil");

// Buat Kondisi Diskon
function hitungDiskon(harga) {
    if (harga >= 500000) {
        return harga * 0.20;
    } else if (harga >= 200000) {
        return harga * 0.10;
    } else {
        return 0;
    }
}

// Kondisi Perhitugan Total
function hitungTotal(harga, diskon) {
    return harga - diskon;
}

// Output saat diklik
tombol.addEventListener("click", function(){
    const hargaBarang = Number(inputHarga.value);

    const diskon = hitungDiskon(hargaBarang);
    const total = hitungTotal(hargaBarang, diskon);

    // Hasil Output nya
    output.textContent = `Selamat Anda Mendapat Diskon Rp: ${diskon.toLocaleString("id-ID")} Total Menjadi: Rp${total.toLocaleString("id-ID")}`;

    console.log(output);
});