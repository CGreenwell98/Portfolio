const aboutMeSection = document.querySelector("#about-me");
const projectSection = document.querySelector("#project-container");
const arrowButton = document.querySelector(".arrow");
const projectNavbarButton = document.querySelector(".project-btn");

const smoothScroll = function (btn, section) {
  btn.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
};

smoothScroll(arrowButton, aboutMeSection);
smoothScroll(projectNavbarButton, projectSection);

// Tabbed component:

const tabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tab-container");
const tabsContent = document.querySelectorAll(".content");

tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".tab");

  // Guard clause:
  if (!clicked) return;

  // Active tab:
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
  clicked.classList.add("tab-active");

  // content area:
  tabsContent.forEach((content) => content.classList.add("content-hidden"));
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.remove("content-hidden");
});

// ///////////////////////////////////////////////////////////////////////////////////////
//  Slider:

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const sliderTabContainer = document.querySelector(".slider-container");

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // Functions:

  const activateTab = function (slide) {
    document
      .querySelectorAll(".slider-tab")
      .forEach((tab) => tab.classList.remove("slider-tab-active"));

    document
      .querySelector(`.slider-tab[data-slide="${slide}"]`)
      .classList.add("slider-tab-active");
  };

  const goToSlide = function (targetSlide) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translatey(${(i - targetSlide) * 105}%)`)
    );
  };

  const init = function () {
    goToSlide(0);
    activateTab(0);
  };
  init();

  // Next SLide:

  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateTab(curSlide);
  };

  // prev slide:

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;

    goToSlide(curSlide);
    activateTab(curSlide);
  };

  // Key press:

  //   document.addEventListener("keydown", function (event) {
  //     if (event.key === "ArrowUp") prevSlide();
  //     if (event.key === "ArrowDown") nextSlide();
  //   });

  // tab press:

  sliderTabContainer.addEventListener("click", function (event) {
    const clicked = event.target.closest(".slider-tab");
    if (!clicked) return;

    const { slide } = clicked.dataset;
    goToSlide(slide);
    activateTab(slide);
  });
};
slider();
