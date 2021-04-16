//Global Variables
const omdbKey = "5d0b46f6";
var movieName = "";


var getMovies = function(movie) {
  let searchedMovie = movie.replace(/\s/g, "+");
  let url = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + searchedMovie;
  console.log(url);
  fetch(url).then(function(response) {
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
    for (var i = 0; i < data.Search.length; i++) {
      let newMovie = $("<li>");
      let newMovieText= $("<span>")
      newMovieText.text(data.Search[i].Title)
      newMovie.attr("data-imdbID", data.Search[i].imdbID);
      newMovie.addClass("modal-movie-list-item");
      newMovie.on("click", function(event) {
        getMovieDetails(event);
      });
      newMovieText.appendTo(newMovie);
      newMovie.appendTo("#movie-modal-content");
    }
    $(function() {
      $("#movies-modal").dialog();
    });
  });
  console.log(searchedMovie);
  url = "";
}

var getMovieDetails = function(movie) {
  console.log(movie);
  let imdbID = $(movie.target).attr("data-imdbID");
  console.log(imdbID);
  $("#movies-modal").dialog("close");
  $("#movie-modal-content").empty();
  let url = "http://www.omdbapi.com/?apikey=" + omdbKey + "&i=" + imdbID;
  console.log(url);
  fetch(url).then(function(response) {
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
    //Call function to populate the fields of the #movie-details-content div and the poster (#movie-details-poster)
  });
  url = "";
}

$("#search-form").delegate("#search-btn", "click", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val();
  getMovies(movie);
  $("#movie-search").val("");
});

$("#search-form").on("submit", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val();
  getMovies(movie);
  $("#movie-search").val("");
});



//Lemus work
