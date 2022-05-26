// Scroll to element
function scroll_aboutme() {
  const element = document.getElementById("about-me");
  element.scrollIntoView({ behavior: "smooth" });
}
function scroll_skill() {
  const element = document.getElementById("skill");
  element.scrollIntoView({ behavior: "smooth" });
}
function scroll_work() {
  const element = document.getElementById("work");
  element.scrollIntoView({ behavior: "smooth" });
}
function scroll_education() {
  const element = document.getElementById("education");
  element.scrollIntoView({ behavior: "smooth" });
}
function scroll_portfolio() {
  const element = document.getElementById("portfolio");
  element.scrollIntoView({ behavior: "smooth" });
}

function top_page() {
  const element = document.getElementById("top-page");
  element.scrollIntoView({ behavior: "smooth" });
}

// Make mobile navigation work
const btn_navEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btn_navEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  console.log(btn_navEl);
});

// Sticky navigation
const heroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(heroSection);
