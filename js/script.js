document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! Your message from ${email} has been received.`);
    this.reset();
});