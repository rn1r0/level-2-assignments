function add() {
  const input1 = document.getElementById("add-input1").value;
  const input2 = document.getElementById("add-input2").value;
  const result = parseInt(input1) + parseInt(input2);
  document.getElementById("add-result").innerHTML = result;
}

function subtract() {
  const input1 = document.getElementById("subtract-input1").value;
  const input2 = document.getElementById("subtract-input2").value;
  const result = parseInt(input1) - parseInt(input2);
  document.getElementById("subtract-result").innerHTML = result;
}

function multiply() {
  const input1 = document.getElementById("multiply-input1").value;
  const input2 = document.getElementById("multiply-input2").value;
  const result = parseInt(input1) * parseInt(input2);
  document.getElementById("multiply-result").innerHTML = result;
}
