function initScrollTyping() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll('.reveal-typing');
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            span.style.setProperty('--char-index', i);
            span.style.opacity = '0';
            el.appendChild(span);
        });
    });

    function updateVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const scrollPercent = (viewHeight - rect.top) / viewHeight;
            
            if (scrollPercent > 0.2 && scrollPercent < 0.8) {
                const chars = el.querySelectorAll('.char');
                chars.forEach((char, i) => {
                    setTimeout(() => {
                        char.style.opacity = '1';
                    }, i * 30);
                });
            }
        });
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility(); // Initial check
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollTyping);
