// JavaScript code for handling dropdown menu
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});


const developerCards = document.querySelectorAll('.developer-card');

developerCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0px 0px 40px rgba(0, 0, 0, 0.2)';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0px)';
    card.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.1)';
  });
});

