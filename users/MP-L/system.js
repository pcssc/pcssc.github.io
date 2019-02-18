function startTime() {
    var today = new Date();
    var date = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = new Date();
    var n = d.getDay()
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timetext').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    // document.getElementById("youhaveNow").innerHTML = date.getDay();



// Monday
if (n == 1) {


    // CAEP
    if (h >= 9) {
      document.getElementById('youhaveNow').innerHTML = 'Food Studies';
      document.getElementById('youhaveNowClass').innerHTML = '313';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Health Edu';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Science
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Health Edu';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'CAEP';
      document.getElementById('youhaveNextClass').innerHTML = '603';
    }

    // Graphic Design
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'CAEP';
      document.getElementById('youhaveNowClass').innerHTML = '603';
      document.getElementById('youhaveNowTime').innerHTML = '1:20-3:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Home';
      document.getElementById('youhaveNextClass').innerHTML = 'N/A';
    }
    // Home Time
    if (h >= 15) {
      document.getElementById('youhaveNow').innerHTML = 'School End';
      document.getElementById('youhaveNowClass').innerHTML = 'N/A';
      document.getElementById('youhaveNowTime').innerHTML = 'N/A';
    }

}

// Tuesday
if (n == 2) {


    // Science
    if (h >= 9) {
      document.getElementById('youhaveNow').innerHTML = 'Health Edu';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Mathematics';
      document.getElementById('youhaveNextClass').innerHTML = '601';
    }

    // English
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '601';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'English';
      document.getElementById('youhaveNextClass').innerHTML = '503B';
    }

    // Graphic Design
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '503B';
      document.getElementById('youhaveNowTime').innerHTML = '1:20-3:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Home';
      document.getElementById('youhaveNextClass').innerHTML = 'N/A';
    }
    // Home Time
    if (h >= 15) {
      document.getElementById('youhaveNow').innerHTML = 'School End';
      document.getElementById('youhaveNowClass').innerHTML = 'N/A';
      document.getElementById('youhaveNowTime').innerHTML = 'N/A';
    }

}

// Wednesday
if (n == 3) {


    // Mathematics
    if (h >= 9) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '503B';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Food Studies';
      document.getElementById('youhaveNextClass').innerHTML = '313';
    }

    // CAEP
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Food Studies';
      document.getElementById('youhaveNowClass').innerHTML = '313';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Mathematics';
      document.getElementById('youhaveNextClass').innerHTML = '701';
    }

    // English
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '701';
      document.getElementById('youhaveNowTime').innerHTML = '1:20-3:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Home';
      document.getElementById('youhaveNextClass').innerHTML = 'N/A';
    }
    // Home Time
    if (h >= 15) {
      document.getElementById('youhaveNow').innerHTML = 'School End';
      document.getElementById('youhaveNowClass').innerHTML = 'N/A';
      document.getElementById('youhaveNowTime').innerHTML = 'N/A';
    }

}

// Thursday
if (n == 4) {


    // Graphic Design
    if (h >= 9) {
      document.getElementById('youhaveNow').innerHTML = 'CAEP';
      document.getElementById('youhaveNowClass').innerHTML = '603';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'English';
      document.getElementById('youhaveNextClass').innerHTML = '503B';
    }

    // Mathematics
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '503B';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Health Edu';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Science
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Health Edu';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '1:20-3:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Home';
      document.getElementById('youhaveNextClass').innerHTML = 'N/A';
    }
    // Home Time
    if (h >= 15) {
      document.getElementById('youhaveNow').innerHTML = 'School End';
      document.getElementById('youhaveNowClass').innerHTML = 'N/A';
      document.getElementById('youhaveNowTime').innerHTML = 'N/A';
    }

}

// Friday
if (n == 5) {


    // English
    if (h >= 9) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '701';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'CAEP';
      document.getElementById('youhaveNextClass').innerHTML = '603';
    }

    // Graphic Design
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'CAEP';
      document.getElementById('youhaveNowClass').innerHTML = '603';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '706';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '706';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Food Studies';
      document.getElementById('youhaveNextClass').innerHTML = '313';
    }

    // CAEP
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Food Studies';
      document.getElementById('youhaveNowClass').innerHTML = '313';
      document.getElementById('youhaveNowTime').innerHTML = '1:20-3:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Home';
      document.getElementById('youhaveNextClass').innerHTML = 'N/A';
    }
    // Home Time
    if (h >= 15) {
      document.getElementById('youhaveNow').innerHTML = 'School End';
      document.getElementById('youhaveNowClass').innerHTML = 'N/A';
      document.getElementById('youhaveNowTime').innerHTML = 'N/A';
    }

}

document.getElementById('showDay').innerHTML = 'Day is: ' + d + ' Code Day is: ' + n + ' App Creator: Adrian; App Size: 71KB';

// no school
if (n == 6) {


  var noschoolvar = document.getElementById("noschool");
  noschoolvar.classList.add("noschool");

}
// no school
if (n == 0) {


  var noschoolvar = document.getElementById("noschool");
  noschoolvar.classList.add("noschool");

}

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function debugMode() {
  var debugModev = document.getElementById("showDay");
  if (debugModev.style.display === "none") {
    debugModev.style.display = "block";
  } else {
    debugModev.style.display = "none";
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  // document.getElementById("main").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(20,20,20,0.9)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
  // document.body.style.backgroundColor = "#272727";
}

function lightMode() {
    var el = document.getElementById("style");
    if (el.href.match("../../css/lightstyle.css")) {
        el.href = "../../css/style.css";
    }
    else {
        el.href = "../../css/lightstyle.css";
    }
    var simpleMode = document.getElementById("icone");
    if (simpleMode.style.display === "none") {
      simpleMode.style.display = "block";
    } else {
      simpleMode.style.display = "none";
    }
}

function simpleMode() {
  var simpleMode = document.getElementById("icone");
  if (simpleMode.style.display === "none") {
    simpleMode.style.display = "block";
  } else {
    simpleMode.style.display = "none";
  }
}
//
// function powerSaveMode() {
//   var simpleMode = document.getElementById("icone");
//   if (simpleMode.style.display === "none") {
//     simpleMode.style.display = "block";
//   } else {
//     simpleMode.style.display = "none";
//   }
//   var canteenlink = document.getElementById("canteenlink");
//   if (canteenlink.style.display === "none") {
//     canteenlink.style.display = "block";
//   } else {
//     canteenlink.style.display = "none";
//   }
// }


function erpkMode() {
  document.getElementById("world").style.display = "none";
}
