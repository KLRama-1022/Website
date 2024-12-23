// Get the body element
const body = document.body;

// Detect scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // If scrolled down more than 50px, add 'scrolled' class
        body.classList.add('scrolled');
    } else {
        // If scrolled to the top, remove 'scrolled' class
        body.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// You can add subtle animations when the user scrolls to the Experience section
document.addEventListener('DOMContentLoaded', function() {
    const experienceCards = document.querySelectorAll('.experience-card');

    experienceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 0.5s ease';
    });

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, options);

    experienceCards.forEach(card => {
        observer.observe(card);
    });
});

// Add a hover glow effect for sections
document.querySelectorAll('.skills-section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    });

    section.addEventListener('mouseout', () => {
        section.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});

// Trigger animations when skills come into the viewport
document.addEventListener("DOMContentLoaded", function () {
    const skillElements = document.querySelectorAll('.skill-circle, .skill-hexagon');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add animation class
                observer.unobserve(entry.target); // Stop observing
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    skillElements.forEach(skill => observer.observe(skill));
});


// Function to trigger animations when skills section enters the viewport
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll('.skill-card');

    // Intersection Observer callback
    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element must be visible
    };

    const observerCallback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the element is in the viewport
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    // Create the intersection observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each skill card
    skillCards.forEach(card => {
        observer.observe(card);
    });
});

// Function to change background color and blog color on hover
function changeColor(element) {
    let color = element.getAttribute('data-color');
    document.querySelector('.blogs').style.backgroundColor = color;
    element.style.color = "white"; // change blog text color
}

// Reset the color when no blog is hovered
function resetColor() {
    document.querySelector('.blogs').style.backgroundColor = "#f1f3f5";
    let blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.style.color = "#333"; // Reset blog text color
    });
}
