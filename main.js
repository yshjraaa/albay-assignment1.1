$(document).ready(function () {
  $(".header").height($(window).height());
});

var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("hidetext1").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("hidetext1").style.display = "none";
    return (a = 1);
  }
}

var b;
function show_hide2() {
  if (b == 1) {
    document.getElementById("hidetext2").style.display = "inline";
    return (b = 0);
  } else {
    document.getElementById("hidetext2").style.display = "none";
    return (b = 1);
  }
}

var c;
function show_hide3() {
  if (c == 1) {
    document.getElementById("hidetext3").style.display = "inline";
    return (c = 0);
  } else {
    document.getElementById("hidetext3").style.display = "none";
    return (c = 1);
  }
}

var d;
function show_hide4() {
  if (d == 1) {
    document.getElementById("hidetext4").style.display = "inline";
    return (d = 0);
  } else {
    document.getElementById("hidetext4").style.display = "none";
    return (d = 1);
  }
}

var e;
function show_hide5() {
  if (e == 1) {
    document.getElementById("hidetext5").style.display = "inline";
    return (e = 0);
  } else {
    document.getElementById("hidetext5").style.display = "none";
    return (e = 1);
  }
}

var f;
function show_hide6() {
  if (f == 1) {
    document.getElementById("hidetext6").style.display = "inline";
    return (f = 0);
  } else {
    document.getElementById("hidetext6").style.display = "none";
    return (f = 1);
  }
}
