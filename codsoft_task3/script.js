document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");

  let currentInput = "";
  let operator = null;
  let operand1 = null;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (button.classList.contains("operator")) {
        if (currentInput !== "") {
          operand1 = parseFloat(currentInput);
          operator = value;
          currentInput = "";
        }
      } else if (button.classList.contains("equal")) {
        if (operator && operand1 !== null && currentInput !== "") {
          const operand2 = parseFloat(currentInput);
          let result = 0;

          switch (operator) {
            case "+":
              result = operand1 + operand2;
              break;
            case "-":
              result = operand1 - operand2;
              break;
            case "*":
              result = operand1 * operand2;
              break;
            case "/":
              result = operand2 !== 0 ? operand1 / operand2 : "Error";
              break;
          }

          display.textContent = result;
          currentInput = result.toString();
          operator = null;
          operand1 = null;
        }
      } else if (button.classList.contains("clear")) {
        currentInput = "";
        operator = null;
        operand1 = null;
        display.textContent = "0";
      } else {
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});