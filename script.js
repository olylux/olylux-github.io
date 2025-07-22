// OLYLUX Website Script

document.addEventListener('DOMContentLoaded', function () {
  // This runs when the page is fully loaded

  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      alert('This feature is coming soon! Stay tuned with OLYLUX.');
    });
  });
});
