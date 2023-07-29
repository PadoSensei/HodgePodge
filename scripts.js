// Hamburger Menu Toggle script

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const vase_pics = [
  "./Art/Vase_Dad.jpeg",
  "./Art/Vase_Kates.jpeg",
  "./Art/Vase_Lu.jpeg",
  "./Art/Vase_Maria.jpeg",
  "./Art/Vase_Mum.jpeg",
  "./Art/Vase_P.png",
  "./Art/Vase_Steve.jpeg",
  "./Art/Vase_Orig.jpeg",
];

const swan_pics = ["swan_Orig.jpeg"];

const coast_pics = [
  "./Art/Coast_Dad.jpeg",
  "./Art/Coast_Kates.jpeg",
  "./Art/Coast_Maria.jpeg",
  "./Art/Coast_Steve.jpeg",
  "./Art/Coast_Orig.jpeg",
  "Art/Coast_P.jpg",
];

const garden_pics = [
  "./Art/Seat_P.jpeg",
  "./Art/Seat_Steve.jpeg",
  "./Art/Seat_Dad.jpeg",
  "./Art/Seat_Kates.jpeg",
  "./Art/Seat_Maria.jpeg",
  "./Art/Seat_Orig.jpeg",
];

const canal_pics = [
  "./Art/Canal_Dad.jpeg",
  "./Art/Canal_Maria.jpeg",
  "./Art/Canal_Steve.jpeg",
];

// Splash intro home page
// Checks url path and executes on /index.html
// Multipe
(function () {
  // Get the current URL path
  let currentPath = window.location.pathname;

  // Define the path you want to match
  let targetPath = "/index.html";
  let deployedPathRoot = "/HodgePodge/";
  let deployedPathRootIndex = "/HodgePodge/index.html";

  if (
    currentPath === targetPath ||
    currentPath === deployedPathRoot ||
    currentPath === deployedPathRootIndex
  ) {
    const splash = document.querySelector(".splash");
    document.addEventListener("DOMContentLoaded", (e) => {
      setTimeout(() => {
        splash.classList.add("display-none");
      }, 2000);
    });
  }
})();

// Gallery grid and opaque selection
const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Art buttons & listeners
// Conduct URL Check to avoid calling function on wrong path
// Two disabled due to lack of pictures

(() => {
  let currentPath = window.location.pathname;

  // Define the path you want to match
  let targetPath = "/gallery.html";
  let deployedPathRoot = "/HodgePodge/gallery.html";
  console.log(currentPath);
  if (currentPath === targetPath || currentPath === deployedPathRoot) {
    const vase_btn = document
      .getElementById("vase_btn")
      .addEventListener("click", vasePics);
    const coast_btn = document
      .getElementById("coast_btn")
      .addEventListener("click", coastPics);
    const garden_btn = document
      .getElementById("garden_btn")
      .addEventListener("click", gardenPics);
    // Set first img opacity
    img[0].style.opacity = opacity;
    imgs.addEventListener("click", imgClick);
  }
})();

// const swan_btn = document
//   .getElementById("swan_btn")
//   .addEventListener("click", swanPics);
// const canal_btn = document
//   .getElementById("canal_btn")
//   .addEventListener("click", canalPics);

// Functions to apply selected gallery to current display
function gardenPics() {
  const currentPic = document.getElementById("current");
  currentPic.src = "./Art/Seat_Orig.jpeg";
  removeGallery();
  garden_pics.forEach((element) => {
    createGalleryImage(element);
  });
}

function vasePics() {
  const currentPic = document.getElementById("current");
  currentPic.src = "./Art/Vase_Orig.jpeg";
  removeGallery();
  vase_pics.forEach((element) => {
    createGalleryImage(element);
  });
}

function coastPics() {
  const currentPic = document.getElementById("current");
  currentPic.src = "./Art/Coast_Orig.jpeg";
  removeGallery();
  coast_pics.forEach((element) => {
    createGalleryImage(element);
  });
}

function createGalleryImage(path) {
  image = document.createElement("img");
  image.src = path;
  image.className = "gallery";
  document.getElementById("gallery_pics").appendChild(image);
}

function canalPics() {
  const currentPic = document.getElementById("current");
  currentPic.src = "./Art/Canal_Orig.jpeg";
  removeGallery();
  //canal_pics.forEach((element) => {
  //createGalleryImage(element);
}

function swanPics() {
  const currentPic = document.getElementById("current");
  currentPic.src = "./Art/Swan_Orig.jpeg";
  removeGallery();
  // run your function on swan_pics
}

function removeGallery() {
  const galleryPics = document.getElementsByClassName("gallery");
  while (galleryPics.length > 0) {
    const element = galleryPics[0];
    element.parentNode.removeChild(element);
    console.log("picture removed.");
  }
}

function imgClick(e) {
  // Reset the opacity
  img.forEach((img) => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}

// Joke JSON and display

async function getMoreJokes() {
  const response = await fetch("./jokes.json");
  const data = await response.json();
  console.log(data);
  const output = random_item(data.jokes);
  console.log(output);

  document.getElementById("joke-display").innerHTML = `${output.joke}`;
}

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// // Random Cocktail - getDrink()

async function getDrink() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  console.log(data);
  const drink = data.drinks[0].strDrink;
  const glass = data.drinks[0].strGlass;
  const instruct = data.drinks[0].strInstructions;
  const image = data.drinks[0].strDrinkThumb;
  const ingredList = [];
  if (data.drinks[0].strIngredient1 != null) {
    ingredList.push(data.drinks[0].strIngredient1);
  }
  if (data.drinks[0].strIngredient2 != null) {
    ingredList.push(data.drinks[0].strIngredient2);
  }
  if (data.drinks[0].strIngredient3 != null) {
    ingredList.push(data.drinks[0].strIngredient3);
  }
  if (data.drinks[0].strIngredient4 != null) {
    ingredList.push(data.drinks[0].strIngredient4);
  }
  if (data.drinks[0].strIngredient5 != null) {
    ingredList.push(data.drinks[0].strIngredient5);
  }
  console.log(ingredList);
  const measureList = [];
  if (data.drinks[0].strMeasure1 != null) {
    measureList.push(data.drinks[0].strMeasure1);
  }
  if (data.drinks[0].strMeasure2 != null) {
    measureList.push(data.drinks[0].strMeasure2);
  }
  if (data.drinks[0].strMeasure3 != null) {
    measureList.push(data.drinks[0].strMeasure3);
  }
  if (data.drinks[0].strMeasure4 != null) {
    measureList.push(data.drinks[0].strMeasure4);
  }
  if (data.drinks[0].strMeasure5 != null) {
    measureList.push(data.drinks[0].strMeasure5);
  }
  console.log(measureList);

  const pic = document.getElementById("cocktail-pic");
  pic.src = image;

  document.getElementById(
    "cocktail-display"
  ).innerHTML = `Try a ${drink}.  It's served in a ${glass}. ${instruct}`;

  for (let x = 0; x < ingredList.length; x++) {
    const ingredients = document.createElement("p");
    ingredients.innerText = measureList[x] + ": " + ingredList[x];
    document.getElementById("cocktail-display").appendChild(ingredients);
  }
}
