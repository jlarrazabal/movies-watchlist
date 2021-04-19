var actionMoviesInit = function() {
  if (localStorage.getItem("actionMovies") !== null) {
    actionMovie = JSON.parse(localStorage.getItem("actionMovies"));
    for (var i = 0; i < actionMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", actionMovie[i].movieImdbID);
      newMovieText.text(actionMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var comedyMoviesInit = function() {
  if (localStorage.getItem("comedyMovies") !== null) {
    comedyMovie = JSON.parse(localStorage.getItem("comedyMovies"));
    for (var i = 0; i < comedyMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", comedyMovie[i].movieImdbID);
      newMovieText.text(comedyMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var dramaMoviesInit = function() {
  if (localStorage.getItem("dramaMovies") !== null) {
    dramaMovie = JSON.parse(localStorage.getItem("dramaMovies"));
    for (var i = 0; i < dramaMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", dramaMovie[i].movieImdbID);
      newMovieText.text(dramaMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var fantasyMoviesInit = function() {
  if (localStorage.getItem("fantasyMovies") !== null) {
    fantasyMovie = JSON.parse(localStorage.getItem("fantasyMovies"));
    for (var i = 0; i < fantasyMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", fantasyMovie[i].movieImdbID);
      newMovieText.text(fantasyMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var horrorMoviesInit = function() {
  if (localStorage.getItem("horrorMovies") !== null) {
    horrorMovie = JSON.parse(localStorage.getItem("horrorMovies"));
    for (var i = 0; i < horrorMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", horrorMovie[i].movieImdbID);
      newMovieText.text(horrorMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var romanceMoviesInit = function() {
  if (localStorage.getItem("romanceMovies") !== null) {
    romanceMovie = JSON.parse(localStorage.getItem("romanceMovies"));
    for (var i = 0; i < romanceMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", romanceMovie[i].movieImdbID);
      newMovieText.text(romanceMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var thrillerMoviesInit = function() {
  if (localStorage.getItem("thrillerMovies") !== null) {
    thrillerMovie = JSON.parse(localStorage.getItem("thrillerMovies"));
    for (var i = 0; i < thrillerMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", thrillerMovie[i].movieImdbID);
      newMovieText.text(thrillerMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}

var westernMoviesInit = function() {
  if (localStorage.getItem("westernMovies") !== null) {
    westernMovie = JSON.parse(localStorage.getItem("westernMovies"));
    for (var i = 0; i < westernMovie.length; i++) {
      let newMovie = $("<li>");
      let newMovieText = $("<span>");
      let newMovieDeleteBtn = $("<button>");
      newMovie.addClass("movie-list-item");
      newMovie.attr("data-id", westernMovie[i].movieImdbID);
      newMovieText.text(westernMovie[i].movieTitle);
      newMovieDeleteBtn.addClass("delete-btn");
      newMovieDeleteBtn.addClass("button");
      newMovieDeleteBtn.attr("type", "button");
      newMovieDeleteBtn.text("🗑");
      newMovie.on("click", function(event) {
        event.preventDefault();
        let imdbID = $(event.target).attr("data-id");
        renderMovieFromList(imdbID);
      });
      newMovieText.on("click", function(event) {
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
}
