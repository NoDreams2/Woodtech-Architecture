const mobileNav = document.querySelector(".header__mobile-navigation");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header__container")

mobileNav.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.style.height = "0";
    mobileMenu.classList.remove("open");
  } else {
    mobileMenu.style.height = "0";
    mobileMenu.classList.add("open");

    requestAnimationFrame(() => {
      const headerHeight = header.offsetHeight;
      const fullHeight = mobileMenu.scrollHeight + "px";
      mobileMenu.style.height = fullHeight;
      mobileMenu.style.top = headerHeight + "px";
    });
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnMobileNav = mobileNav.contains(event.target);
  if (
    !isClickInsideMenu &&
    !isClickOnMobileNav &&
    mobileMenu.classList.contains("open")
  ) {
    mobileMenu.style.height = "0";
    mobileMenu.classList.remove("open");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    headerContainer.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    headerContainer.classList.remove("scrolled");
  }
});
