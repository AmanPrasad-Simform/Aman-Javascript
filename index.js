const buttons = document.querySelectorAll("button");

const display = document.getElementById("input");

var data = {
  display: [],
  operator: []
};


Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id, "eeeeee");
    if (e.target.id == "equals") {
      evaluate(e);
    }
    else if(e.target.id == "backspace"){
      backspace(e);
    }
    else if(e.target.id == "clear"){
      allClear(e);
    }
    else {
      handleClickEvent(e.target.id);
    }
  })
});
// Add event listeners to buttons
function handleClickEvent(btn) {
  console.log("inhere", btn, "dca", inputString)
  var inputString = "";
  console.log(inputString, "ttttttttt")
  var operator = btn;
  // try {
  switch (btn) {
    case "1":
      inputString = "1";
      operator = "1";
      break;
    case "2":
      inputString = "2";
      operator = "2";
      break;
    case "3":
      inputString = "3";
      operator = "3";
      break;
    case "4":
      inputString = "4";
      operator = "4";
      break;
    case "5":
      inputString = "5";
      operator = "5";
      break;
    case "6":
      inputString = "6";
      operator = "6";
      break;
    case "7":
      inputString = "7";
      operator = "7";
      break;
    case "8":
      inputString = "8";
      operator = "8";
      break;
    case "9":
      inputString = "9";
      operator = "9";
      break;
    case "0":
      inputString = "0";
      operator = "0";
      break;
    case "decimal":
      inputString = ".";
      operator = ".";
      break;
    case "(":
      inputString = "(";
      operator = "(";
      break;
    case ")":
      inputString = ")";
      operator = ")";
      break;
    case "add":
      inputString = "+";
      operator = "+";
      break;
    case "subtract":
      inputString = "-";
      operator = "-";
      break;
    case "power2":
      inputString = "^2";
      operator = "**2"
      break;

    case "pie":
      inputString = `${inputString}π`;
      operator = "*Math.PI";
      break;

    case "e":
      inputString = `${inputString}e`;
      operator = "*Math.E"
      break;

    case "square":
      inputString = "^2"
      operator = "**2";
      break;

    case "inverse":
      inputString = "1/("
      operator = "1/(";
      break;

    case "absolute":
      inputString = `abs(${inputString})`
      break

    case "exp":
      inputString = `${inputString}E`;
      operator = "E"
      break

    case "mod":
      inputString = "%"
      operator = "%";
      break

    case "sqrt":
      inputString = "√(";
      operator = "Math.sqrt(";
      break;

    case "(":
      inputString = "(";
      operator = "(";
      break;

    case ")":
      inputString = ")";
      operator = ")";
      break;

    case "factorial":
      inputString = "!";
      operator = fact(data.operator.pop()); //2 digit not allowed
      break;

    case "divide":
      inputString = "/";
      operator = "/";
      break;

    case "xpowery":
      inputString = "^";
      operator = "**";
      break;

    case "multiply":
      inputString = "*";
      operator = "*";
      break;

    case "power10":
      inputString = "10^";
      operator = "10**";
      break;

    case "log":
      inputString = `log(${inputString}`;
      operator = "*Math.log10("; //toggle if ... then ...
      break;

    case "ln":
      inputString = `ln(${inputString}`;
      operator = "Math.log(";
      break;

    case "plus_minus":
      console.log(data.display,"1111111")
      inputString = `${data.display.unshift("-")}`;
      operator = `${data.operator.unshift("-")}`; // toggle
      console.log(data.display,"222221")
      break;

    default:
      inputString = "";
      operator = "";
      break;
  }
  data.operator.push(operator);
  data.display.push(inputString);
  display.value = data.display.join("");
  console.log(data.operator, "operator", data.display, "display")
}

function evaluate() {
  console.log("in evaluate")
  console.log(data.operator, "data.op")
  let value = eval(data.operator.join(""))
  data.operator = [value]
  data.display = [value]
  display.value = value;
  return
}

function backspace() {
  data.display.pop()
  data.operator.pop()
  display.value = data.display.join("");
}

function allClear() { 
  console.log("in clear"); // array 2 forming
  emptyarray();
  console.log(data.operator);
  console.log(data.display);
  display.value = "";
  return;
}

// Define helper functions::

function emptyarray() {
  console.log("im called")
  data.operator = [];
  data.display = [];
  return;
}

function fact(value) {
  for (let i = value - 1; i >= 1; i--) {
    value = value * i
  }
  return value
}
