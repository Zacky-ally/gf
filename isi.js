document.getElementById('WhatsAppButton').addEventListener('click', function() {
    // Nomor telepon yang ingin dihubungi (dalam format internasional tanpa tanda +)
    const phoneNumber = '60183507254'; // Ganti dengan nomor yang sesuai
     // Pesan yang ingin dikirim
    const message = 'I LOVE YOU.';
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    // URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Buka URL WhatsApp
    window.open(whatsappUrl, '_blank');
});