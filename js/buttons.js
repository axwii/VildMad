/* document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
}); */

/* document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      var button = dropdown.querySelector(".dropbtn");

      if (button.contains(event.target)) {
        console.log("Clicked inside button");
        dropdown.classList.toggle("open");
      } else {
        console.log("Clicked outside button");
        dropdown.classList.remove("open");
      }
    });
  });
}); */

//burgemenu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
}
