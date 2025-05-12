document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('nav-active');
            // Optional: Change burger icon to 'X'
            const icon = navToggle.querySelector('i');
            if (mainNavUl.classList.contains('nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById("backToTopBtn");

    if (backToTopButton) {
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
                backToTopButton.style.opacity = "1";
            } else {
                backToTopButton.style.opacity = "0";
                // Wait for transition to finish before hiding
                setTimeout(() => {
                    if (!(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                         backToTopButton.style.display = "none";
                    }
                }, 300); // Corresponds to opacity transition time
            }
        }

        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Optional: Add active class to current nav link (simple version based on URL)
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop() || 'index.html';
        if (linkPath === currentPath) {
            // Remove active class from all first
            navLinks.forEach(l => l.classList.remove('active'));
            // Add to current
            link.classList.add('active');
        }
    });

});