const debug = false;
const currentlyPlaying = [];

let observer = new IntersectionObserver(function(entries, observer) {
  for (let entry of entries) {
    const vid = entry.target
    if (entry.isIntersecting) {
      if (debug) { currentlyPlaying.push(entry.target); }
      vid.play();
    } else if (!vid.paused) {
      if (debug) {
        let idx = currentlyPlaying.indexOf(entry.target);
        if (idx !== -1) {
          currentlyPlaying.splice(idx, 1);
        }
      }
      vid.pause();
    }
  }
  if (debug) {
    console.log(`${currentlyPlaying.length} videos are playing`);
  }
})

window.addEventListener('load', () => {
  document.querySelectorAll("video").forEach(vid => {
    let preload = vid.getAttribute("preload");
    if (preload !== "auto") {
      observer.observe(vid);
    }
  })
})
