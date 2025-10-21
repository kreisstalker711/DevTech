document.addEventListener('DOMContentLoaded', (event) => {
    // Typing effect for the hero section
    const typingElement = document.getElementById("typing");
    if (typingElement) {
        const words = ["Fast", "Modern", "Responsive", "Beautiful"];
        let i = 0, j = 0;
        let currentWord = "", deleting = false;

        function type() {
            currentWord = words[i];
            typingElement.textContent = currentWord.slice(0, j);

            if (!deleting && j < currentWord.length) j++;
            else if (deleting && j > 0) j--;
            else if (!deleting && j === currentWord.length) {
                deleting = true;
                setTimeout(type, 1000);
                return;
            } else {
                deleting = false;
                i = (i + 1) % words.length;
            }
            setTimeout(type, deleting ? 50 : 100);
        }
        type();
    }

    // Custom cursor logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .service-card, .project-card, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorOutline.classList.add('cursor-grow');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-grow');
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the .animate-on-scroll class
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

function movetopage1() {
    window.location.href = "https://envirinosynthquiz.vercel.app/";
}
function movetopage2() {
    window.location.href = "https://stemedtech.netlify.app/";
}
function movetopage3() {
    window.location.href = "https://whereweworkinc.netlify.app/";
}
