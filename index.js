const buttons = document.querySelectorAll("button");
const display = document.getElementById("input");

var data = {
  display: [],
  operator: []
};
var memory = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id, "eeeeee");
    
    if (e.target.id == "equals") {
      evaluate(e);
    }
    else if (e.target.id == "backspace") {
      backspace(e);
    }
    else if (e.target.id == "clear") {
      allClear(e);
    }
    else if(e.target.id == "toExpo"){
      toExpo(e)
    }
    else {
      handleClickEvent(e.target.id);
    }
  })
});

const radian = document.getElementById("radian")
const initialText = radian.textContent;
const newText = "DEG";
let rdFlag = true
radian.addEventListener("click", ()=>{
  if(rdFlag == true){
    radian.textContent = newText 
    rdFlag = false
  }
  else{
    radian.textContent = initialText
    rdFlag = true
  }
});

const toggler = document.getElementById("toggler")
const initialBtn = toggler.textContent;
const newBtn = "inv";
var togFlag = true
toggler.addEventListener("click", ()=>{
  if(togFlag == true){
    toggler.textContent = newBtn
    togFlag = false
  }
  else{
    toggler.textContent = initialBtn
    togFlag = true
  }
})


// const trignometry = document.querySelectorAll("div.dropdown-content button");
// const inverseTrignometry = document.querySelectorAll("#inverseTrignometries");
// if(togFlag === false){
//   trignometry.style.backgroundColor = "red";
//   // inverseTrignometry.style.display = "none";
// }

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

    case "toExpo":
      toExpo(val)
      inputString = "value";
      operator = `Number(${inputString}).toExponential()`;
      break;

    case "MS":
      console.log(data.display, data.operator, "in ms");
      memory = data.display.join("");
      emptyarray();
      display.value = "";
      break;
    case "MR":
      console.log(data.display, data.operator, "in mr");
      data.operator.push(memory);
      data.display.push(memory);
      display.value = data.display.join("");
      break;
    case "MC":
      console.log(data.display, data.operator, "in mc");
      memory = "";
      display.value = "";
      break;
    case "M+":
      memory = Number(memory) + Number(eval(data.display.join("")));
      display.value = "";
      emptyarray();
      break;
    case "M-":
      memory = Number(memory) - Number(eval(data.display.join("")));
      display.value = "";
      emptyarray();
      break;

    case "sin":
      inputString = "sin(";
      if(rdFlag  == false){
        operator = "Math.sin((Math.PI/180)*"
      }
      else
      operator = "Math.sin("
      break
    case "cos":
      inputString = "cos(";
      if(rdFlag  == false){
        operator = "Math.cos((Math.PI/180)*"
      }
      else
      operator = "Math.cos("
      break
    case "tan":
      inputString = "tan(";
      if(rdFlag  == false){
        operator = "Math.tan((Math.PI/180)*"
      }
      else
      operator = "Math.tan("
      break

    case "floor":
      inputString = "floor(";
      operator = "Math.floor("
    break;

    case "ceil":
      inputString = "ceil(";
      operator = "Math.ceil("
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
      operator = "Math.log10("; //toggle if ... then ...
      break;

    case "ln":
      inputString = `ln(${inputString}`;
      operator = "Math.log(";
      break;

    case "plus_minus":
      inputString = "+/-";
      operator = "*(-1)";
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

function toExpo() {
const num = data.operator.join("")
const value =  Number(num).toExponential();
data.operator = [value]
data.display = [value]
display.value = value;
}
