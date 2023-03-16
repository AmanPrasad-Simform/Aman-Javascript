let inputString = "";
let operator = "";
const buttons = document.querySelectorAll("button");

// Define a function to evaluate the input string
function evaluate(inputString) {
  if (inputString.includes("10^")) {
    inputString = pow10(inputString);
  } else if (inputString.includes("√")) {
    inputString = handleSqrtClick(inputString);
  }
  const result = eval(inputString);
  return result;
}

// Define a function to update the display
function updateDisplay() {
  const display = document.getElementById("input");
  display.value = inputString;
}

// Add event listeners to buttons
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      switch (e.target.id) {
        case "equals":
          const result = evaluate(inputString);
          inputString = String(result);
          break;

        case "power2":
          inputString = Math.pow(inputString, 2);
          break;

        case "pie":
          inputString += "pi";
          break;

        case "e":
          inputString += "e";
          break;

        case "clear":
          inputString = "";
          break;

        case "backspace":
          inputString = inputString.slice(0, -1);
          break;

        case "square":
          inputString = Math.pow(inputString, 2);
          break;

        case "inverse":
          inputString = `1/(${inputString})`;
          break;

        case "sqrt":
          inputString += "√";
          operator = "√";
          break;

        case "factorial":
          inputString = `fact(${inputString})`;
          break;

        case "divide":
          inputString += "/";
          operator = "/";
          break;

        case "xpowery":
          inputString += "^";
          operator = "^";
          break;

        case "power10":
          inputString += "10^";
          operator = "^";
          break;

        case "multiply":
          inputString += "*";
          operator = "*";
          break;

        case "log":
          inputString = `Math.log10(${inputString})`;
          operator = "log";
          break;

        case "ln":
          inputString = `Math.log(${inputString})`;
          operator = "ln";
          break;

        // Default case will take num 0 to 9 & +,-,decimal
        default:
          inputString += e.target.innerText;
          break;
      }
      updateDisplay();
    } catch (err) {
      inputString = "undefined";
    } finally {
      document.querySelector(".operator").innerText = operator;
    }
  });
});

// Define helper functions
function pow10(val) {
  const string = String(val).slice(3);
  const result = Math.pow(10, string);
  return result;
}

function handleSqrtClick(value) {
  value = String(value).slice(1);
  const result = Math.sqrt(value);
  return result;
}

function fact(l) {
  if (l <= 1) {
    return 1;
  } else {
    return l * fact(l - 1);
  }
}

