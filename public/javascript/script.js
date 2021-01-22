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
