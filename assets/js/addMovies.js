var addMovies = function(genre, movName, imdbID, movieInformation) {
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
                      let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
                let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
                  let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
                let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
                  let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
                let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
                      let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
            newMovie.delegate(newMovieText, "click", function(event) {
              event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
          newMovie.delegate(newMovieText, "click", function(event) {
            event.preventDefault();
              let imdbID = $(event.target).parent().attr("data-id");
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
}
