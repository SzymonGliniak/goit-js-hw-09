function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const body = document.querySelector("body");
     const buttonStart = document.querySelector("button[data-start]");
     const buttonStop = document.querySelector("button[data-stop]");

    let nIntervId;
    buttonStop.disabled = true;

function changeColor() {
  if (!nIntervId) {
    nIntervId = setInterval(flashBody, 1000);
   
  }
}

function flashBody() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  body.style.backgroundColor = getRandomHexColor();
}

function stopColor() {
  clearInterval(nIntervId);
  buttonStop.disabled = true;
  buttonStart.disabled = false;
  nIntervId = null
}

buttonStart.addEventListener("click", changeColor);
buttonStop.addEventListener("click", stopColor);
