var api = "https://api.giphy.com/v1/gifs/search?"
var apiKey = "&api_key=STIIwOZ3IsnkOC3VzyaVRRoDV7CaDKOG";
var query = "&q=heat";
var url = api + apiKey + query;

function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) createImg(giphy.data[i].images.original.url,alt=query);
}

function draw() {
  background(220);
}