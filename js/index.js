const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  contain: true,
});

const btnInput = document.getElementById("btn-input");
const arrowBack = document.getElementById("arrow-left");

btnInput.addEventListener("click", (e) => {
  console.log("clicked!");
});

arrowBack.addEventListener("click", (e) => {
  console.log("clicked!");
});

//OPEN SIDE NAVBAR
const openFunction = (e) => {
  document.getElementById("side-nav").style.width = "75%";
  document.body.style.background = "rgba(47, 47, 47, 0.19)";
  document.getElementById("header--container").style.background =
    "rgba(47, 47, 47, 0.12)";
  document.getElementById("header--container").style.position = "inherit";
  document.getElementById("side-dashboard").style.position = "fixed";
};

//CLOSE SIDE NAVBAR
const closeFunction = (e) => {
  document.getElementById("side-nav").style.width = "0%";
  document.body.style.background = "#FFFFFF";
  document.getElementById("header--container").style.background = "#FFFFFF";
  document.getElementById("side-dashboard").style.position = "inherit";
  document.getElementById("header--container").style.position = "fixed";
};

//aBOUT BOOK FOR MOBILE ONLY
const dotsBtn = document.getElementById("three-dots-btn");
const aboutBook = document.getElementById("about-book");

//OPEN ABOUT BOOK FOR MOBILE ONLY
dotsBtn.addEventListener("click", (e) => {
  document.getElementById("three-dots-btn").style.display = "none";
  document.getElementById("about-book").style.display = "block";
});

//CLOSE ABOUT BOOK FOR MOBILE ONLY
aboutBook.addEventListener("click", (e) => {
  document.getElementById("about-book").style.display = "none";
  document.getElementById("three-dots-btn").style.display = "block";
});

//SEARCH BUTTON FOR MOBILE ONLY
const search = document.getElementById("btn-input");
const back = document.getElementById("arrow-back");

//OPEN SEARCH DROPDOWN FOR MOBILE ONLY
search.addEventListener("click", () => {
  document.getElementById("search--container").style.display = "flex";
  document.getElementById("navbar--container").style.display = "none";
});

//CLOSE SEARCH DROPDOWN FOR MOBILE ONLY
back.addEventListener("click", () => {
  document.getElementById("search--container").style.display = "none";
  document.getElementById("navbar--container").style.display = "flex";

  //CLOSE BOOK DROPDOWN FOR MOBILE ONLY
  document.getElementById("search--dropdown").style.display = "none";
});

const inputSearch = document.getElementById("input");

inputSearch.addEventListener("focus", () => {
  document.getElementById("search--dropdown").style.display = "block";
  inputSearch.value = "four steps to the epiph";
});
inputSearch.addEventListener("blur", () => {
  inputSearch.value = "";
});
