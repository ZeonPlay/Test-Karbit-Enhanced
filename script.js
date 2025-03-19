document.addEventListener('DOMContentLoaded', function () {
  // Cek apakah halaman saat ini adalah halaman kuis
  if (window.location.pathname.includes('quiz.html')) {
    document.getElementById('quizForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Mengambil nilai nama
      const name = document.getElementById('nameInput').value.trim();
      if (!name) {
        alert('Mohon masukkan nama terlebih dahulu!');
        return;
      }
  
      // Mengambil nilai dari jawaban
      const q1 = parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0);
      const q2 = parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0);
      const q3 = parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0);
  
      // Memastikan semua pertanyaan dijawab
      if (!document.querySelector('input[name="q1"]:checked') ||
          !document.querySelector('input[name="q2"]:checked') ||
          !document.querySelector('input[name="q3"]:checked')) {
        alert('Mohon jawab semua pertanyaan!');
        return;
      }
  
      // Menghitung skor total
      const totalScore = q1 + q2 + q3;
  
      // Menentukan hasil berdasarkan skor
      let resultText = '';
      if (totalScore === 0) {
        resultText = `${name} adalah REAL WIBU!`;
      } else if (totalScore === 1) {
        resultText = `${name} adalah Wibu Normal.`;
      } else if (totalScore === 2) {
        resultText = `${name} adalah Agak Karbit.`;
      } else if (totalScore === 3) {
        resultText = `${name} adalah Karbit.`;
      } else {
        resultText = `${name} adalah KARBIT BET WOI!`;
      }
  
      // Simpan hasil dan nama ke localStorage
      localStorage.setItem('result', resultText);
  
      // Redirect ke halaman hasil
      window.location.href = 'result.html';
    });
  }

  // Cek apakah halaman saat ini adalah halaman hasil
  if (window.location.pathname.includes('result.html')) {
    const resultDiv = document.getElementById('result');
    const resultText = localStorage.getItem('result') || 'Tidak ada hasil.';
    resultDiv.textContent = resultText;

    // Hapus data dari localStorage setelah ditampilkan
    localStorage.removeItem('result');
  }
});