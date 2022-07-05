const navControlBtn = document.getElementById("nav-control");
const navMenu = document.getElementById("nav-menu");

const toggleMenu = () => {
  const visibility = navMenu.getAttribute("data-visible");
  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    navControlBtn.setAttribute("data-toggle", true);
  } else {
    navMenu.setAttribute("data-visible", false);
    navControlBtn.setAttribute("data-toggle", false);
  }
};

navControlBtn.addEventListener("click", toggleMenu);
