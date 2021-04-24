//Global Variables
const omdbKey = "5d0b46f6";
var movieName = "";
var actionMovie = [];
var comedyMovie = [];
var dramaMovie = [];
var fantasyMovie = [];
var horrorMovie = [];
var romanceMovie = [];
var thrillerMovie = [];
var westernMovie = [];

//Function that looks for possible movies matching the users search criteria on OMDB through their search API.
var getMovies = function(movie) {
  let searchedMovie = movie.replace(/\s/g, "+");
  let sUrl = "https://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + searchedMovie;
  console.log(sUrl);
  if($("#movie-modal-content").children() !== null) {
    $("#movie-modal-content").empty();
  }
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
        $("#movies-modal").dialog("close");
        $("#movie-modal-content").empty();
      });
      newMovie.on("click", function(event) {
        let id = $(event.target).attr("data-imdbID");
        console.log(id);
        getMovieDetails(id);
        $("#movies-modal").dialog("close");
        $("#movie-modal-content").empty();
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
  $("#reviewInput").val("");
  $("#rating").val("");
  $("#genres").val("");
}

//Function that gets the details of the movie selected by the user from the list created by the getMovies function using the movie IMDB ID as the search value.
var getMovieDetails = function(id) {
  $("#genres").attr("disabled", false);
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
    renderMovieInfo(data);
  });
  url = "";
}

//Function that renders the movie details of the movie obtained from the getMovieDetails function.
var renderMovieInfo = function(data) {
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

//Fuction that saves the movies arrays of objects to local storage.
var saveMovieListsToLocalStorage = function() {
  console.log("Save Movie Lists");
  $("#genres").attr("disabled", true);
  localStorage.setItem("actionMovies", JSON.stringify(actionMovie));
  localStorage.setItem("comedyMovies", JSON.stringify(comedyMovie));
  localStorage.setItem("dramaMovies", JSON.stringify(dramaMovie));
  localStorage.setItem("fantasyMovies", JSON.stringify(fantasyMovie));
  localStorage.setItem("horrorMovies", JSON.stringify(horrorMovie));
  localStorage.setItem("romanceMovies", JSON.stringify(romanceMovie));
  localStorage.setItem("thrillerMovies", JSON.stringify(thrillerMovie));
  localStorage.setItem("westernMovies", JSON.stringify(westernMovie));
}

//Function that adds the rendered in the page to the My Queue section when the user clicks the save button.
var addMovieToList = function() {

  let rating = $("#rating").val();
  let genre = $("#genres").val().toLowerCase();
  let movName = $("#movieName").text().toUpperCase();
  let imdbID = $("#movieID").text();
  let reviewInfo = $("#reviewInput").val();

  if(genre === "" || imdbID === "") {
    $(function() {
      $("#missing-information").dialog();
    });
  } else {
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
}

//Function that gets a ramdom quote from an anyme and renders a modal with the results.
var getQuote = function() {
    let quoteAPI = "https://animechan.vercel.app/api/random";
    fetch(quoteAPI).then(function(response) {
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
      $(function() {
        $("#quote-modal").dialog();
      });
      let quoteText = $("#quoteLine");
      quoteText.text(data.quote);
      let quoteAnime = $("#anime");
      quoteAnime.text(data.anime);
      let quoteCharacter = $("#character");
      quoteCharacter.text(data.character);
    });
    quoteAPI = "";
}

//Function that closess the quote modal.
var closeQuote = function () {
  $("#quote-modal").dialog("close");
}

//Function that renders a movie saved in the My Queue section.
var renderMovieFromList = function(event) {
  let id = $(event).attr("data-id");
  getMovieDetails(id);
  renderReview(event);
}

//Event listener that trigers the movie search when clicking on the seatch button.
$("#search-form").delegate("#search-btn", "click", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val();
  getMovies(movie);
  $("#movie-search").val("");
});

//Event listener that trigers the movie search when the user clicks enter instead of clicking the seacrh button.
$("#search-form").on("submit", function(event) {
  event.preventDefault()
  let movie = $("#movie-search").val();
  getMovies(movie);
  $("#movie-search").val("");
});

//Event listener that triggers the save of a movie into the My Queue section.
$("#reviewBox").delegate("#save-btn", "click", function(event) {
  event.preventDefault();
  addMovieToList();
});

//Event listener that trigers the update review option to change the content of the review and the rating of a saved movie.
$("#reviewBox").delegate("#update-btn", "click", function(event) {
  event.preventDefault();
  updateMovieReview();
});

//Event listener that triggers the share of the movie poster and review on Facebook.
$("#reviewBox").delegate("#share-btn", "click", function(event) {
  event.preventDefault();
  shareReview();
});

//Event listener that trigers the getQuote fuction.
$("#quote-btn").on("click", function(event){
  event.preventDefault();
  getQuote();
});

//Event listener that trigers the close of the quote modal.
$("#modal-close-btn").on("click", function(event){
  event.preventDefault();
  closeQuote();
});

//Event listener that closess the missing information modal.
$("#mi-modal-close").on("click", function(event){
  event.preventDefault();
  $("#missing-information").dialog("close");
});

//Event listener that closess the cannot share modal.
$("#cs-modal-close").on("click", function(event){
  event.preventDefault();
  $("#cannot-share").dialog("close");
});

//Runs the functions that verify if there is information saved on local storage, and renders the information in the My Queue menue as required.
actionMoviesInit();
comedyMoviesInit();
dramaMoviesInit();
fantasyMoviesInit();
horrorMoviesInit();
romanceMoviesInit();
thrillerMoviesInit();
westernMoviesInit();
