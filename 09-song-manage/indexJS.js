const d = document;
function ola(song, btnPlay, btnStop) {
  let cancion;
  const $audio = d.createElement("audio");
  $audio.src = song;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      cancion = setTimeout(() => {
        $audio.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(cancion);
      $audio.pause();
      $audio.currentTime = 0;
    }
    d.querySelector(btnPlay).disabled = false;
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  ola("/assets/Ed Maverick-Acurrucar.mp3", "#iniciar-a", "#detener-a");
});
