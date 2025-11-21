// Simple front-end interactivity: mobile nav toggle, form validation, year update
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', function () {
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // simple contact form handling (front-end only)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name').trim();
      const email = formData.get('email').trim();
      const message = formData.get('message').trim();

      // basic validation
      if (!name || !email || !message) {
        msg.style.color = 'crimson';
        msg.textContent = 'Please fill in required fields.';
        return;
      }
      // simulate send
      msg.style.color = 'green';
      msg.textContent = 'Thanks — your message has been recorded (front-end demo).';
      form.reset();
      setTimeout(() => msg.textContent = '', 4500);
    });
  }
});
