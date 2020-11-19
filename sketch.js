var api = "https://api.giphy.com/v1/gifs/search?" // path to access data
var apiKey = "&api_key=STIIwOZ3IsnkOC3VzyaVRRoDV7CaDKOG"; //key to allow access
var query = "&q=coding"; //text for search
var url = api + apiKey + query; //combines elements into a single URL

function setup() {
  noCanvas();
  loadJSON(url, gotData); //loads url and then displays them on screen
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) createImg(giphy.data[i].images.original.url,alt=query);
    //array to display multiple gifs under the search query
}

function draw() {
  background(255); // a plain white background :)
}
