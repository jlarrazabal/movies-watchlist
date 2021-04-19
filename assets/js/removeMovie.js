var removeMovie = function(event) {
  let movieID = $(event.target).parent().attr("data-id");
  let genre = $(event.target).parent().attr("data-genre");
  console.log(movieID);
  switch(true) {
    case genre === "action":
      for (var i = 0; i < actionMovie.length; i++) {
        let id = actionMovie[i].movieImdbID;
        if (id === movieID) {
          actionMovie.splice(i, 1);
          localStorage.setItem("actionMovies", JSON.stringify(actionMovie));
        }
      }
    break;
    case genre === "comedy":
      for (var i = 0; i < comedyMovie.length; i++) {
        let id = comedyMovie[i].movieImdbID;
        if (id === movieID) {
          comedyMovie.splice(i, 1);
          localStorage.setItem("comedyMovies", JSON.stringify(comedyMovie));
        }
      }
    break;
    case genre === "drama":
      for (var i = 0; i < dramaMovie.length; i++) {
        let id = dramaMovie[i].movieImdbID;
        if (id === movieID) {
          dramaMovie.splice(i, 1);
          localStorage.setItem("dramaMovies", JSON.stringify(dramaMovie));
        }
      }
    break;
    case genre === "fantasy":
      for (var i = 0; i < fantasyMovie.length; i++) {
        let id = fantasyMovie[i].movieImdbID;
        if (id === movieID) {
          fantasyMovie.splice(i, 1);
          localStorage.setItem("fantasyMovies", JSON.stringify(fantasyMovie));
        }
      }
    break;
    case genre === "horror":
      for (var i = 0; i < horrorMovie.length; i++) {
        let id = horrorMovie[i].movieImdbID;
        if (id === movieID) {
          horrorMovie.splice(i, 1);
          localStorage.setItem("horrorMovies", JSON.stringify(horrorMovie));
        }
      }
    break;
    case genre === "romance":
      for (var i = 0; i < romanceMovie.length; i++) {
        let id = romanceMovie[i].movieImdbID;
        if (id === movieID) {
          romanceMovie.splice(i, 1);
          localStorage.setItem("romanceMovies", JSON.stringify(romanceMovie));
        }
      }
    break;
    case genre === "thriller":
      for (var i = 0; i < thrillerMovie.length; i++) {
        let id = thrillerMovie[i].movieImdbID;
        if (id === movieID) {
          thrillerMovie.splice(i, 1);
          localStorage.setItem("thrillerMovies", JSON.stringify(thrillerMovie));
        }
      }
    break;
    case genre === "western":
      for (var i = 0; i < westernMovie.length; i++) {
        let id = westernMovie[i].movieImdbID;
        if (id === movieID) {
          westernMovie.splice(i, 1);
          localStorage.setItem("westernMovies", JSON.stringify(westernMovie));
        }
      }
  }
}
