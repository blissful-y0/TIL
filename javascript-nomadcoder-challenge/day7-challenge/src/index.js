const button = document.querySelector(".button");
const selectedNumber = document.querySelector(".selectedNumber");
const submittedNumber = document.querySelector(".submittedNumber");
const selectedValue = document.querySelector(".selectedValue");
const machineValue = document.querySelector(".machineValue");

const onClickPlayButton = (event) => {
  event.preventDefault();
  let maxRangeValue = selectedNumber.value;
  let userNumber = submittedNumber.value;
  let randomNumber = Math.floor(Math.random() * maxRangeValue);
  console.log(userNumber);
};

button.addEventListener("click", onClickPlayButton);
