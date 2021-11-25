var pukul = 20; // jam aktivitas
var aktivitas;

// tentuin aktiivtas
if (pukul == 5) {
  aktivitas = "Bangun Tidur";
} else if (pukul > 5 && pukul < 9) {
  aktivitas = "Persiapan Pagi (Subuh, Mandi, Sarapan dll)";
} else if (pukul > 8 && pukul < 12) {
  aktivitas = "Ngerjain Skripsi, Ngerjain taks magang";
} else if (pukul > 12 && pukul < 14) {
  aktivitas = "Istirahat Siang (Zuhur, Makan, dll)";
} else if (pukul > 14 && pukul < 17) {
  aktivitas = "Lanjut produktif lagi";
} else if (pukul > 17 && pukul < 21) {
  aktivitas = "Belajar, Kadang Istirahat, dll";
} else {
  aktivitas = "Tidur";
}

console.log(aktivitas);
