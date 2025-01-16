document.addEventListener("DOMContentLoaded", function() {
    console.log("SmartSafety page loaded!");

    // Navbar scroll behavior
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-125px"; // Nasconde la navbar
        } else {
            navbar.style.top = "0"; // Mostra la navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Per gestire lo scrolling negativo
    });

    // Elementi del menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const logo = document.querySelector(".logo");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");

        if (navLinks.classList.contains("active")) {
            // Nasconde il logo e mostra le opzioni al suo posto
            logo.style.opacity = "0";
            logo.style.transition = "opacity 0.3s ease-in-out";
            navLinks.style.display = "flex";
            setTimeout(() => {
                navLinks.style.opacity = "1";
                navLinks.style.transform = "translateY(0)";
            }, 100);
        } else {
            // Mostra il logo di nuovo e nasconde le opzioni
            logo.style.opacity = "1";
            navLinks.style.opacity = "0";
            navLinks.style.transform = "translateY(-20px)";
            setTimeout(() => {
                navLinks.style.display = "none";
            }, 300);
        }
    });
});
