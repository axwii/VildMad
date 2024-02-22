const parameter = new URLSearchParams(window.location.search);
const season = parameter.get("season");

document.querySelector(".list_title_season").textContent = season;

const dropbtns = document.querySelectorAll(".dropbtn, .dropbtn");

dropbtns.forEach(dropbtn => {
  if (season === "Spring") {
    dropbtn.style.backgroundColor = "#7cbb57b7";
  } else if (season === "Summer") {
    dropbtn.style.backgroundColor = "#dab55db7";
  } else if (season === "Autumn") {
    dropbtn.style.backgroundColor = "#d74918b8";
  } else if (season === "Winter") {
    dropbtn.style.backgroundColor = "#599FB0b7";
  }
});

// Eventlistener for når DOM-indholdet er indlæst, der udløser 'init'-funktionen
window.addEventListener("DOMContentLoaded", init);
// Deklaration af globale variabler for plante-skabelon og plante-container
let plantTemplate, plantContainer;

// Initialiseringsfunktion kaldet når DOM-indholdet er indlæst
function init() {
  // Vælg HTML-elementet med klassen "plant_template" og gem det i 'plantTemplate'
  plantTemplate = document.querySelector(".plant_template");
  console.log("plant_template", plantTemplate);

  // Vælg HTML-elementet med klassen "mushroom_grid" og gem det i 'plantContainer'
  plantContainer = document.querySelector(".mushroom_grid");
  console.log("mushroom_grid", plantContainer);

  // Hent data fra et REST API-endepunkt ved hjælp af Supabase
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZHRlZWlzZGtkemFmbWhvdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTMxMjcsImV4cCI6MjAyMzI2OTEyN30.rBkt48sM5FB_fV7xA2C5pUvXa-zxsEctFs4lbSFcMiI";
  const url = `https://yldteeisdkdzafmhovam.supabase.co/rest/v1/VildMad?apikey=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const springData = data.filter((item) => item.season.includes(season));
      showProducts(springData);
      console.log(springData);
    })
    .catch((error) => console.error('Error fetching data:', error));
}

// Funktion til at vise produkter på hjemmesiden
function showProducts(plantJSON) {
  let plantClone;

  // Itererer gennem hver planteobjekt i JSON-dataen
  plantJSON.forEach((plant) => {
    // Kloner plante-skabelonen for at oprette en ny planteindgang
    plantClone = plantTemplate.cloneNode(true).content;
    // Indstiller plantens navn i den klonede skabelon
    plantClone.querySelector(".plant_name").textContent = plant.title;
    // Indstiller plantens billede i den klonede skabelon
    plantClone.querySelector(".plant_image").src = plant.profile_image_src;
    // Indstiller hyperlinket i den klonede skabelon for at linke til en specifik planteside
    plantClone.querySelector("a").href = "plant.html?id=" + plant.id;
    // Tilføjer den klonede planteindgang til plante-containeren
    plantContainer.appendChild(plantClone);
  });
}
