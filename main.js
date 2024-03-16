document.getElementById('fullscreen-toggle').addEventListener('click', function() {
  let elem = document.getElementById('main');
  
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
});


function fadeLinesOnScroll() {
  var introTop = document.getElementById('introvideopositioner').getBoundingClientRect().top;
  var faders = document.querySelectorAll('p.introline');
  var luz = document.getElementById('luz');
  var wh = window.innerHeight;
  var offsetPoint = wh / 2; // Adjust as needed
  var centerpoint = offsetPoint;

  // Fade logic for intro lines
  if (window.scrollY > introTop) {
    document.getElementById('introvideopositioner').classList.remove('hiding');

    faders.forEach(function(fader) {
      var offset = fader.getBoundingClientRect().top;
      if (offset < wh && offset > 0) {
        var diff = Math.abs(offsetPoint - offset);
        var opac = 1 - (diff / centerpoint);
        fader.style.opacity = opac.toString();
      }
    });
  }
  // } else {
  //   document.getElementById('introvideopositioner').classList.add('hiding');
  // }

  // Fade out 'luz' as the user scrolls down
  var fadeStart = 100; // Start fade at 100px scroll, adjust as needed
  var fadeUntil = 1600; // Completely faded when scrolled this many pixels, adjust as needed
  var fadeRange = fadeUntil - fadeStart;
  var scrollY = window.scrollY;
  
  // if (scrollY > fadeStart) {
  //   var opacity = 1 - ((scrollY - fadeStart) / fadeRange);
  //   opacity = opacity < 0 ? 0 : opacity; // Ensure opacity is not negative
  //   luz.style.opacity = opacity.toString();
  // } else {
  //   luz.style.opacity = '1'; // Full opacity when above fadeStart
  // }

  // Down arrow fade logic
  if (window.scrollY > 10) {
    document.getElementById('downarrow').classList.add('hiding');
  } else {
    document.getElementById('downarrow').classList.remove('hiding');
  }
}

function adjustVideoPlayback() {
  var video = document.querySelector('video');
  var videoLength = video.duration; // Get the total length of the video
  var scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
  var scrollProgress = window.scrollY / scrollHeight; // Current scroll position as a fraction of total scrollable height
  // console.log(scrollProgress)
  // console.log(videoLength)
  var newTime = videoLength * scrollProgress; // Calculate the new time position of the video based on scroll progress
  // console.log(newTime)
  video.currentTime = newTime; // Set the video to the new time position
}

function adjustVideoPlaybackOptimized() {
  requestAnimationFrame(adjustVideoPlaybackThrottled); // Call adjustVideoPlayback inside requestAnimationFrame
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const adjustVideoPlaybackThrottled = throttle(adjustVideoPlayback, 500); // Adjust the 100ms to your needs

function desktopIntro(){
  console.log('desktopIntro()');
  window.addEventListener('scroll', function() {
    fadeLinesOnScroll();
    adjustVideoPlaybackOptimized(); // Use the throttled version
    checkScrollBottomAndChangeBackground();
  }, false);
}

function checkScrollBottomAndChangeBackground() {
  const scrollPosition = window.pageYOffset;
  const windowInnerHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;
  var lang_switcher = document.getElementById("lang_switcher")

  // Check if the user has scrolled to the bottom of the page
  if (scrollPosition + windowInnerHeight >= bodyHeight) {
    // Change the background color when scrolled to the bottom
    document.body.style.background = '#d7bf9d';
    lang_switcher.style.color = 'black'
  } else {
    // Revert the background color when not scrolled to the bottom
    document.body.style.background = ''; // Or set to any default color if needed
    lang_switcher.style.color = ''
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  checkScrollBottomAndChangeBackground();
  // adjustVideoPlaybackThrottled()
  var video = document.querySelector('video');
  video.addEventListener('loadeddata', function() {
    console.log("video canplay")
    adjustVideoPlaybackThrottled()
    // adjustVideoPlaybackOptimized()
    // desktopIntro(); // Call desktopIntro only after the video can play
  });

  // Get the modal
  var modal = document.getElementById("trailerModal");

  // Get the button that opens the modal
  var btn = document.getElementById("watchTrailerBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  desktopIntro();
});

// desktopIntro();