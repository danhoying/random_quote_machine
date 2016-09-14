$(document).ready(function() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote) {
    $("body").append(quote[0].content + "<p>&mdash; " + quote[0].title + "</p>")
  });

  $("button").click(function() {
    $("p").remove();
    $.getJSON("http://quotesondesign.com/wp-json/posts?   filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote) {
      $("body").append(quote[0].content + "<p>&mdash; " + quote[0].title + "</p>")
    });
  });
});