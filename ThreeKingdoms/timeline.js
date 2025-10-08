//wait until DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.timeline-toggle'); //elements with class timline-toggle

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() { //attach click event listener to toggles
            const content = this.parentElement.nextElementSibling; //find element to show/hide, assumes content is next sibling of parent element
            const isVisible = content.style.display === 'block'; //check if content visible
            content.style.display = isVisible ? 'none' : 'block'; //hide if visible, show if hidden
            this.textContent = isVisible ? '+' : '−'; // change symbol
        });
    });
});