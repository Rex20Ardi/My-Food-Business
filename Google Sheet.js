const scriptURL = 'https://script.google.com/macros/s/AKfycbxDnK8YAQykJgx6Y0SaxQX-VjoBqXkOU83l0ZFc84qIMcb6M6TwZP1c0BeIFdgF4lgZ/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! Your order has been submitted."))
    .then(() => window.location.reload())
    .catch(error => console.error('Error!', error.message));
});
