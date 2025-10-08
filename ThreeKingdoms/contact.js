//references to html elements
const form = document.getElementById('contact-form');
const message = document.getElementById('thank-you-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent form submission for demo purposes
    form.style.display = 'none'; //hide form after sucess
    message.style.display = 'block'; //thank-you message
});