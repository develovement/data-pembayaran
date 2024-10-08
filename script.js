function submitForm(event) {
    event.preventDefault();  // Mencegah halaman di-refresh

    const formData = new FormData(document.getElementById('purchaseForm'));

    // Kirim data ke Google Sheets via Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyX7ocFGbCIc_wXh5GerNy7iZRZTMyyFBOdTOJ-Fg6lgYQKqo57VdazJ0BCEvYU88c6/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Gagal mengirim data, coba lagi!';
    });
}