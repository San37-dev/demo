document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('/submit-response', {
    method: 'POST',
    body: new URLSearchParams(formData)
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('response-message').innerText = data.message;
      this.reset();
    })
    .catch(error => {
      document.getElementById('response-message').innerText = "An error occurred.";
      console.error('Error:', error);
    });
});
