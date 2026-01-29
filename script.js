document.getElementById("kontakForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan anda akan kami proses! Terima kasih telah menghubungi kami.");
    this.reset();
});

document.getElementById("daftarForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Data Anda telah diterima! Pendaftaran mitra Anda akan kami proses.");
    this.reset();
});