
// Banar final section start new 
document.addEventListener("DOMContentLoaded", () => {

  const curtain = document.querySelector(".single-curtain");
  if (!curtain) return;

  function runCurtain() {

    curtain.style.transition = "none";
    curtain.style.left = "-100%";
    curtain.offsetHeight;

    curtain.style.transition = "left 4.5s ease-in-out";
    curtain.style.left = "0%";

    setTimeout(() => {
      curtain.style.left = "100%";
    }, 5600);

    setTimeout(() => {
      curtain.style.transition = "none";
      curtain.style.left = "-100%";
    }, 10500);
  }

  runCurtain();
  setInterval(runCurtain, 12000);

});

// banar new section End 








// banner section start

document.addEventListener("DOMContentLoaded", () => {

  const banner = document.getElementById("banner");
  const curtain = document.querySelector(".curtain");

  if (!banner || !curtain) return;

  /* ==========================
     GET IMAGES FROM HTML
  ========================== */
  const imagesAttr = banner.dataset.images;
  if (!imagesAttr) return;

  const images = imagesAttr
    .split(",")
    .map(img => img.trim())
    .filter(Boolean);

  if (images.length === 0) return;

  let current = 0;
  banner.style.backgroundImage = `url("${images[current]}")`;

  function runCurtain() {
    const next = (current + 1) % images.length;

    // Reset curtain
    curtain.style.transition = "none";
    curtain.style.left = "-100%";
    curtain.offsetHeight; // force repaint

    // Curtain covers
    curtain.style.transition = "left 4.5s ease-in-out";
    curtain.style.left = "0%";

    // Change image
    setTimeout(() => {
      banner.style.backgroundImage = `url("${images[next]}")`;
    }, 4800);

    // Curtain exits
    setTimeout(() => {
      curtain.style.left = "100%";
    }, 5600);

    // Reset
    setTimeout(() => {
      curtain.style.transition = "none";
      curtain.style.left = "-100%";
      current = next;
    }, 10500);
  }

  // Init
  runCurtain();
  setInterval(runCurtain, 12000);

});

// banner section end








// product section start

document.addEventListener('DOMContentLoaded', () => {

  const bigBox = document.querySelector('.fs-large-box');
  if (!bigBox) return;

  const mainImg = document.querySelector('.fs-main-image');
  const titleEl = document.querySelector('.fs-overlay-title');
  const textEl  = document.querySelector('.fs-overlay-text');
  const sliderInner = document.querySelector('.fs-small-slider-inner');
  const boxes = Array.from(document.querySelectorAll('.fs-small-box'));

  if (!mainImg || !sliderInner || boxes.length === 0) return;

  /* ===============================
     DATA SETUP
  =============================== */
  const products = boxes.map(box => ({
    img: box.querySelector('img')?.src || '',
    title: box.dataset.title || '',
    desc: box.dataset.desc || ''
  }));

  const originalCount = products.length / 2; // duplicated items
  let index = 0;
  let timer = null;

  const boxWidth = boxes[0].offsetWidth + 20;
  const INTERVAL = 3000;
  const TRANSITION_TIME = 600;

  /* ===============================
     UPDATE MAIN IMAGE + TEXT
  =============================== */
  function updateMain(i) {
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(1.05)';

    setTimeout(() => {
      mainImg.src = products[i].img;
      titleEl.textContent = products[i].title;
      textEl.innerHTML = products[i].desc.replace(/\s*\|\s*/g, '<br>');

      requestAnimationFrame(() => {
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      });
    }, 250);
  }

  /* ===============================
     SLIDE FUNCTION (SEAMLESS)
  =============================== */
  function slide() {
    index++;

    sliderInner.style.transition =
      `transform ${TRANSITION_TIME}ms ease`;
    sliderInner.style.transform =
      `translateX(-${index * boxWidth}px)`;

    updateMain(index % originalCount);

    if (index === originalCount) {
      setTimeout(() => {
        sliderInner.style.transition = 'none';
        index = 0;
        sliderInner.style.transform = 'translateX(0)';
      }, TRANSITION_TIME + 50);
    }
  }

  /* ===============================
     AUTOPLAY CONTROLS
  =============================== */
  function startSlider() {
    if (timer) return;
    timer = setInterval(slide, INTERVAL);
  }

  function stopSlider() {
    clearInterval(timer);
    timer = null;
  }

  /* ===============================
     HOVER → PAUSE ONLY
  =============================== */
  bigBox.addEventListener('mouseenter', stopSlider);
  bigBox.addEventListener('mouseleave', startSlider);

  /* ===============================
     INIT
  =============================== */
  updateMain(0);
  startSlider();

});


 // product section end



 // static image section start

 document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".page-hero").forEach(hero => {
    const bg = hero.dataset.bg;
    if (!bg) return;

    const img = new Image();
    img.src = bg;

    img.onload = () => {
      hero.style.backgroundImage = `url("${bg}")`;
    };
  });

});

// static images section end



// About page start



