document.addEventListener("DOMContentLoaded", function() {
    console.log("About page loaded!");

    // Navbar scroll behavior
    let lastScrollTop = 0; // Keep track of the last scroll position
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-125px"; // Hide the navbar (adjusted to -125px)
        } else {
            // Scrolling up
            navbar.style.top = "0"; // Show the navbar
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active"); // Toggle the 'active' class
    });

    // Add hover effect to team boxes (if you have a class for team boxes)
    document.querySelectorAll(".team-info").forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });
});
