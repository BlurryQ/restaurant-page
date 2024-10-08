import style from "./style.css";
import Logo from "./logo.png";
import removeContent from "./functions/remove-content";
import renderAboutPage from "./pages/about";
import renderContactPage from "./pages/contact";
import renderHomePage from "./pages/home";
import renderMenuPage from "./pages/menu";

function renderNavAndLogo() {
  const LOGO = document.getElementById("logo");
  const logo = new Image();
  logo.src = Logo;

  let windowWidth = window.innerWidth;
  if (windowWidth > 1080) {
    logo.style.cssText = `width: 16rem;`;
  } else if (windowWidth > 768 && windowWidth < 1080) {
    logo.style.cssText = `width: 12rem;`;
  } else {
    logo.style.cssText = `width: 8rem;`;
  }
  logo.setAttribute("id", "logo");
  LOGO.appendChild(logo);
}

renderNavAndLogo();
renderHomePage();

document.getElementById("logo").addEventListener("click", () => {
  removeContent();
  renderHomePage();
});

document.getElementById("menu").addEventListener("click", () => {
  removeContent();
  renderMenuPage();
});

document.getElementById("about").addEventListener("click", () => {
  removeContent();
  renderAboutPage();
});

document.getElementById("contact").addEventListener("click", () => {
  removeContent();
  renderContactPage();
});
