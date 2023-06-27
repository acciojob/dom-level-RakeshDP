//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("level");
  const level = getDOMLevel(element);
  alert(`The level of the element is: ${level}`);
});

function getDOMLevel(element) {
  let level = 0;
  let currentElement = element;

  while (currentElement.parentNode) {
    currentElement = currentElement.parentNode;
    level++;
  }

  return level;
}