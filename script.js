'use strict';
// Local-only controls. No analytics, third-party scripts, or form-data storage.
const windowEl = document.querySelector('.tool-window');
document.querySelectorAll('[data-direction]').forEach(button => {
  button.addEventListener('click', () => windowEl.scrollBy({left: Number(button.dataset.direction) * 285, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));
});
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Project enquiry from ${data.get('name')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  location.href = `mailto:ujjesha.design@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
