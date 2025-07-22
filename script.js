document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.parentElement.querySelector('h3').innerText;
      const productPrice = this.parentElement.querySelector('p').innerText;

      alert(`🛒 ${productName} added to cart!\nPrice: ${productPrice}`);
    });
  });
});
