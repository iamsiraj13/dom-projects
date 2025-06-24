let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.textContent = "Light";
  } else {
    icon.textContent = "Dark";
  }
};

// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.addEventListener("scroll", function () {
  let header = this.document.getElementById("header");
  header.classList.toggle("header", window.scrollY > 0);
});
