var screenOrientation  = orientationscreen.orientation || screen.mozOrientation || screen.msOrientation;

if (screenOrientation  === "portrait-primary" || Math.abs(window.orientation) !== 90) {
  document.querySelector("body").style.display = "none";
}
