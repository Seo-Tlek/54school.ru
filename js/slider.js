(function () {
  var root = document.querySelector("[data-slider]");
  if (!root) return;
  var track = root.querySelector(".slider__track");
  var slides = Array.prototype.slice.call(root.querySelectorAll(".slider__slide"));
  var prev = root.querySelector("[data-prev]");
  var next = root.querySelector("[data-next]");
  var index = 0;
  var startX = 0;

  function perView() {
    return window.innerWidth > 800 ? 2 : 1;
  }

  function go(nextIndex) {
    var max = Math.max(0, slides.length - perView());
    index = Math.max(0, Math.min(nextIndex, max));
    var width = slides[0].getBoundingClientRect().width + 16;
    track.style.transform = "translateX(" + (-index * width) + "px)";
  }

  prev.addEventListener("click", function () { go(index - 1); });
  next.addEventListener("click", function () { go(index + 1); });
  window.addEventListener("resize", function () { go(index); });

  root.addEventListener("touchstart", function (event) {
    startX = event.changedTouches[0].clientX;
  }, { passive: true });
  root.addEventListener("touchend", function (event) {
    var delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? index + 1 : index - 1);
  });
})();
