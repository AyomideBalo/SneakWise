// const rumouredReleasesSearchInput = document.getElementById('rumoured-releases-search-input');
// const rumouredReleasesSearchButton = document.getElementById('rumoured-releases-search-button');
// const rumouredReleasesContainer = document.querySelector('.scroll:first-child');

// const recentlyReleasedSearchInput = document.getElementById('recently-released-search-input');
// const recentlyReleasedSearchButton = document.getElementById('recently-released-search-button');
// const recentlyReleasedContainer = document.querySelector('.scroll:nth-child(2)');

// const upcomingReleasesSearchInput = document.getElementById('upcoming-releases-search-input');
// const upcomingReleasesSearchButton = document.getElementById('upcoming-releases-search-button');
// const upcomingReleasesContainer = document.querySelector('.scroll:nth-child(3)');

// rumouredReleasesSearchButton.addEventListener('click', function() {
//   const query = rumouredReleasesSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(rumouredReleasesContainer, query);
//   }
// });

// recentlyReleasedSearchButton.addEventListener('click', function() {
//   const query = recentlyReleasedSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(recentlyReleasedContainer, query);
//   }
// });

// upcomingReleasesSearchButton.addEventListener('click', function() {
//   const query = upcomingReleasesSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(upcomingReleasesContainer, query);
//   }
// });

// rumouredReleasesSearchInput.addEventListener('input', function() {
//   const query = rumouredReleasesSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(rumouredReleasesContainer, query);
//   } else {
//     resetHighlights(rumouredReleasesContainer);
//   }
// });

// recentlyReleasedSearchInput.addEventListener('input', function() {
//   const query = recentlyReleasedSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(recentlyReleasedContainer, query);
//   } else {
//     resetHighlights(recentlyReleasedContainer);
//   }
// });

// upcomingReleasesSearchInput.addEventListener('input', function() {
//   const query = upcomingReleasesSearchInput.value.toLowerCase();
//   if (query.trim() !== '') {
//     highlightSearchResults(upcomingReleasesContainer, query);
//   } else {
//     resetHighlights(upcomingReleasesContainer);
//   }
// });

// function highlightSearchResults(container, query) {
//   const oneSneakers = container.querySelectorAll('.one-sneaker');

//   oneSneakers.forEach(oneSneaker => {
//     const sneakerName = oneSneaker.querySelector('.sneakerFacts').textContent.toLowerCase();
//     if (sneakerName.includes(query)) {
//       oneSneaker.style.backgroundColor = 'yellow';
//     } else {
//       oneSneaker.style.backgroundColor = '';
//     }
//   });
// }

// function resetHighlights(container) {
//   const oneSneakers = container.querySelectorAll('.one-sneaker');
//   oneSneakers.forEach(oneSneaker => {
//     oneSneaker.style.backgroundColor = '';
//   });
// }


//Clicking designated jordan 1 shoe container in 'rumoured releases' section takes you to the rumoured releases html page.
document.addEventListener('DOMContentLoaded', function () {
  const sneakerContainer = document.getElementById('orange-jordan-1s');
  if (sneakerContainer) {
      sneakerContainer.addEventListener('click', function () {
          window.location.href = 'rumouredReleases.html';
      });
  }
});

//Top scroller message that displays new and upcoming exciting sneaker news, clicking on it redirects you to its relevent page.
const tickerWrapper = document.querySelector('.ticker-wrapper');
const pauseBtn = document.querySelector('.pause-btn');

let isAnimationPaused = false;

pauseBtn.addEventListener('click', () => {
  isAnimationPaused = !isAnimationPaused;
  tickerWrapper.style.animationPlayState = isAnimationPaused ? 'paused' : 'running';
  pauseBtn.textContent = isAnimationPaused ? 'Resume' : 'Pause';
});

//Redirection function for the top scroller
tickerWrapper.addEventListener('click', () => {
  if (!isAnimationPaused) {
    window.location.href = 'rumouredReleases.html';
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); 
          const href = this.getAttribute('href');
          document.body.classList.add('fade-out'); 
          setTimeout(() => {
              window.location.href = href; 
          }, 500); // Wait for 0.5s (same as the transition duration)
      });
  });
});