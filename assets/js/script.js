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





//function for storing information

var saveMovieListsToLocalStorage = function() {
  console.log("Save Movie Lists");
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

  switch (true) {
    case genre === "action":
      let addActionMovie = function() {
        let moviesInGenreList = $("#action-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            actionMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#action-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          actionMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#action-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addActionMovie();
      break;
    case genre === "comedy":
      let addComedyMovie = function() {
        let moviesInGenreList = $("#comedy-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            comedyMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#comedy-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          comedyMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#comedy-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addComedyMovie();
      break;
    case genre === "drama":
      let addDramaMovie = function() {
        let moviesInGenreList = $("#drama-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            dramaMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#drama-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          dramaMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#drama-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addDramaMovie();
      break;
    case genre === "fantasy":
      let addFantasyMovie = function() {
        let moviesInGenreList = $("#fantasy-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            fantasyMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#fantasy-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          fantasyMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#fantasy-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addFantasyMovie();
      break;
    case genre === "horror":
      let addHorrorMovie = function() {
        let moviesInGenreList = $("#horror-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            horrorMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#horror-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          horrorMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#horror-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addHorrorMovie();
      break;
    case genre === "romance":
      let addRomanceMovie = function() {
        let moviesInGenreList = $("#romance-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            romanceMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#romance-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          romanceMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#romance-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addRomanceMovie();
      break;
    case genre === "thriller":
      let addThirllerMovie = function() {
        let moviesInGenreList = $("#thriller-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            thrillerMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#thriller-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          thrillerMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#thriller-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addThirllerMovie();
      break;
    case genre === "western":
      let addWesternMovie = function() {
        let moviesInGenreList = $("#western-movies-list").children();
        console.log(moviesInGenreList);
        if (moviesInGenreList !== null) {
          let idArray = [];
          for (var i = 0; i < moviesInGenreList.length; i++) {
            let movieID = $(moviesInGenreList[i]).attr("data-id");
            idArray.push(movieID);
          }
          if (idArray.includes(imdbID)) {
            updateReview(movieInformation);
          } else {
            westernMovie.push(movieInformation);
            let newMovie = $("<li>");
            let newMovieText = $("<span>");
            let newMovieDeleteBtn = $("<button>");
            newMovie.addClass("movie-list-item");
            newMovie.attr("data-id", imdbID);
            newMovieText.text(movName);
            newMovieDeleteBtn.addClass("delete-btn");
            newMovieDeleteBtn.addClass("button");
            newMovieDeleteBtn.attr("type", "button");
            newMovieDeleteBtn.text("🗑");
            newMovie.on("click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".movie-list-item-text", "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).attr("data-id");
              renderMovieFromList(imdbID);
            });
            newMovie.delegate(".delete-btn", "click", function(event) {
              event.preventDefault();
              $(event.target).parent().remove();
            });
            newMovie.appendTo("#western-movies-list");
            newMovieText.appendTo(newMovie);
            newMovieDeleteBtn.appendTo(newMovie);
          }
        } else {
          westernMovie.push(movieInformation);
          let newMovie = $("<li>");
          let newMovieText = $("<span>");
          let newMovieDeleteBtn = $("<button>");
          newMovie.addClass("movie-list-item");
          newMovie.attr("data-id", imdbID);
          newMovieText.text(movName);
          newMovieDeleteBtn.addClass("delete-btn");
          newMovieDeleteBtn.addClass("button");
          newMovieDeleteBtn.attr("type", "button");
          newMovieDeleteBtn.text("🗑");
          newMovie.on("click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".movie-list-item-text", "click", function(event) {
            event.preventDefault();
            let imdbID = $(event.target).attr("data-id");
            renderMovieFromList(imdbID);
          });
          newMovie.delegate(".delete-btn", "click", function(event) {
            event.preventDefault();
            $(event.target).parent().remove();
          });
          newMovie.appendTo("#western-movies-list");
          newMovieText.appendTo(newMovie);
          newMovieDeleteBtn.appendTo(newMovie);
        }
      }
      addWesternMovie();

  }

  saveMovieListsToLocalStorage();

}

$("#reviewBox").delegate("#save-btn", "click", function(event) {
  event.preventDefault();
  addMovieToList();
});


const renderMovieFromList = function(id) {
  getMovieDetails(id);

}
$(".movie-list-item").on("click", function(event) {
  event.preventDefault();
  let imdbID = $(event.target).attr("data-id");
  renderMovieFromList(imdbID);
});
