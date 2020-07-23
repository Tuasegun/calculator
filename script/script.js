function adder(value1, value2) {
  value1 = parseInt(document.getElementById("val-1").value, 10);
  value2 = parseInt(document.getElementById("val-2").value, 10);
  var h4 = document.createElement("h4");
  var sum = value1 + value2;
  var answer = document.createTextNode(
    "The sum of " + value1 + " and " + value2 + " is " + sum + "."
  );
  h4.setAttribute("id", "answer");
  h4.appendChild(answer);
  document.getElementById("answer-box").appendChild(h4);
}
function subtracter(value1, value2) {
  value1 = parseInt(document.getElementById("val-1").value, 10);
  value2 = parseInt(document.getElementById("val-2").value, 10);
  var h4 = document.createElement("h4");
  var subtract = value1 - value2;
  var answer = document.createTextNode(
    "The subtraction of " + value1 + " and " + value2 + " is " + subtract + "."
  );
  h4.setAttribute("id", "answer");
  h4.appendChild(answer);
  document.getElementById("answer-box").appendChild(h4);
}
function divider(value1, value2) {
  value1 = parseInt(document.getElementById("val-1").value, 10);
  value2 = parseInt(document.getElementById("val-2").value, 10);
  var h4 = document.createElement("h4");
  var divide = value1 / value2;
  var answer = document.createTextNode(
    "When you divide " + value1 + " and " + value2 + " you get " + divide + "."
  );
  h4.setAttribute("id", "answer");
  h4.appendChild(answer);
  document.getElementById("answer-box").appendChild(h4);
}
function multiplier(value1, value2) {
  value1 = parseInt(document.getElementById("val-1").value, 10);
  value2 = parseInt(document.getElementById("val-2").value, 10);
  var h4 = document.createElement("h4");
  var multiply = value1 * value2;
  var answer = document.createTextNode(
    "When you multiply" +
      value1 +
      " and " +
      value2 +
      " you get " +
      multiply +
      "."
  );
  h4.setAttribute("id", "answer");
  h4.appendChild(answer);
  document.getElementById("answer-box").appendChild(h4);
}
function backer() {
  document.getElementById("answer").remove();
}
