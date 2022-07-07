let hamburger = document.querySelector(".hamburger");
let crossIcon = document.querySelector(".hamburger .crossIcon");
let closeIcon = document.querySelector(".hamburger .closeIcon");
let mobileNavList = document.querySelector(".navList");
let bool = false;

hamburger.addEventListener("click", function () {
  mobileNavList.classList.toggle("active");

  if (!bool) {
    crossIcon.classList.add("cross");
    closeIcon.classList.add("close");

    bool = true;
  } else {
    crossIcon.classList.remove("cross");
    closeIcon.classList.remove("close");
    bool = false;
  }
});
