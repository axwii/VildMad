const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

const apiURL = `https://yldteeisdkdzafmhovam.supabase.co/rest/v1/VildMad?id=eq.${id}`;

fetch(apiURL, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZHRlZWlzZGtkemFmbWhvdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTMxMjcsImV4cCI6MjAyMzI2OTEyN30.rBkt48sM5FB_fV7xA2C5pUvXa-zxsEctFs4lbSFcMiI",
  },
})
  .then((res) => res.json())
  .then((json) => showPlant(json));

function showPlant(plantArray) {
  if (plantArray.length > 0) {
    const plant = plantArray[0];
    console.log(plant);
    document.querySelector(".plant_name").textContent = plant.title;
    console.log("Plant title: " + plant.title);
    document.querySelector(".plant_image").src = plant.profile_image_src;

    // Where to find plant
    if (Array.isArray(plant.where_to_find_plant)) {
      const findPlantList = document.querySelector(".plant_where_to_find");
      plant.where_to_find_plant.forEach((location) => {
        const li = document.createElement("li");
        li.textContent = location;
        findPlantList.appendChild(li);
      });
    } else {
      console.error("Invalid or missing where_to_find_plant data");
    }

    // How to spot plant
    if (Array.isArray(plant.how_to_spot_plant)) {
      const spotPlantList = document.querySelector(".plant_how_to_spot");
      plant.how_to_spot_plant.forEach((spot) => {
        const li = document.createElement("li");
        li.textContent = spot;
        spotPlantList.appendChild(li);
      });
    } else {
      console.error("Invalid or missing how_to_spot_plant data");
    }

    // How to pick plant
    if (Array.isArray(plant.how_to_pick_plant)) {
      const pickPlantList = document.querySelector(".plant_how_to_pick");
      plant.how_to_pick_plant.forEach((pick) => {
        const li = document.createElement("li");
        li.textContent = pick;
        pickPlantList.appendChild(li);
      });
    } else {
      console.error("Invalid or missing how_to_pick_plant data");
    }

    // Fun fact
    if (Array.isArray(plant.fun_fact)) {
      const funFactList = document.querySelector(".plant_fun_fact");
      plant.fun_fact.forEach((fact) => {
        const li = document.createElement("li");
        li.textContent = fact;
        funFactList.appendChild(li);
      });
    }
  } else {
    console.error("No plant data found");
  }
}
