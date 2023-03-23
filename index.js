const display = document.getElementById("input");

var data = {
  display: [],   //display is an array to display in the input screen 
  operator: []   // operator is an array to perform operation 
};
var memory = "";

//Radian to Degree converter:
const radian = document.getElementById("radian")
const initialText = radian.textContent;
const newText = "DEG";
let rdFlag = true
radian.addEventListener("click", () => {
  if (rdFlag == true) {
    radian.textContent = newText
    rdFlag = !rdFlag
  }
  else {
    radian.textContent = initialText
    rdFlag = !rdFlag
  }
});

// Inverse trigno functionalities
const toggler = document.getElementById("toggler")
const initialBtn = toggler.textContent;
const newBtn = "inv";
var togFlag = true
var trignometry = document.querySelectorAll("#trignometries");
var inverseTrignometry = document.querySelectorAll("#inverseTrignometries");

toggler.addEventListener("click", () => {
  if (togFlag == true) {
    toggler.textContent = newBtn
    inverseTrignometry[0].style.visibility = "visible";
    togFlag = !togFlag;
  }
  else {
    toggler.textContent = initialBtn
    inverseTrignometry[0].style.visibility = "hidden";
    togFlag = !togFlag
  }
})

// this function will handle the eventlistner from the html file
function uiclick(e) {                
  if (e.target.id == "equals") {
    evaluate(e);
  }
  else if (e.target.id == "backspace") {
    backspace(e);
  }
  else if (e.target.id == "clear") {
    allClear(e);
  }
  else if (e.target.id == "toExpo") {
    toExpo(e)
  }
  else {
    handleClickEvent(e.target.id);
  }
}

//this function handles the keyboard inputs
window.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key == "Enter") {
    evaluate(e)
  } else if (e.key == "Backspace") {
    backspace(e)
  } else {
    handleClickEvent(e.key)
  }
})

// Main function to get buttons
function handleClickEvent(btn) {
  var deg = (Math.PI/180)
  var inputString = "";
  var operator = btn;
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
    case "+":
      inputString = "+";
      operator = "+";
      break;
    case "subtract":
    case "-":
      inputString = "-";
      operator = "-";
      break;

    case "toExpo":
      toExpo(val)
      inputString = "value";
      operator = `Number(${inputString}).toExponential()`;  // toExponential() method converts a number into an exponential notation.
      break;

    case "MS":
      console.log(data.display, data.operator, "in ms");    // Memory Storage
      memory = data.display.join("");
      emptyarray();
      display.value = "";
      break;
      
    case "MR":
      console.log(data.display, data.operator, "in mr");     // Memory Recall
      data.operator.push(memory);
      data.display.push(memory);
      display.value = data.display.join("");
      break;

    case "MC":
      console.log(data.display, data.operator, "in mc");     // Memory Clear
      memory = "";
      display.value = "";
      break;

    case "M+":
      memory = Number(memory) + Number(eval(data.display.join("")));   // Memory +
      display.value = "";
      emptyarray();
      break;

    case "M-":
      memory = Number(memory) - Number(eval(data.display.join("")));    // Memory -
      display.value = "";
      emptyarray();
      break;

    case "sin":
      inputString = "sin(";
      if (rdFlag == false) {
        operator = "Math.sin(deg*" 
      }
      else
        operator = "Math.sin("
      break
    case "cos":
      inputString = "cos(";
      if (rdFlag == false) {
        operator = "Math.cos(deg*"
      }
      else
        operator = "Math.cos("
      break
    case "tan":
      inputString = "tan(";
      if (rdFlag == false) {
        operator = "Math.tan(deg*"
      }
      else
        operator = "Math.tan("
      break

    case "sin-1":
      inputString = "sin-1(";
      if (rdFlag == false) {
        operator = "Math.asin(deg*"
      }
      else
        operator = "Math.asin("
      break
    case "cos-1":
      inputString = "cos-1(";
      if (rdFlag == false) {
        operator = "Math.acos(deg*"
      }
      else
        operator = "Math.acos("
      break
    case "tan-1":
      inputString = "tan-1(";
      if (rdFlag == false) {
        operator = "Math.atan(deg*"
      }
      else
        operator = "Math.atan("
      break

    case "floor":
      inputString = "floor(";
      operator = "Math.floor("
      break;

    case "ceil":
      inputString = "ceil(";
      operator = "Math.ceil("
      break;

    case "rand":
      inputString = Math.random() * 10;  // Random value between 1 to 10
      operator = `${inputString}`
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
      inputString = "abs("
      operator = "Math.abs(";
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
      operator = fact(data.operator.pop());
      break;

    case "divide":
    case "/":
      inputString = "/";
      operator = "/";
      break;

    case "xpowery":
      inputString = "^";
      operator = "**";
      break;

    case "multiply":
    case "*":
      inputString = "*";
      operator = "*";
      break;

    case "power10":
      inputString = "10^";
      operator = "10**";
      break;

    case "log":
      inputString = `log(${inputString}`;
      operator = "Math.log10(";
      break;

    case "ln":
      inputString = `ln(${inputString}`;
      operator = "Math.log(";
      break;

    case "plus_minus":
      inputString = "-";
      operator = "*-1";
      break;

    default:
      inputString = "";
      operator = "";
      break;
  }

  if(inputString == "" && operator == ""){
    return
  }
  data.operator.push(operator);
  data.display.push(inputString);
  display.value = data.display.join("");
}

function evaluate() {
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
  emptyarray();
  display.value = "";
  return;
}

// Define helper functions::

function emptyarray() {
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

function toExpo() {
  const num = data.operator.join("")
  const value = Number(num).toExponential();
  data.operator = [value]
  data.display = [value]
  display.value = value;
}

function plusminus() {
  const num = data.display.join("")
  const value = num * -1;
  return value
}
