const clockTitle = document.querySelector(".js-clock");

const christmas = new Date("Dec 25, 2021").getTime();

const getTimeRemaining = (christmasEve) => {
  const today = new Date().getTime();
  const remaingDays = christmas - today;

  let days = Math.floor(remaingDays / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remaingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remaingDays % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remaingDays % (1000 * 60)) / 1000);

  clockTitle.textContent = `${days}d ${String(hours).padStart(
    2,
    "0"
  )}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(
    2,
    "0"
  )}s`;
};

setInterval(getTimeRemaining, 1000);
