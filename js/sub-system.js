var randomColor = Math.floor(Math.random()*16777215).toString(16);

function toggle() {
  var a = document.getElementById("style");
  a.x = '../../../css/styleEzeze' == a.x ? '../../../css/style' : '../../../css/styleEzeze'; // short if
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

// var url="schoolname";
// var extra="/Name-Name-Class";
// document.getElementById('usersys').src = url+extra;

function engage() {
  var  bforinfil = "users";
  var  htminfil = "index.html";
  var  infil = "/";
  document.getElementById("idlo").value;
  document.getElementById("idlous").value;
  window.location.href = bforinfil + infil + document.getElementById("idlo").value + infil + document.getElementById("idlous").value + infil+ htminfil;
}
document.getElementById("timelang").style.color = "#" + randomColor;
