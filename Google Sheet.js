const scriptURL = 'https://script.google.com/macros/s/AKfycbw2GMqmoRt0jm3B6aYItlwhZcWWtl9l2P6tQO5rVi-5fp5MgXecSqYaimHLM3nPUoG-/exec';
const form = document.forms['contact-form'];
const container = document.querySelector('.container');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Hide form after submission
  form.style.display = 'none';

  // Show a waiting message while submitting
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Submitting your order... Please wait.';
  loadingMessage.style.color = 'white';
  container.appendChild(loadingMessage);

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      container.removeChild(loadingMessage);

      // Show thank you message and order again button
      const thankYouMessage = document.createElement('p');
      thankYouMessage.innerHTML = '✅ Please wait at the <strong>lobby of your dorm within 5 minutes</strong>. Thank you for ordering!';
      thankYouMessage.style.color = 'white';
      thankYouMessage.style.marginTop = '20px';

      const orderAgainBtn = document.createElement('button');
      orderAgainBtn.textContent = 'Order Again';
      orderAgainBtn.style.marginTop = '15px';
      orderAgainBtn.style.padding = '10px 20px';
      orderAgainBtn.style.backgroundColor = 'orangered';
      orderAgainBtn.style.color = 'white';
      orderAgainBtn.style.border = 'none';
      orderAgainBtn.style.borderRadius = '5px';
      orderAgainBtn.style.cursor = 'pointer';
      orderAgainBtn.onclick = () => window.location.reload();

      container.appendChild(thankYouMessage);
      container.appendChild(orderAgainBtn);
    })
    .catch(error => {
      container.removeChild(loadingMessage);

      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'An error occurred while submitting. Please try again later.';
      errorMessage.style.color = 'red';
      container.appendChild(errorMessage);

      form.style.display = 'block';
    });
});

