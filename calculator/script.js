function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    return "undefined";
  }

  return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);

    case "-":
      return subtract(firstNum, secondNum);

    case "*":
      return multiply(firstNum, secondNum);

    case "/":
      return divide(firstNum, secondNum);

    default:
      return null;
  }
}

let firstNum = "";
let operator = "";
let secondNum = "";
let justEvaluated = false;

const display = document.querySelector(".display");

const numBtns = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const decimalBtn = document.querySelector(".decimal");

function updateDisplay(value) {
  display.textContent = value;
}

function roundResult(number) {
  return Math.round(number * 100000000) / 100000000;
}

function resetAll() {
  firstNum = "";
  operator = "";
  secondNum = "";
  justEvaluated = false;

  updateDisplay("0");
}

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.textContent;

    if (justEvaluated) {
      resetAll();
    }

    if (operator !== "") {
      secondNum += digit;
      updateDisplay(secondNum);
    } else {
      if (display.textContent === "0") {
        firstNum = digit;
      } else {
        firstNum += digit;
      }

      updateDisplay(firstNum);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let newOperator = button.textContent;

    if (newOperator === "×") {
      newOperator = "*";
    }

    if (newOperator === "÷") {
      newOperator = "/";
    }

    if (newOperator === "−") {
      newOperator = "-";
    }

    justEvaluated = false;

    if (operator !== "" && secondNum !== "") {
      const result = operate(operator, Number(firstNum), Number(secondNum));

      if (typeof result === "string") {
        updateDisplay(result);
      } else {
        updateDisplay(roundResult(result));
      }

      firstNum = String(result);
      secondNum = "";
    }

    if (operator === "" && firstNum === "") {
      firstNum = display.textContent;
    }

    operator = newOperator;
  });
});

equalsBtn.addEventListener("click", () => {
  if (operator === "" || secondNum === "") {
    return;
  }

  const result = operate(operator, Number(firstNum), Number(secondNum));

  if (typeof result === "string") {
    updateDisplay(result);
  } else {
    updateDisplay(roundResult(result));
  }

  firstNum = String(result);

  secondNum = "";
  operator = "";

  justEvaluated = true;
});

clearBtn.addEventListener("click", resetAll);

backspaceBtn.addEventListener("click", () => {
  if (justEvaluated) {
    resetAll();
    return;
  }

  if (operator !== "") {
    secondNum = secondNum.slice(0, -1);

    if (secondNum === "") {
      updateDisplay("0");
    } else {
      updateDisplay(secondNum);
    }
  } else {
    firstNum = firstNum.slice(0, -1);

    if (firstNum === "") {
      updateDisplay("0");
    } else {
      updateDisplay(firstNum);
    }
  }
});

decimalBtn.addEventListener("click", () => {
  if (justEvaluated) {
    resetAll();
  }

  if (operator !== "") {
    if (secondNum.includes(".")) {
      return;
    }

    if (secondNum === "") {
      secondNum = "0.";
    } else {
      secondNum += ".";
    }

    updateDisplay(secondNum);
  } else {
    if (firstNum.includes(".")) {
      return;
    }

    if (firstNum === "") {
      firstNum = "0.";
    } else {
      firstNum += ".";
    }

    updateDisplay(firstNum);
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Number keys
  if (key >= "0" && key <= "9") {
    const button = [...numBtns].find((button) => button.textContent === key);

    if (button) {
      button.click();
    }
  }

  // Operator keys
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    const symbolMap = {
      "+": "+",
      "-": "−",
      "*": "×",
      "/": "÷",
    };

    const button = [...operatorButtons].find(
      (button) => button.textContent === symbolMap[key],
    );

    if (button) {
      button.click();
    }
  } else if (key === "Enter" || key === "=") {
    equalsBtn.click();
  } else if (key === "Backspace") {
    backspaceBtn.click();
  } else if (key === "Escape") {
    clearBtn.click();
  } else if (key === ".") {
    decimalBtn.click();
  }
});

resetAll();
