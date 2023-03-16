let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((but) => {
  but.addEventListener("click", (e) => {
    console.log(e, "hjfjhfhj");
    try {
      switch (e.target.innerText) {
        case "=":
          if (string.includes("10^")) {
            console.log(string);
            pow10(string);
          }
          string = eval(string);
          document.querySelector("input").value = string;
          break;
        case "C":
          string = "";
          document.querySelector("input").value = string;
          break;
        case "⌫":
          string = String(string).slice(0, -1);
          document.querySelector("input").value = string;
          break;
        case "sin":
          // string = "";
          break;
        case "÷":
          string += "/";
          document.querySelector("input").value = string;
          break;
        case "π":
          pie();
          document.querySelector("input").value = string;
          break;
        case "e":
          constant();
          document.querySelector("input").value = string;
          break;
        case "x²":
          string = Math.pow(string, 2);
          document.querySelector("input").value = string;
          break;
        case "√x":
          string = Math.sqrt(string);
          document.querySelector("input").value = string;
          break;
        case "1/x":
          break;
        case "10x":
          string += "10^";
          string += document.querySelector("input").value;
          break;
        case "C":
          string = "";
          break;
        case "C":
          string = "";
          break;
        case "C":
          string = "";
          break;
        case "button number":
          break;
        case "𝒇 Function":
          e.target.onclick = "aaaa";
          // string += "func"
          break;
        case "Trignometry":
          string += "trigno";
          break;
        default:
          string = string + e.target.innerText;
          document.querySelector("input").value = string;
          break;
      }
    } catch (err) {
      console.log("in catch", err);
      string = "undefined";
    } finally {
      document.querySelector("input").value = string;
    }
  });
});
function pie() {
  if (string == 0) {
    string = 1;
  }
  string = string * 3.1415;
}
function fact(l) {
  string = 1;
  for (let i = 1; i <= l; i++) {
    string = string * i;
  }
  return string;
}
function constant() {
  if (string == 0) {
    string = 1;
  }
  string = string * 2.7182;
}
function powdis() {
  string = "10^";
}
function pow10(val) {
  string = String(val).slice(3);
  console.log(string, "pow");
  string = Math.pow(10, string);
  return string;
}
function clickNo(num) {
  alert(num.getAttribute("data-value"));
}

