const $button1 = document.getElementById("box-1"),
  $button2 = document.getElementById("box-2"),
  $button3 = document.getElementById("box-3"),
  $button4 = document.getElementById("box-4"),
  $button5 = document.getElementById("box-5"),
  $button6 = document.getElementById("box-6"),
  $buttonW = document.getElementById("change-body-color-white"),
  $buttonB = document.getElementById("change-body-color-black"),
  $bodyDOM = document.body;

function colorw() {
  $bodyDOM.style.backgroundColor = "#FFF";
}

function colorb() {
  $bodyDOM.style.backgroundColor = "#222";
}

function coins() {
  let number = Math.round(Math.random() * 100);
  alert(`You have ${number} coins from this box!`);
}

document.addEventListener("click", (e) => {
  if (e.target === $button2 || $button3 || $button4 || $button5 || $button6)
    coins();

  if (e.target.matches($buttonB || $buttonW)) colorb();

  if (e.target.matches($buttonW)) colorw();
});
