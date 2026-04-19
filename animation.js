// 1. Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Durasi animasi (1 detik)
    once: false,    // Animasi akan muncul setiap kali di-scroll ulang
    mirror: true    // Animasi akan jalan lagi saat scroll ke atas
});

// 2. Efek Typing Academy Uma Sovereign
// Ubah teks di HTML menjadi: <span id="typing-text"></span>
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typing-text', {
        strings: ['Academy Uma Sovereign', 'A\'ueS Community', 'Sovereignty and Unity'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 15000, 
        loop: true,
        showCursor: true,
        cursorChar: '_'
    });
});

// 3. Efek 3D Flip untuk Kartu Admin (Opsional: Tambahan Manual jika AOS kurang 'mantap')
const adminCards = document.querySelectorAll('.group');
adminCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'perspective(1000px) rotateY(10deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0deg)';
    });
});
