document.addEventListener("DOMContentLoaded", function () {
  // Get the article content
  var articleContent =
    document.getElementById("article-content").innerText;

  // Average reading speed (words per minute)
  var wordsPerMinute = 200;

  // Calculate the read time
  var words = articleContent.split(/\s+/).length;
  var minutes = words / wordsPerMinute;
  var readTime = Math.ceil(minutes);

  // Update the HTML with the read time estimate
  var readTimeElement = document.getElementById("read-time");
  readTimeElement.textContent =
    "read time: " + readTime + " min(s)";
});
