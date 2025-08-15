document.addEventListener('DOMContentLoaded', function() {

    // Transisi halus saat scroll
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            if (targetId === '#') targetId = 'body';
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efek paralaks sederhana untuk blob
    const blobs = document.querySelectorAll('.blob');
    window.addEventListener('scroll', function() {
        let scrollY = window.scrollY;
        blobs.forEach(blob => {
            let speed = blob.dataset.speed || 0.1;
            blob.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Animasi kartu saat muncul di layar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});