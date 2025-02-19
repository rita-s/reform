function initMobileMenu() {
    console.log('Initializing mobile menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    console.log('mobileMenuToggle:', mobileMenuToggle);
    console.log('navLinks:', navLinks);

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            console.log('Menu button clicked');
            navLinks.classList.toggle('active');
            console.log('navLinks classes:', navLinks.classList);
        });
    } else {
        console.log('Mobile menu elements not found');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Check if navbar is already loaded
    if (document.querySelector('.navbar')) {
        initMobileMenu();
    } else {
        // If navbar is not loaded, wait for it
        const observer = new MutationObserver(function(mutations) {
            if (document.querySelector('.navbar')) {
                observer.disconnect();
                initMobileMenu();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
});