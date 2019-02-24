function toggle() {
  var a = document.getElementById("style");
  a.x = '../../css/styleEzeze' == a.x ? '../../css/style' : '../../css/styleEzeze'; // short if
  a.href = a.x + '.css';
}

function debugMode() {
  var debugModev = document.getElementById("showDay");
  if (debugModev.style.display === "none") {
    debugModev.style.display = "block";
  } else {
    debugModev.style.display = "none";
  }
}
