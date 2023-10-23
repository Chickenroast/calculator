function calculer() {
  let a = document.getElementById("output").value;
  let b = eval(a);
  document.getElementById("output").value = b;
}

function afficher(val) {
  document.getElementById("output").value += val;
}

function effacer() {
  document.getElementById("output").value = "";
}

let isMoving = false;
let isMovingTL = false;
let isMovingTY = false;

function moveTd() {
  if (!isMoving) {
    isMoving = true;
    const button = document.getElementById("move");
    const originalPosition = button.style.transform;

    button.style.transform = "translateY(100px)";

    setTimeout(() => {
      button.style.transform = "translateX(100px)";
    }, 500);

    setTimeout(() => {
      button.style.transform = originalPosition;
      isMoving = false;
    }, 2000); // Revenir à la position d'origine après 30 secondes
  }
}

function moveTL(element) {
  if (!isMoving) {
    const originalPosition = element.style.transform;
    element.style.transform = "translateY(-100px)";

    setTimeout(() => {
      element.style.transform = "translateX(-100px)";
    }, 500);

    setTimeout(() => {
      element.style.transform = originalPosition;
    }, 2000); // Revenir à la position d'origine après 2 secondes
  }
}

function moveTY() {
  if (!isMoving) {
    isMovingTY = true;
    const button = document.getElementById("output");
    const originalPosition = button.style.transform;

    button.style.transform = "translateY(-100px)";

    setTimeout(() => {
      button.style.transform = "translateX(-100px)";
    }, 500);

    setTimeout(() => {
      button.style.transform = originalPosition;
      isMovingTY = false;
    }, 2000); // Revenir à la position d'origine après 30 secondes
  }
}
