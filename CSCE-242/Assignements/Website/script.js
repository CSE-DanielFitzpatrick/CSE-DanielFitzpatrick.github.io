document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const formStatus = document.getElementById('form-status');
  const form = document.getElementById('contactForm');
  
  const formData = new FormData(form);
  formData.append('to', 'djf3@email.sc.edu');  

  fetch('https://outlook.office.com/mail/', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.style.color = 'green';
      } else {
          throw new Error('Error sending message.');
      }
  })
  .catch(error => {
      formStatus.textContent = 'Failed to send message. Please try again.';
      formStatus.style.color = 'red';
  });
});
