const scroll = document.querySelectorAll(".scroll__icon");
//Path
const header = document.querySelector(".header");
const first = document.querySelector(".first");
const onebag = document.querySelector(".onebag");
const grains = document.querySelector(".grains");
const manual = document.querySelector(".manual");
const offer = document.querySelector(".offer");

scroll[0].addEventListener("click", (e) => {
  window.scrollTo({
    top: getCoords(onebag).top,
    left: 0,
    behavior: "smooth",
  });
});

scroll[1].addEventListener("click", (e) => {
  window.scrollTo({
    top: getCoords(grains).top,
    left: 0,
    behavior: "smooth",
  });
});

scroll[2].addEventListener("click", (e) => {
  window.scrollTo({
    top: getCoords(manual).top,
    left: 0,
    behavior: "smooth",
  });
});
scroll[3].addEventListener("click", (e) => {
  window.scrollTo({
    top: getCoords(offer).top,
    left: 0,
    behavior: "smooth",
    });
  });

function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
