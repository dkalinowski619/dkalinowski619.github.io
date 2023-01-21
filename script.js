var operation = "";
  
function selectOperation(op) {
  operation = op;
}

function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var finalResult;

  switch(operation) {
    case "+":
      finalResult = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      finalResult = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      finalResult = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      finalResult = parseInt(num1) / parseInt(num2);
      break;
    default:
      finalResult = "Invalid Operation";
  }
  result.innerHTML = finalResult;
}
