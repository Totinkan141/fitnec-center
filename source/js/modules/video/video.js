
function initVideo() {
  const parent = document.querySelector('[data-video="parent"]');
  const video = parent.querySelector('[data-video="element"]');
  const btnPlay = parent.querySelector('[data-video="button-play"');
  const poster = parent.querySelector('[data-video="poster"]');

  if (parent && video && btnPlay && poster) {
    btnPlay.addEventListener('click', () => {
      parent.classList.add('is-active');
      video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
      video.style.display = 'block';
    });
  }
}

export {initVideo};
