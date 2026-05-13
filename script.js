// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });
    });
});

// Fade animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
});

// Welcome message
console.log("Welcome to Jay R Sala's Portfolio Website!");
