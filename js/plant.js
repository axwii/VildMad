const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

const apiURL = `https://yldteeisdkdzafmhovam.supabase.co/rest/v1/VildMad?id=eq.${id}`;

fetch(apiURL, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZHRlZWlzZGtkemFmbWhvdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTMxMjcsImV4cCI6MjAyMzI2OTEyN30.rBkt48sM5FB_fV7xA2C5pUvXa-zxsEctFs4lbSFcMiI",
  },
}).then((res) => res.json())
.then((json) => showPlant(json));

function showPlant(plantArray) {
    if (plantArray.length > 0) {
        const plant = plantArray[0];
        console.log(plant);
        document.querySelector(".plant_name").textContent = plant.title;
        console.log("Plant title: " + plant.title);
        document.querySelector(".plant_image").src = plant.profile_image_src;
        document
    } else {
        console.error("No plant data found");
    }
};
