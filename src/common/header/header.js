const mobileNav = document.querySelector(".header__mobile-navigation");
const mobileMenu = document.querySelector(".mobile-menu");

mobileNav.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.computedStyleMap.height = "0";
    mobileMenu.classList.remove("open");
    setTimeout(() => {
      mobileMenu.style.height = "";
    }, 0);
  } else {
    mobileMenu.style.height = "0";
    mobileMenu.classList.add("open");

    const fullHeight = mobileMenu.scrollHeight + "px";
    mobileMenu.style.height = fullHeight;
  }
});
