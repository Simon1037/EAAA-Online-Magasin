/* Adding an accordion */

window.onload = function () {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    // Add the 'active' class to each accordion button
    acc[i].classList.add("active");

    // Immediately expand the panel on window load
    var panel = acc[i].nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";

    // Add click event listener to toggle panel open/close
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

/* Adding the ability for the class .enlarge_img to enlarge the image when clicked */

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the .enlarge_img class
  const enlargeImgs = document.querySelectorAll(".enlarge_img");

  // Add a click event listener to each .enlarge_img element
  enlargeImgs.forEach((enlargeImg) => {
    enlargeImg.addEventListener("click", function (e) {
      e.stopPropagation(); // Stop the click from propagating
      // Toggle the 'clicked' class for the clicked .enlarge_img
      this.classList.toggle("clicked");
    });
  });

  // Listen for clicks on the document to remove the 'clicked' class from all .enlarge_img elements
  document.addEventListener("click", function (e) {
    enlargeImgs.forEach((enlargeImg) => {
      if (!enlargeImg.contains(e.target)) {
        enlargeImg.classList.remove("clicked");
      }
    });
  });
});
