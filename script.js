function berikutnya() {

    const nama = document.getElementById("nama").value;
    const usia = document.getElementById("usia").value;
    const tanggalLahir =
        document.getElementById("tanggalLahir").value;

    if (nama === "" || usia === "" || tanggalLahir === "") {
        alert("Silakan lengkapi biodata terlebih dahulu.");
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("usia", usia);
    localStorage.setItem("tanggalLahir", tanggalLahir);

    alert("Biodata berhasil disimpan!");
}
