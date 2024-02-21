// Opretter et URLSearchParams-objekt baseret på de aktuelle URL-parametre
const parameter = new URLSearchParams(window.location.search);

// Henter værdien af parameteren "id" fra URL'en
const id = parameter.get("id");

// Sætter URL'en til API-kaldet baseret på den modtagne "id"
const apiURL = `https://yldteeisdkdzafmhovam.supabase.co/rest/v1/VildMad?id=eq.${id}`;

// Foretager et GET API-kald med den specificerede URL og nødvendige headers
fetch(apiURL, {
  method: "GET",
  headers: {
    // Tilføjer API-nøgle til godkendelse
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZHRlZWlzZGtkemFmbWhvdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTMxMjcsImV4cCI6MjAyMzI2OTEyN30.rBkt48sM5FB_fV7xA2C5pUvXa-zxsEctFs4lbSFcMiI",
  },
})
  .then((res) => res.json())
  .then((json) => showPlant(json));

// Funktion til at vise plantedata på siden
function showPlant(plantArray) {
  // Tjekker om der er data i plantearrayet
  if (plantArray.length > 0) {
    // Henter den første plante fra arrayet
    const plant = plantArray[0];
    console.log(plant);

    // Opdaterer elementer på siden med plantens data
    document.querySelector(".plant_name").textContent = plant.title;
    console.log("Plant title: " + plant.title);
    document.querySelector(".plant_image").src = plant.profile_image_src;

    // Håndterer "where_to_find_plant" data
    // Tjekker om "where_to_find_plant" i plant-objektet er en array
    if (Array.isArray(plant.where_to_find_plant)) {
      // Henter referencen til det HTML-element med klassen "plant_where_to_find"
      const findPlantList = document.querySelector(".plant_where_to_find");
      // Itererer gennem hvert element i "where_to_find_plant"-arrayet
      plant.where_to_find_plant.forEach((location) => {
        // Opretter et nyt listeelement (li) for hver placering
        const li = document.createElement("li");
        // Indstiller tekstindholdet af listeelementet til den aktuelle placering
        li.textContent = location;
        // Tilføjer det nye listeelement til listen på HTML-siden
        findPlantList.appendChild(li);
      });
    } else {
      // Hvis "where_to_find_plant" ikke er en array, udskrives en fejlmeddelelse til konsollen
      console.error("Ugyldige eller manglende where_to_find_plant-data");
    }

    // Håndterer "how_to_spot_plant" data
    if (Array.isArray(plant.how_to_spot_plant)) {
      const spotPlantList = document.querySelector(".plant_how_to_spot");
      plant.how_to_spot_plant.forEach((spot) => {
        const li = document.createElement("li");
        li.textContent = spot;
        spotPlantList.appendChild(li);
      });
    } else {
      console.error("Ugyldige eller manglende how_to_spot_plant-data");
    }

    // Håndterer "how_to_pick_plant" data
    if (Array.isArray(plant.how_to_pick_plant)) {
      const pickPlantList = document.querySelector(".plant_how_to_pick");
      plant.how_to_pick_plant.forEach((pick) => {
        const li = document.createElement("li");
        li.textContent = pick;
        pickPlantList.appendChild(li);
      });
    } else {
      console.error("Ugyldige eller manglende how_to_pick_plant-data");
    }

    // Håndterer "fun_fact" data
    if (Array.isArray(plant.fun_fact)) {
      const funFactList = document.querySelector(".plant_fun_fact");
      plant.fun_fact.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact;
        funFactList.appendChild(li);
      });
    }
  } else {
    console.error("Ingen plantedata fundet");
  }
}

// Funktion til at gå tilbage i browserhistorikken
function goBack() {
  window.history.back();
}
