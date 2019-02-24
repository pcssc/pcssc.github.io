function startTime() {
  var noschoolvar = document.getElementById("men");
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
  noschoolvar.classList.add("menshow");


    // CAEP
    if (h >= 8) {
      document.getElementById('youhaveNow').innerHTML = 'History';
      document.getElementById('youhaveNowClass').innerHTML = '105';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Science';
      document.getElementById('youhaveNextClass').innerHTML = '403';
    }

    // Science
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Science';
      document.getElementById('youhaveNowClass').innerHTML = '403';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '602';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '602';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Pyhsical Edu';
      document.getElementById('youhaveNextClass').innerHTML = '705';
    }

    // Graphic Design
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Pyhsical Edu';
      document.getElementById('youhaveNowClass').innerHTML = '705';
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
  noschoolvar.classList.add("menshow");


    // Science
    if (h >= 8) {
      document.getElementById('youhaveNow').innerHTML = 'Science';
      document.getElementById('youhaveNowClass').innerHTML = '403';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'English';
      document.getElementById('youhaveNextClass').innerHTML = '605';
    }

    // English
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '605';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '602';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '602';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Mathematics';
      document.getElementById('youhaveNextClass').innerHTML = '801';
    }

    // Graphic Design
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '801';
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
  noschoolvar.classList.add("menshow");


    // Mathematics
    if (h >= 8) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '801';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'History';
      document.getElementById('youhaveNextClass').innerHTML = '105';
    }

    // CAEP
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'History';
      document.getElementById('youhaveNowClass').innerHTML = '105';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '602';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '602';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'English';
      document.getElementById('youhaveNextClass').innerHTML = '605';
    }

    // English
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '605';
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
  noschoolvar.classList.add("menshow");


    // Graphic Design
    if (h >= 8) {
      document.getElementById('youhaveNow').innerHTML = 'Physical Edu';
      document.getElementById('youhaveNowClass').innerHTML = '705';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Mathematics';
      document.getElementById('youhaveNextClass').innerHTML = '801';
    }

    // Mathematics
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Mathematics';
      document.getElementById('youhaveNowClass').innerHTML = '801';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '602';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '602';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Science';
      document.getElementById('youhaveNextClass').innerHTML = '403';
    }

    // Science
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'Science';
      document.getElementById('youhaveNowClass').innerHTML = '403';
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
  noschoolvar.classList.add("menshow");


    // English
    if (h >= 8) {
      document.getElementById('youhaveNow').innerHTML = 'English';
      document.getElementById('youhaveNowClass').innerHTML = '605';
      document.getElementById('youhaveNowTime').innerHTML = '9:00-10:40';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Graphic Design';
      document.getElementById('youhaveNextClass').innerHTML = '508';
    }

    // Graphic Design
    if (h >= 11) {
      document.getElementById('youhaveNow').innerHTML = 'Physical Edu';
      document.getElementById('youhaveNowClass').innerHTML = '605';
      document.getElementById('youhaveNowTime').innerHTML = '11:10-12:00';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'Advisory';
      document.getElementById('youhaveNextClass').innerHTML = '602';
    }

    // Advisory
    if (h >= 12) {
      document.getElementById('youhaveNow').innerHTML = 'Advisory';
      document.getElementById('youhaveNowClass').innerHTML = '602';
      document.getElementById('youhaveNowTime').innerHTML = '12:00-12:30';
      //nextup
      document.getElementById('youhaveNext').innerHTML = 'History';
      document.getElementById('youhaveNextClass').innerHTML = '105';
    }

    // CAEP
    if (h >= 13) {
      document.getElementById('youhaveNow').innerHTML = 'History';
      document.getElementById('youhaveNowClass').innerHTML = '105';
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

  noschoolvar.classList.add("men");

}
// no school
if (n == 0) {

  noschoolvar.classList.add("men");

}

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
