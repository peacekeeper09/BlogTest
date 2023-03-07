function toggleMoreText() {
  var moreText = document.getElementById("more-text");
  var linkText = document.getElementById("read-more-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    linkText.innerHTML = "Read less";
  } else {
    moreText.style.display = "none";
    linkText.innerHTML = "Read more";
  }
}
