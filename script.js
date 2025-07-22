// Simple Cart Simulation

document.addEventListener('DOMContentLoaded', function () {
  const cartButtons = document.querySelectorAll('.product button');

  cartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.parentElement.querySelector('h3').textContent;
      alert(`✅ "${productName}" added to cart! (Coming soon)`);
    });
  });

  // Contact form message
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('📩 Message sent! We will get back to you shortly.');
    contactForm.reset();
  });
});
