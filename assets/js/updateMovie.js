var updateMovieReview = function() {
  let movieID = $("#movieID").text();
  let genre = $("#genres").val();
  console.log(movieID);
  console.log(genre);

  switch (true) {
    case genre === "action":
      let updateActionMovie = function() {
        let ids = [];
        for (var i = 0; i < actionMovie.length; i++) {
          let id = actionMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < actionMovie.length; i++) {
            let id = actionMovie[i].movieImdbID;
            if (id === movieID) {
              actionMovie[i].movieReview = $("#reviewInput").val();
              actionMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateActionMovie();
      break;
    case genre === "comedy":
      let updateComedyMovie = function() {
        let ids = [];
        for (var i = 0; i < comedyMovie.length; i++) {
          let id = comedyMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < comedyMovie.length; i++) {
            let id = comedyMovie[i].movieImdbID;
            if (id === movieID) {
              comedyMovie[i].movieReview = $("#reviewInput").val();
              comedyMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateComedyMovie();
      break;
    case genre === "drama":
      let updateDramaMovie = function() {
        let ids = [];
        for (var i = 0; i < dramaMovie.length; i++) {
          let id = dramaMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < dramaMovie.length; i++) {
            let id = dramaMovie[i].movieImdbID;
            if (id === movieID) {
              dramaMovie[i].movieReview = $("#reviewInput").val();
              dramaMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateDramaMovie();
      break;
    case genre === "fantasy":
      let updateFantasyMovie = function() {
        let ids = [];
        for (var i = 0; i < fantasyMovie.length; i++) {
          let id = fantasyMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < fantasyMovie.length; i++) {
            let id = fantasyMovie[i].movieImdbID;
            if (id === movieID) {
              fantasyMovie[i].movieReview = $("#reviewInput").val();
              fantasyMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateFantasyMovie();
      break;
    case genre === "horror":
      let updateHorrorMovie = function() {
        let ids = [];
        for (var i = 0; i < horrorMovie.length; i++) {
          let id = horrorMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < horrorMovie.length; i++) {
            let id = horrorMovie[i].movieImdbID;
            if (id === movieID) {
              horrorMovie[i].movieReview = $("#reviewInput").val();
              horrorMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateHorrorMovie();
      break;
    case genre === "romance":
      let updateRomanceMovie = function() {
        let ids = [];
        for (var i = 0; i < romanceMovie.length; i++) {
          let id = romanceMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < romanceMovie.length; i++) {
            let id = romanceMovie[i].movieImdbID;
            if (id === movieID) {
              romanceMovie[i].movieReview = $("#reviewInput").val();
              romanceMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateRomanceMovie();
      break;
    case genre === "thriller":
      let updateThrillerMovie = function() {
        let ids = [];
        for (var i = 0; i < thrillerMovie.length; i++) {
          let id = thrillerMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < thrillerMovie.length; i++) {
            let id = romanceMovie[i].movieImdbID;
            if (id === movieID) {
              thrillerMovie[i].movieReview = $("#reviewInput").val();
              thrillerMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
      }
      updateThrillerMovie();
      break;
    case genre === "western":
      let updateWesternMovie = function() {
        let ids = [];
        for (var i = 0; i < westernMovie.length; i++) {
          let id = westernMovie[i].movieImdbID;
          ids.push(id);
        }
        if (ids.includes(movieID)) {
          for (var i = 0; i < westernMovie.length; i++) {
            let id = westernMovie[i].movieImdbID;
            if (id === movieID) {
              westernMovie[i].movieReview = $("#reviewInput").val();
              westernMovie[i].movieRating = $("#rating").val();
              saveMovieListsToLocalStorage();
            }
          }
        } else {
          addMovieToList();
        }
        updateWesternMovie();
      }
  }
}
