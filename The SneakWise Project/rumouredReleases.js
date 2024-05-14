//Functionality for show more and show less button for the information on the shoe releae
const truncateText = document.querySelector('.truncate-text');
const showMoreBtn = document.getElementById('showMoreBtn');

showMoreBtn.addEventListener('click', () => {
    truncateText.classList.toggle('truncate-text');
    showMoreBtn.textContent = truncateText.classList.contains('truncate-text') ? 'Show More' : 'Show Less';
});

//Clicking the logo at the top of the screen takes you to the home page (dashboard.html)
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.form__logo');
    if (logo) {
        logo.addEventListener('click', function () {
            window.location.href = 'dashboard.html';
        });
    }

    const headerLogo = document.querySelector('.headerLogotoHome');
    if (headerLogo) {
        headerLogo.addEventListener('click', function () {
            window.location.href = 'dashboard.html';
        });
    }
});
