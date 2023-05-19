document.querySelector('.scroll-button').addEventListener('click', function() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.scrollBy({ left: 200, behavior: 'smooth' });
  });
  
  const a = document.querySelectorAll('.card-button')

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseover', function (event) {
        event.target.innerHTML = event.target.getAttribute('data-text');
    });
    a[i].addEventListener('mouseout', function (event) {
        event.target.innerHTML = "Register";
    });
}
