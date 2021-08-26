// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const heading = document.querySelector("h2");

const getRandomNumber = () => {
  return Math.round(Math.random() * (4 - 0) + 0);
};

const superEventHandler = {
  rightClick: () => {
    heading.textContent = "That was a right click";
    heading.style.color = colors[getRandomNumber()];
  },
  mouseLeave: () => {
    heading.textContent = "The mouse is gone";
    heading.style.color = colors[getRandomNumber()];
  },
  mouseEnter: () => {
    heading.textContent = "The mouse is here";
    heading.style.color = colors[getRandomNumber()];
  },
  windowReize: () => {
    heading.textContent = "You just resized";
    heading.style.color = colors[getRandomNumber()];
  }
};

heading.addEventListener("contextmenu", superEventHandler.rightClick);
heading.addEventListener("mouseenter", superEventHandler.mouseEnter);
heading.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowReize);
