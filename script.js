// Create "Back to Top" button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Back to Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

// Show or hide "Back to Top" button on scroll (debounced for performance)
let scrollTimeout;
window.addEventListener("scroll", () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }, 100);
});

// Scroll smoothly to the top when the button is clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Animate elements on scroll (fade-in effect)
const fadeInElements = document.querySelectorAll(".fade-in");
if (fadeInElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 },
    );

    fadeInElements.forEach((el) => observer.observe(el));
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav a");
if (navLinks.length > 0) {
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
