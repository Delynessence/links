// Wait for DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // Function to set a given theme/color scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // Function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
        } else {
            setTheme('theme-light');
        }
    })();

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    let sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollDown = window.scrollY;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

            if (sectionsClass) {
                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /*===== SCROLL REVEAL ANIMATION =====*/
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200
        });

        sr.reveal('#Photo, #Photo-2, #Name, #Description, iframe');
        sr.reveal('#title, #linksbutton, #footertext', { delay: 400 });
    } else {
        console.error('ScrollReveal is not defined. Ensure ScrollReveal script is loaded before script.js.');
    }

    // DISABLE RIGHT CLICK - Show modal warning
    const modal = document.getElementById('warningModal');
    const closeModalBtn = document.getElementById('closeModal');

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        if (modal) modal.style.display = 'block';
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal) {
            modal.style.display = 'none';
        }
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            if (modal) modal.style.display = 'block';
        }
    });

    window.addEventListener('click', function (e) {
        if (modal && modal.style.display === 'block' && !modal.contains(e.target)) {
            modal.style.display = 'none';
        }
    });

});

// GFROM Auto Scroll
const iframe = document.getElementById('gform');

        iframe.onload = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };