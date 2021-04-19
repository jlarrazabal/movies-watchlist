var removeMovie = function(event) {
  let movieDeleted = $(event.target).parent().attr("data-id");
  console.log(movieDeleted);
}
