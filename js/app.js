class UI {
  hidePreLoader() {
    document.querySelector(".preloader").style.display = "none";
  }
  showNav() {
    document.querySelector(".nav").classList.toggle("nav--show");
  }
  darkMode() {
    let btn = document.querySelector(".darkmode_switch_btn");
    document.querySelector("body").classList.toggle("dark-mode_body");
    document.querySelector(".nav_btn").classList.toggle("dark-mode_nav_btn");
    document.querySelector(".nav").classList.toggle("dark-mode_nav");
    for (let i = 1; i < 6; i++) {
      document
        .querySelector(".li-" + i)
        .classList.toggle("dark-mode_single_link");
    }
    if (!btn.classList.contains("btn_slide")) {
      btn.classList.add("btn_slide");
      // darkmode on
    } else {
      btn.classList.remove("btn_slide");
      // darkmode off
    }
  }
}

eventListeners();
function eventListeners() {
  const ui = new UI();

  window.addEventListener("load", () => ui.hidePreLoader());
  document
    .querySelector(".nav_btn")
    .addEventListener("click", () => ui.showNav());
  document
    .querySelector(".darkmode_switch")
    .addEventListener("click", () => ui.darkMode());
}
