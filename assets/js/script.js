//Global Variables
const omdbKey = "5d0b46f6";
var movieName = "";


var getMovies = function(movie) {
  let searchedMovie = movie.replace(/\s/g, "+");
  let sUrl = "https://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + searchedMovie;
  console.log(sUrl);
  fetch(sUrl).then(function(response) {
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
      let newMovieText = $("<span>")
      newMovieText.text(data.Search[i].Title)
      newMovie.attr("data-imdbID", data.Search[i].imdbID);
      newMovie.addClass("modal-movie-list-item");
      newMovie.delegate(newMovieText, "click", function(event) {
        let id = $(event.target).parent().attr("data-imdbID");
        console.log(id);
        getMovieDetails(id);
      });
      newMovie.on("click", function(event) {
        let id = $(event.target).attr("data-imdbID");
        console.log(id);
        getMovieDetails(id);
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

var getMovieDetails = function(id) {
  console.log(id);
  let iUrl = "https://www.omdbapi.com/?apikey=" + omdbKey + "&i=" + id;
  console.log(iUrl);
  fetch(iUrl).then(function(response) {
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
    renderMovieInfor(data);
  });
  $("#movies-modal").dialog("close");
  $("#movie-modal-content").empty();
  url = "";
}

var renderMovieInfor = function(data) {
  $("#movieName").text(data.Title);
  $("#movie-details-poster").attr("src", data.Poster);
  $("#movieYear").text(data.Year);
  $("#movieLength").text(data.Runtime);
  $("#movieGenre").text(data.Genre);
  $("#movieCast").text(data.Actors);
  $("#movieDirector").text(data.Director);
  $("#movieProducer").text(data.Production);
  $("#movieRating").text(data.imdbRating + "/10");
  $("#movieID").text(data.imdbID);
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

// Movie genre arrays
var actionMovie = [];

var comedyMovie = [];

var dramaMovie = [];

var fantasyMovie = [];

var horrorMovie = [];

var romanceMovie = [];

var thrillerMovie = [];

var westernMovie = [];





//functions for storing information

var saveMovieListsToLocalStorage = function() {
  console.log("Save Movie Lists");
  localStorage.setItem("actionMovies", JSON.stringify(actionMovie));
  localStorage.setItem("comedyMovies", JSON.stringify(comedyMovie));
  localStorage.setItem("dramaMovies", JSON.stringify(dramaMovie));
  localStorage.setItem("fantasyMovies", JSON.stringify(fantasyMovie));
  localStorage.setItem("horrorMovies", JSON.stringify(horrorMovie));
  localStorage.setItem("romanceMovies", JSON.stringify(romanceMovie));
  localStorage.setItem("thrillerMovies", JSON.stringify(thrillerMovie));
  localStorage.setItem("westernMovies", JSON.stringify(westernMovie));
}

var updateReview = function(review) {
  console.log(review);
}

var addMovieToList = function() {

  let rating = $('input[name="answer"]:checked').val();
  let genre = $("#genres").val().toLowerCase();
  let movName = $("#movieName").text().toUpperCase();
  let imdbID = $("#movieID").text();
  let reviewInfo = $("#reviewInput").val();

  console.log(rating);
  console.log(genre);
  console.log(movName);
  console.log(imdbID);
  console.log(reviewInfo);

  var movieInformation = {
    movieTitle: movName,
    movieReview: reviewInfo,
    movieImdbID: imdbID,
    genre: genre,
    movieRating: rating
  }

  console.log(movieInformation);

  addMovies(genre, movName, imdbID, movieInformation);

  console.log(actionMovie);
  console.log(comedyMovie);
  console.log(dramaMovie);
  console.log(fantasyMovie);
  console.log(horrorMovie);
  console.log(romanceMovie);
  console.log(thrillerMovie);
  console.log(westernMovie);

  saveMovieListsToLocalStorage();

}

$("#reviewBox").delegate("#save-btn", "click", function(event) {
  event.preventDefault();
  addMovieToList();
});


const renderMovieFromList = function(id) {
  getMovieDetails(id);
}

actionMoviesInit();
comedyMoviesInit();
dramaMoviesInit();
fantasyMoviesInit();
horrorMoviesInit();
romanceMoviesInit();
thrillerMoviesInit();
westernMoviesInit();