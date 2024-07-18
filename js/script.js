// script.js

// Fungsi untuk menghitung BMI
function hitungBMI() {
  // Ambil nilai berat badan dari input
  const beratBadan = parseFloat(
    document.getElementById("input-berat-badan").value
  );

  // Ambil nilai tinggi badan dari input dan konversi dari cm ke meter
  const tinggiBadan =
    parseFloat(document.getElementById("input-tinggi-badan").value) / 100;

  // Validasi apakah kedua input sudah terisi dengan benar
  if (!beratBadan || !tinggiBadan) {
    alert("Mohon isi semua data dengan benar.");
    return;
  }

  // Hitung nilai BMI
  const bmi = beratBadan / (tinggiBadan * tinggiBadan);
  const bmiRounded = bmi.toFixed(2); // Bulatkan nilai BMI menjadi dua angka di belakang koma

  // Tampilkan hasil BMI yang sudah dihitung
  document.getElementById("bmi-value").innerText = `BMI Anda: ${bmiRounded}`;

  // Tentukan kategori BMI berdasarkan nilai
  let kategori;
  if (bmi < 18.5) {
    kategori = "Kurus";
    showResult("bb-kurang");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal";
    showResult("bb-normal");
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Berlebihan";
    showResult("bb-berlebih");
  } else {
    kategori = "Obesitas";
    showResult("obesitas");
  }

  // Tampilkan kategori BMI
  document.getElementById("bmi-category").innerText = `Kategori: ${kategori}`;

  // Tampilkan pesan jarak BMI
  document.querySelector(
    ".hasil-jarak"
  ).innerText = `Hasil BMI di antara ${Math.floor(bmi)} dan ${Math.ceil(bmi)}`;

  // Tampilkan bagian hasil
  document.getElementById("result-section").style.display = "block";
}

// Fungsi untuk menampilkan hasil sesuai dengan kategori BMI
function showResult(categoryId) {
  // Sembunyikan semua kategori
  document.getElementById("bb-kurang").style.display = "none";
  document.getElementById("bb-normal").style.display = "none";
  document.getElementById("bb-berlebih").style.display = "none";
  document.getElementById("obesitas").style.display = "none";

  // Tampilkan kategori yang relevan
  document.getElementById(categoryId).style.display = "block";
}

// Fungsi untuk mereset hasil BMI
function reset() {
  // Sembunyikan bagian hasil
  document.getElementById("result-section").style.display = "none";

  // Kosongkan teks BMI dan kategori
  document.getElementById("bmi-value").innerText = "";
  document.getElementById("bmi-category").innerText = "";
  document.querySelector(".hasil-jarak").innerText = "";

  // Sembunyikan semua kategori
  document.getElementById("bb-kurang").style.display = "none";
  document.getElementById("bb-normal").style.display = "none";
  document.getElementById("bb-berlebih").style.display = "none";
  document.getElementById("obesitas").style.display = "none";
}

// Fungsi untuk mengunduh hasil BMI ke dalam file teks
function downloadResult() {
  // Ambil nilai BMI dan kategori dari elemen HTML
  const bmiValue = document.getElementById("bmi-value").innerText;
  const bmiCategory = document.getElementById("bmi-category").innerText;

  // Gabungkan teks hasil BMI dan kategori
  const resultText = `${bmiValue}\n${bmiCategory}`;

  // Buat objek Blob dari teks hasil
  const blob = new Blob([resultText], { type: "text/plain" });

  // Buat elemen anchor untuk mengunduh file
  const anchor = document.createElement("a");
  anchor.download = "BMI_Result.txt"; // Nama file yang akan diunduh
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank"; // Buka link di tab baru untuk pengunduhan
  anchor.style.display = "none"; // Sembunyikan elemen anchor (aman)

  // Tambahkan elemen anchor ke dalam body
  document.body.appendChild(anchor);

  // Klik elemen anchor untuk mengunduh file
  anchor.click();

  // Hapus elemen anchor setelah pengunduhan selesai
  document.body.removeChild(anchor);
}
