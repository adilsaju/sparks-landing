document.querySelector('.scroll-button').addEventListener('click', function() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.scrollBy({ left: 200, behavior: 'smooth' });
  });
  