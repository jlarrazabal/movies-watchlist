//Global Variables
const omdbKey = "5d0b46f6";
var movieName = "";


var getMovieDetails = function(movie) {
  let omdbMainUrl = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie;
  fetch(omdbMainUrl).then(function(response) {
    if (!response.ok) {
      $(function() {
        $("#error").dialog();
      });
      console.log(response);
    } else {
      return response.json();
    }
  }).then(function(data) {
      console.log(data);
    }
  });
}


var getMoviePoster = function(movie) {
  let omdbPosterUrl = "http://img.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie;
  fetch(omdbMainUrl).then(function(response) {
    if (!response.ok) {
      $(function() {
        $("#error").dialog();
      });
      console.log(response);
    } else {
      return response.json();
    }
  }).then(function(data) {
      console.log(data);
    }
  });
}









$("#search-form").delegae("#search-btn", "click", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val().toUpperCase();
  getMovieDetails(movie);
  getMoviePoster(movie);
  $("#movie-search").val("");
});

$("#search-form").on("submit", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val().toUpperCase();
  getMoviePoster(movie);
  $("#movie-search").val("");
});



//Lemus work
