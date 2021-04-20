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
      let newMovieText= $("<span>")
      newMovieText.text(data.Search[i].Title)
      newMovie.attr("data-imdbID", data.Search[i].imdbID);
      newMovie.addClass("modal-movie-list-item");
      newMovie.delegate(newMovieText, "click", function(event) {
        let id = $(event.target).parent().attr("data-imdbID");
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

var romanceMovie = [];

var thrillerMovie = [];

var comedyMovie = [];

var dramaMovie = [];

var horrorMovie = [];

var fantasyMovie = [];

var westernMovie = [];

//function for storing information

$("#reviewBox").delegate("#save-btn", "click", function(event) {
    event.preventDefault();

    let rating = $('input[name="answer"]:checked').val();
    console.log(rating);

    //Genre value selected from dropdown
    // OPTION 1: let genre= $("#genres").val();
    //OPTION 2 (PREFERRED):
    let genre= $("#genres option:selected").text();
    // testing if it returns the value selected in dropdown; it does
    console.log(genre);

    let movName = $("#movieName").val();
    let imdbID = $("#movieID").val();
    let reviewInfo = $("#reviewInput").text();

    var movieInformation = {
        movieTitle: movName,
        movieReview: reviewInfo,
        movieImdbID: imdbID,
        movieGenre: genre,
        movieRating: rating
    }

    switch (genre) {
        case "Action":
            actionMovie.push(movieInformation);
            //create element
            //adding movie to the menue
            //append element to the queue
            // #accordionContainer
            // let actionGenre = $(document.createElement("button"));
            actionGenre = innerText("Action");
            let actionGenre = $("button").append("Action");
            $(actionGenre).append(genre-action);
            break;
        case "Romance":
            romanceMovie.push(movieInformation);
            //adding movie to the menue
            break;
        case "Thriller":
            thrillerMovie.push(movieInformation);
            //adding movie to the menue
            break;
        case "Comedy":
            comedyMovie.push(movieInformation);
            break;
        case "Drama":
            dramaMovie.push(movieInformation);
            break; 
        case "Horror":
            horrorMovie.push(movieInformation);
            break; 
        case "Fantasy":
            fantasyMovie.push(movieInformation);
            break; 
        case "Western":
            westernMovie.push(movieInformation);
                   
            //adding movie to the menue
    }

    console.log(fantasyMovie);

    // localStorage.setItem("actionGenre", actionMovie);
    // localStorage.setItem("romanceGenre", romanceMovie);
    // localStorage.setItem("thrillerGenre", thrillerMovie);
    // localStorage.setItem("comedyGenre", comedyMovie);
    // localStorage.setItem("dramaGenre", dramaMovie);
    // localStorage.setItem("horrorGenre", horrorMovie);

    document.getElementById("movieID").setAttribute("class", "data-id");
    // or $("#movieID").setAttribute("class", "data-id");

});
const renderMovieFromList = function(id) {
	getMovieDetails(id);

}
$(".movie-list-item").on("click",function (event){
	event.preventDefault();
	let imdbID = $(event.target).attr("data-id");
	renderMovieFromList(imdbID);
});
