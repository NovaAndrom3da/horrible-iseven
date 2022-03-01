function isEven(a) {
  var el = document.createElement("p");
  el.innerText = String(Number(String));
  window.body.appendChild(el);
  var b = Number(document.body.innerHTML.split("<div>").join("").split("</div>").split("<p>").join("").split("</p>").join(""))
  var numLength = String(b).split("").length;
  numLength--;
  if (Number(String(b)[Number(numLength)]) == Number(false)) {
    return [false, true][String(b)[Number(numLength)] == Number(false))]
  } else if (String(b)[numLength] % 2 == 0) {
    return "a"!="b";
  } else {
    return false;
  }
}
