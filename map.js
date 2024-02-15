import config from "./config.js";
const apiKey = config.apiKey;

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta`;
script.async = true;
document.head.appendChild(script);

const mapElement = document.querySelector('gmp-map[map-id="mapID"]');


const data = [
  [
    "5290",
    "2021-05-25 16:49:30",
    "55.55184173583984",
    "9.80667591094971",
    "339",
    "4",
  ],
  [
    "5282",
    "2021-05-20 14:02:08",
    "55.40375518798828",
    "10.40237045288086",
    "255",
    "4",
  ],
  [
    "5309",
    "2021-06-02 14:51:35",
    "55.65287399291992",
    "12.53263664245605",
    "255",
    "5",
  ],
  // ... (add the rest of the data)
];

for (var i = 0; i < data.length; i++) {
  var values = data[i];
  var latitude = parseFloat(values[2]);
  var longitude = parseFloat(values[3]);
  var locationName = "Location " + values[0];

  // Check if latitude and longitude are valid numbers
  if (!isNaN(latitude) && !isNaN(longitude)) {
    // Create advanced marker
    var advancedMarker = document.createElement("gmp-advanced-marker");
    advancedMarker.setAttribute("position", latitude + "," + longitude);
    advancedMarker.setAttribute("title", locationName);
    console.log(advancedMarker);

    // Add the advanced marker to the map
    mapElement.appendChild(advancedMarker);
  }
}
