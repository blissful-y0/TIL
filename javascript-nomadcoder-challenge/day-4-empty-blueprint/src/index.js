// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const onResizeWindow = () => {
  if (innerWidth < 800) {
    body.style.backgroundColor = "pink";
  } else if (innerWidth < 1200) {
    body.style.backgroundColor = "blue";
  } else if (innerWidth < 1500) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "#bdbdbd";
  }
};

window.addEventListener("resize", onResizeWindow);
