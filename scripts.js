// Get DOM targets, add listeners

const issBtn = document.getElementById("iss-btn");
document.getElementById("cocktail-btn").addEventListener("click", getDrink);
document.getElementById("iss-btn").addEventListener("click", getISS);
document.getElementById("joke-btn").addEventListener("click", getMoreJokes);
//document.getElementById("kayne-btn").addEventListener("click", getKanye);

document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("thing-title").innerHTML =
    "Welcome to Podge's Lodge of HodgePodge!";
  document.getElementById("thing-desc").innerHTML =
    "Back at the start. What do you want to do?";
});

// Random Cocktail - getDrink()
const drink_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
async function getDrink() {
  const response = await fetch(drink_url);
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

  document.getElementById("thing-title").innerHTML = "Random Cocktail!";
  const img = document.createElement("img");
  img.src = image;
  document.getElementById("thing-title").appendChild(img);

  document.getElementById(
    "thing-desc"
  ).innerHTML = `Try a ${drink}.  It's served in a ${glass}. ${instruct}`;

  for (let x = 0; x < ingredList.length; x++) {
    const ingredients = document.createElement("p");
    ingredients.innerText = measureList[x] + ": " + ingredList[x];
    document.getElementById("thing-desc").appendChild(ingredients);
  }
}

// Random Joke
const joke_url =
  "https://sv443.net/joeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
async function getJoke() {
  const response = await fetch(joke_url);
  const data = await response.json();
  console.log(data.joke);
  document.getElementById("thing-title").innerHTML = "Random Joke!";
  document.getElementById("thing-desc").innerHTML = `${data.joke}`;
}

const moreJokes_url = "./jokes.json";

async function getMoreJokes() {
  const response = await fetch(moreJokes_url);
  const data = await response.json();
  console.log(data);
  const output = random_item(data.jokes);
  console.log(output);
  document.getElementById("thing-desc").innerHTML = `${output.joke}`;
}

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Random Kayne
const kanye_url = "https://api.kanye.rest";
async function getKanye() {
  const response = await fetch(kanye_url);
  const data = await response.json();
  console.log(data);
  document.getElementById("thing-title").innerHTML =
    "Random Kanye! (I take no responsibility for what he says...)";
  document.getElementById("thing-desc").innerHTML = `${data.quote}`;
}

// Where's the ISS?
const iss_url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
  const response = await fetch(iss_url);
  const data = await response.json();
  const { longitude, latitude } = data;
  console.log(data);
  console.log(longitude);
  console.log(latitude);
  document.getElementById("thing-title").innerHTML =
    "Where's the International Space Station right now?";
  document.getElementById(
    "thing-desc"
  ).innerHTML = `Its longitude is ${longitude} and its latitude is ${latitude}. I'm working on a map to display this.`;
}
