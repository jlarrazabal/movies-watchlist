var renderReview = function(event) {
  let movieID = $(event).attr("data-id");
  let genre = $(event).attr("data-genre");
  console.log(movieID);
  console.log(genre);

  switch(true) {
    case genre === "action":
    for (var i = 0; i < actionMovie.length; i++) {
      let id = actionMovie[i].movieImdbID;
      if (id === movieID) {
        $("#reviewInput").val(actionMovie[i].movieReview);
        $("#rating").val(actionMovie[i].movieRating);
        $("#genres").val(actionMovie[i].genre);
      }
    }
    break;
    case genre === "comedy":
      for (var i = 0; i < comedyMovie.length; i++) {
        let id = comedyMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(comedyMovie[i].movieReview);
          $("#rating").val(comedyMovie[i].movieRating);
          $("#genres").val(comedyMovie[i].genre);
        }
      }
    break;
    case genre === "drama":
      for (var i = 0; i < dramaMovie.length; i++) {
        let id = dramaMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(dramaMovie[i].movieReview);
          $("#rating").val(dramaMovie[i].movieRating);
          $("#genres").val(dramaMovie[i].genre);
        }
      }
    break;
    case genre === "fantasy":
      for (var i = 0; i < fantasyMovie.length; i++) {
        let id = fantasyMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(fantasyMovie[i].movieReview);
          $("#rating").val(fantasyMovie[i].movieRating);
          $("#genres").val(fantasyMovie[i].genre);
        }
      }
    break;
    case genre === "horror":
      for (var i = 0; i < horrorMovie.length; i++) {
        let id = horrorMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(horrorMovie[i].movieReview);
          $("#rating").val(horrorMovie[i].movieRating);
          $("#genres").val(horrorMovie[i].genre);
        }
      }
    break;
    case genre === "romance":
      for (var i = 0; i < romanceMovie.length; i++) {
        let id = romanceMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(romanceMovie[i].movieReview);
          $("#rating").val(romanceMovie[i].movieRating);
          $("#genres").val(romanceMovie[i].genre);
        }
      }
    break;
    case genre === "thriller":
      for (var i = 0; i < thrillerMovie.length; i++) {
        let id = thrillerMovie[i].movieImdbID;
        if (id === movieID) {
          $("#reviewInput").val(thrillerMovie[i].movieReview);
          $("#rating").val(thrillerMovie[i].movieRating);
          $("#genres").val(thrillerMovie[i].genre);
        }
      }
    break;
    case genre === "western":
    for (var i = 0; i < westernMovie.length; i++) {
      let id = westernMovie[i].movieImdbID;
      if (id === movieID) {
        $("#reviewInput").val(westernMovie[i].movieReview);
        $("#rating").val(westernMovie[i].movieRating);
        $("#genres").val(westernMovie[i].genre);
      }
    }
  }
}
