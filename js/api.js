window.addEventListener("DOMContentLoaded", init);
let plantTemplate, plantContainer;

function init() {
  plantTemplate = document.querySelector(".plant_template");
  console.log("plant_template", plantTemplate);
  plantContainer = document.querySelector(".plant_container");
  console.log("plant_container", plantContainer);
  fetch("https://yldteeisdkdzafmhovam.supabase.co/rest/v1/VildMad", {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZHRlZWlzZGtkemFmbWhvdmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2OTMxMjcsImV4cCI6MjAyMzI2OTEyN30.rBkt48sM5FB_fV7xA2C5pUvXa-zxsEctFs4lbSFcMiI",
    },
  })
  .then((res) => res.json())
      .then((json) => showProducts(json));
      console.log("init done");
}

function showProducts(plantJSON) {
  let plantClone;
  
  plantJSON.forEach((plant) => {
    console.log("plant", plant);
    plantClone = plantTemplate.cloneNode(true).content;
    plantClone.querySelector(".plant_name").textContent = plant.title;
    // plantClone.querySelector(".plant_image").src = plant.profile_image_src;
    console.log("plantTitle", plant.title);
  });
}