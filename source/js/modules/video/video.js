
function initVideo() {
  const parent = document.querySelector('[data-video]');
  const btnPlay = parent.querySelector('[data-video="button"]');
  const poster = parent.querySelector('[data-video="poster"]');

  if (parent && btnPlay && poster) {
    btnPlay.addEventListener('click', () => {
      parent.classList.add('is-active');

      let video = document.createElement('iframe');
      video.setAttribute('allowfullcreen', '');
      video.setAttribute('allow', 'autoplay');
      video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw/?rel=0&showinfo=0&autoplay=1');
      parent.appendChild(video);
    });
  }
}

export {initVideo};
