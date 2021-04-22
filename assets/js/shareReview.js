var shareReview = function() {
  let imgSrc = $("#movie-details-poster").attr("src");
  let review = $("#reviewInput").val();
  let reviewString = JSON.stringify(review);
  let url = "https://www.facebook.com/sharer/sharer.php?u="+imgSrc+"&quote="+reviewString;

  if(imgSrc === "" || review === "") {
    $(function() {
      $("#cannot-share").dialog();
    });
  } else {
    console.log(imgSrc);
    console.log(review);
    console.log(url);
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }

}
