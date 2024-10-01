
//por motivos de seguridad, el código del envio del formulario no se ha incluido


document.addEventListener("DOMContentLoaded", () => {
    
    const toggleButton = document.querySelector(".navbar__menu-toggle-button");
    const mobileMenu = document.querySelector(".navbar-menu-mobile");

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
    };

    const hideMenuResize = () => {
        mobileMenu.classList.remove('active');
    };

    toggleButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', hideMenuResize);
    window.addEventListener('load', hideMenuResize);
});




document.addEventListener('DOMContentLoaded', function() {
    const sobreMiSection = document.querySelector('.sobre-mi-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sobreMiSection.classList.add('show');
            } else {
                sobreMiSection.classList.remove('show');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(sobreMiSection);
});



document.addEventListener("DOMContentLoaded", function() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.001
    });

    skillCards.forEach((card, index) => {
        card.style.setProperty('--index', index + 1);
        observer.observe(card);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sobreMiSection = document.querySelector('.contacto-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sobreMiSection.classList.add('show');
            } else {
                sobreMiSection.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(sobreMiSection);
});








