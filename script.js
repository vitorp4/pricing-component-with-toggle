const toggle = document.querySelector('#plan-toggle');
const monthly = document.querySelectorAll('.price span.monthly');
const annually = document.querySelectorAll('.price span.annually');

toggle.addEventListener('change', (event) => {
  if (event.target.checked) {
    monthly.forEach((el) => el.style.display = 'none');
    annually.forEach((el) => el.style.display = 'inline');
  } else {
    monthly.forEach((el) => el.style.display = 'inline');
    annually.forEach((el) => el.style.display = 'none');
  }
});