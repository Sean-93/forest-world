// THIS SCROLLS THE CENTER DIV INTO CENTER VIEW AND PREPARES THE APP

function myFunction() {
  alert("Page is loaded");
  var elmnt = document.getElementById("moss");
  elmnt.scrollIntoView();
}


// THIS IS A FUNCTION THAT DETECTS SCROLL BEHAVIOR 

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {

// THIS IS THE BEHAVIOR THAT WILL BE EXECUTED UPON DETECTION OF SCROLLING
const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

};

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});