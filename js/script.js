// Ini file Javascript

// Fungsi untuk memastikan DOM telah termuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen DOM yang dibutuhkan
    const form = document.querySelector('form');

    // Ambil elemen berdasarkan ID
    const mainInput = document.getElementById('main-input');
    const mainResult = document.getElementById('main-result');
    const caraKonversi = document.getElementById('cara-konversi');
    const intro = document.getElementById('intro');
    const rumusHeader = document.getElementById('rumus-header');
    const rumus = document.getElementById('rumus');
    
    // Ambil elemen button
    const reverseButton = document.getElementById('reverse');
    
    // Ambil label berdasarkan atribut "for"
    const labelInput = document.querySelector('label[for="main-input"]');
    const labelResult = document.querySelector('label[for="main-result"]');
  
    // Mode awal: konversi dari Celcius ke Fahrenheit
    let modeKonversi = "CtoF"; // atau "FtoC" jika dibalik
  
    // Fungsi Event listener untuk proses konversi saat form disubmit
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // mencegah form reload halaman
  
      // Ambil nilai input dan pastikan nilainya berupa angka
      const inputValue = parseFloat(mainInput.value);
      if (isNaN(inputValue)) {
        // Jika suhu belum inputkan, tampilkan pesan error
        alert("Mohon inputkan suhu!");
        mainResult.value = "";
        caraKonversi.value = "";
        return;
      }

      // Lakukan perhitungan sesuai mode konversi
      if (modeKonversi === "CtoF") {
        // Konversi dari Celcius ke Fahrenheit
        let fahrenheit = (inputValue * 9/5) + 32; // rumus konversi
        fahrenheit = Math.round(fahrenheit * 100) / 100; // pembulatan ke 2 desimal
        mainResult.value = fahrenheit; // tampilkan hasil konversi
        
        // Tampilkan cara kalkulasi konversi suhu Celcius ke Fahrenheit
        caraKonversi.value = `( ${inputValue}℃ × (9/5) ) + 32 = ${fahrenheit}℉`;
        
      } else {
        // Konversi dari Fahrenheit ke Celcius
        let celcius = (inputValue - 32) / (9/5); // rumus konversi
        celcius = Math.round(celcius * 100) / 100; // pembulatan ke 2 desimal
        mainResult.value = celcius; // tampilkan hasil konversi
        
        // Tampilkan cara kalkulasi konversi suhu Fahrenheit ke Celcius
        caraKonversi.value = `(${inputValue}℉ - 32) ÷ (9/5) = ${celcius}℃`;
      }
    });
  
    // Fungsi Event listener untuk tombol "Reverse"
    reverseButton.addEventListener('click', function () {
      
      // Ambil nilai input dan hasil konversi untuk ditukar
      const currentInput = mainInput.value;
      const currentResult = mainResult.value;
      
      // Tukar nilai input dan hasil konversi
      mainInput.value = currentResult;
      mainResult.value = currentInput;
      
        // Toggle mode konversi
      if (modeKonversi === "CtoF") {
        // Ganti mode konversi Fahrenheit ke Celcius
        modeKonversi = "FtoC";
        
        // Ganti label input & result
        labelInput.textContent = "Fahrenheit (℉):";
        labelResult.textContent = "Celcius (℃):";

        // Tampilkan cara kalkulasi konversi suhu Fahrenheit ke Celcius versi reverse
        caraKonversi.value = `(${currentResult}℉ - 32) ÷ (9/5) = ${currentInput}℃`;

        // Ganti teks intro dan rumus konversi
        intro.innerHTML = "Masukkan suhu derajat Fahrenheit (&deg;F) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (&deg;C)";
        rumusHeader.innerHTML = "<h3>Cara konversi dari Fahrenheit (℉) ke Celcius (℃)</h3>";
        rumus.innerHTML = "<p>Suhu <span class=\"remark\" style=\"font-style: italic;\">S</span> dalam derajat Celcius (℃) sama dengan suhu <span class=\"remark\" style=\"font-style: italic;\">S</span> dalam derajat Fahrenheit (℉) kurang <span class=\"remark\">32</span> dibagi <span class=\"remark\">9/5</span>.</p><p><i>S</i><sub>(℃)</sub>= (<i>S</i><sub>(℉)</sub> - 32) ÷ (9/5)</p><p>atau</p><p><i>S</i><sub>(℃)</sub> = (<i>S</i><sub>(℉)</sub> - 32) ÷ 1.8</p>";

      } else {
        // Ganti mode konversi Celcius ke Fahrenheit
        modeKonversi = "CtoF";
        
        // Kembalikan label ke kondisi awal
        labelInput.textContent = "Celcius (℃):";
        labelResult.textContent = "Fahrenheit (℉):";

        // Tampilkan cara kalkulasi konversi suhu Celcius ke Fahrenheit versi reverse
        caraKonversi.value = `( ${currentResult}℃ × (9/5) ) + 32 = ${currentInput}℉`;

        // Kembalikan teks intro dan rumus konversi ke kondisi awal
        intro.innerHTML = "Masukkan suhu derajat Celcius (&deg;C) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (&deg;F)";
        rumusHeader.innerHTML = "<h3>Cara konversi dari Celcius (℃) ke Fahrenheit (℉)</h3>";
        rumus.innerHTML = "<p>Suhu <span class=\"remark\" style=\"font-style: italic;\">S</span> dalam derajat Fahrenheit (℉) sama dengan suhu <span class=\"remark\" style=\"font-style: italic;\">S</span> dalam derajat Celcius (℃) kali <span class=\"remark\">9/5</span> tambah <span class=\"remark\">32</span>.</p><p><i>S</i><sub>(℉)</sub>= (<i>S</i><sub>(℃)</sub> × 9/5) + 32</p><p>atau</p><p><i>S</i><sub>(℉)</sub> = (<i>S</i><sub>(℃)</sub> × 1.8) + 32</p>";
      }
      
    });
  
    // Fungsi Event listener untuk tombol reset (form reset)
    form.addEventListener('reset', function () {
      // Bersihkan hasil konversi
      mainResult.value = "";
      // reset nilai "Cara Kalkulasi"
      caraKonversi.value = "";
    });
  });
// Akhir file Javascript