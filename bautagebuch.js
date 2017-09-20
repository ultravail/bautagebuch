$(function() {
  $("#header2-1u").load("bautagebuch-blog.html", function(response, status, xhr) {
    if (status == "error") {
      $("#header2-1u").text("Unable to load: " + xhr.status + " " + xhr.statusText);
    }
  });
});
