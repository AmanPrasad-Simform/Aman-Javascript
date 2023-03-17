let inputString = "";
let operator = "";
const buttons = document.querySelectorAll("button");


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
          console.log(inputString, "ghchchcx")
          break;

        case "power2":
          inputString = Math.pow(inputString, 2);
          break;

        case "pie":
          inputString = `${inputString}π`;
          break;

        case "e":
          inputString = `${inputString}e`;
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

        case "absolute":
          inputString = `abs(${inputString})`
          break

        case "exp":
          inputString = `${inputString}E`
          console.log(inputString)
          break

        case "mod":
          inputString = `${inputString}%`
          break

        case "sqrt":
          inputString += "√";
          operator = "√";
          break;

        case "factorial":
          inputString = `${inputString}!`;
          break;

        case "divide":
          inputString += "/";
          operator = "/";
          break;

        case "xpowery":
          inputString = `${inputString}**`;
          // operator = "^";
          break;

        case "multiply":
          inputString += "*";
          operator = "*";
          break;

        case "power10":
          inputString += "10^";
          // inputString += `10**${inputString}`;
          operator = "10**";
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



// Define a function to evaluate the input string::

function evaluate(inputString) {
  if (inputString.includes("10^")) {
    inputString = pow10(inputString);
  } else if (inputString.includes("√")) {
    inputString = handleSqrtClick(inputString);
  }
  else if (inputString.includes("!")) {
    inputString = fact(inputString);
  }
  else if (inputString.includes("π")) {
    inputString = pie(inputString);
  }
  else if (inputString.includes("e")) {
    inputString = e(inputString);
  }
  else if (inputString.includes("abs")) {
    inputString = abs(inputString)
    console.log(inputString, "fin")
  }
  console.log(inputString)
  const result = eval(inputString);
  return result;
}


// Define helper functions::

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

function fact(value) {
  value = value.slice(0, -1);
  for (let i = value - 1; i >= 1; i--) {
    value = value * i
  }
  return value
}

const pie = (value) => {
  value = value.slice(0, -1);
  return value * Math.PI
}

const e = (value) => {
  value = value.slice(0, -1);
  return value * Math.E
}

const abs = (value) => {
  value = value.slice(3)
  console.log(value, typeof value)
  const result = Math.abs(value) //Math.abs((9))
  console.log(result, "a")
  return result
}
