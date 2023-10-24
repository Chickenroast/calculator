// LE CIMETIERE DES GET ELEMENTS BYID XOXOX

document.getElementById("btn1").addEventListener("click", function () {
  appendToOutput("1");
});

document.getElementById("btn2").addEventListener("click", function () {
  appendToOutput("2");
});

document.getElementById("btn3").addEventListener("click", function () {
  appendToOutput("3");
});

document.getElementById("btnPlus").addEventListener("click", function () {
  appendToOutput("+");
  moveTy();
});

document.getElementById("btn4").addEventListener("click", function () {
  appendToOutput("4");
});

document.getElementById("btn5").addEventListener("click", function () {
  appendToOutput("5");
});

document.getElementById("btn6").addEventListener("click", function () {
  appendToOutput("6");
});

document.getElementById("btnMinus").addEventListener("click", function () {
  appendToOutput("-");
});

document.getElementById("btn7").addEventListener("click", function () {
  appendToOutput("7");
});

document.getElementById("btn8").addEventListener("click", function () {
  appendToOutput("8");
});

document.getElementById("btn9").addEventListener("click", function () {
  appendToOutput("9");
});

document.getElementById("btnMultiply").addEventListener("click", function () {
  appendToOutput("*");
});

document.getElementById("btn0").addEventListener("click", function () {
  appendToOutput("0");
  moveTnull();
});

document.getElementById("btnClear").addEventListener("click", function () {
  clearOutput();
});

document.getElementById("btnEquals").addEventListener("click", function () {
  calculate();
  moveTnull();
});

document.getElementById("btnDivide").addEventListener("click", function () {
  appendToOutput("/");
});

document.getElementById("output").addEventListener("click", function () {
  appendToOutput("");
});

document.getElementById("output2").addEventListener("mouseover", function () {
  moveTd();
});

// LA CALCULETTE PAS TRES DEVELOPPE

function appendToOutput(value) {
  document.getElementById("output2").value += value;
}

function clearOutput() {
  document.getElementById("output2").value = "";
}

function calculate() {
  const output = document.getElementById("output2").value;
  try {
    const result = eval(output);
    document.getElementById("output2").value = result;
  } catch (error) {
    document.getElementById("output2").value = "Erreur";
  }
}

// FONCTION FOU LE BORDEL lel
// remarque a moi même trouver comment faire coexister un onmouseover et un click
//ainsi on pourrais avoir 2 addeventlistener distincs

//ON DECLARE UN POINT D ENTREE

let isMovingTd = false;
let isMovingTy = false;
let isMovingTnull = false;

//FONCTION POUR BOUGER LE INPUT
function moveTd() {
  if (!isMovingTd) {
    isMovingTd = true;
    const button = document.getElementById("output");
    const originalPosition = button.style.transform;

    button.style.transform = "translateY(-100px)";

    setTimeout(() => {
      button.style.transform = "translateX(-100px)";
    }, 5000);

    setTimeout(() => {
      button.style.transform = originalPosition;
      isMovingTd = false;
    }, 2000);
  }
}

//FONCTION POUR BOUGER LE BOUTON +
function moveTy() {
  if (!isMovingTd) {
    isMovingTy = true;
    const button = document.getElementById("btnPlus");
    const originalPosition = button.style.transform;

    button.style.transform = "translateY(-150px)";

    setTimeout(() => {
      button.style.transform = "translateX(-100px)";
    }, 5000);

    setTimeout(() => {
      button.style.transform = originalPosition;
      isMovingTy = false;
    }, 5000);
  }
}

//FONCTION POUR BOUGER LE BOUTON 0 ET =
function moveTnull() {
  if (!isMovingTnull) {
    isMovingTnull = true;
    const button = document.getElementById("btn0");
    const button2 = document.getElementById("btnEquals");
    const originalPosition = button.style.transform;
    const originalPosition2 = button2.style.transform;

    button.style.transform = "translateY(150px)";
    button2.style.transform = "translateY(150px)";

    setTimeout(() => {
      //what is this ?
      button.style.transform = "translateX(-100px)";
      button2.style.transform = "translateX(-100px)";
    }, 5000);

    setTimeout(() => {
      button.style.transform = originalPosition;
      button2.style.transform = originalPosition2;
      isMovingTnull = false;
    }, 5000);
  }
}
