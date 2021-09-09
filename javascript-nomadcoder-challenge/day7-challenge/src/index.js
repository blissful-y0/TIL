const button = document.querySelector(".button");
const selectedNumber = document.querySelector(".selectedNumber");
const submittedNumber = document.querySelector(".submittedNumber");
const selectedValue = document.querySelector(".selectedValue");
const machineValue = document.querySelector(".machineValue");
const result = document.querySelector(".result");
const resultBoard = document.querySelector(".resultBoard");

const onClickPlayButton = (event) => {
  event.preventDefault();

  resultBoard.style.visibility = "visible";

  let maxRangeValue = parseInt(selectedNumber.value);
  let userNumber = parseInt(submittedNumber.value);
  let randomNumber = Math.floor(Math.random() * maxRangeValue);

  selectedValue.textContent = userNumber;
  machineValue.textContent = randomNumber;

  if (userNumber > maxRangeValue)
    return (result.textContent =
      "Your guess number is bigger than maximum number range");

  if (!userNumber || !maxRangeValue) {
    return (result.textContent = "You have not entered the value");
  } else {
    randomNumber === userNumber
      ? (result.textContent = "You win!")
      : (result.textContent = "You lost!");
  }
};

const onChange = (event) => {
  if (event.target.value > parseInt(selectedNumber.value)) {
    result.textContent = "입력하신 숫자가 최대값보다 큽니다";
    button.disable = truea;
    result.style.visibility = "visible";
  } else {
    result.textContent = "";
    result.style.visibility = "visible";
  }
};

button.addEventListener("click", onClickPlayButton);
submittedNumber.addEventListener("keyup", onChange);
