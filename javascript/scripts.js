// code for question 3
function greatest() {
  var a = parseInt(document.getElementById("n1").value);
  var b = parseInt(document.getElementById("n2").value);
  var c = parseInt(document.getElementById("n3").value);
  var r = document.getElementById("result");
  var result = a > b && a > c ? a : b > a && b > c ? b : c;
  r.innerHTML = "Greatest Number is " + result;
  r.style.display = "block";
}

// code for question 5
function mathF() {
  document.getElementById("math").innerHTML =
    "<p><b>Math.E:</b> " +
    Math.E +
    "</p>" +
    "<p><b>Math.PI:</b> " +
    Math.PI +
    "</p>" +
    "<p><b>Math.SQRT2:</b> " +
    Math.SQRT2 +
    "</p>" +
    "<p><b>Math.SQRT1_2:</b> " +
    Math.SQRT1_2 +
    "</p>" +
    "<p><b>Math.LN2:</b> " +
    Math.LN2 +
    "</p>" +
    "<p><b>Math.LN10:</b> " +
    Math.LN10 +
    "</p>" +
    "<p><b>Math.LOG2E:</b> " +
    Math.LOG2E +
    "</p>" +
    "<p><b>Math.Log10E:</b> " +
    Math.LOG10E +
    "</p>" +
    "<p><b>Math.round(4.6):</b> " +
    Math.round(4.6) +
    "</p>";
}

// code for question 7

function validate() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var mail = document.getElementById("mail");
  var pass = document.getElementById("pass");
  var cpass = document.getElementById("cpass");
  var e1 = document.getElementById("error1");
  var e2 = document.getElementById("error2");
  var e3 = document.getElementById("error3");
  var e4 = document.getElementById("error4");
  var e5 = document.getElementById("error5");
  var emptymsg = "*Field can't be empty";
  var nummsg = "*Field can't contain numbers";
  let num = /\d/;

  e1.innerHTML = "";
  e2.innerHTML = "";
  e3.innerHTML = "";
  e4.innerHTML = "";
  e5.innerHTML = "";

  // check if field is empty
  if (fname.value.length == 0) {
    e1.innerHTML = emptymsg;
    e1.style.color = "red";
  }
  if (lname.value.length == 0) {
    e2.innerHTML = emptymsg;
    e2.style.color = "red";
  }
  if (mail.value.length == 0) {
    e3.innerHTML = emptymsg;
    e3.style.color = "red";
  }
  if (pass.value.length == 0) {
    e4.innerHTML = emptymsg;
    e4.style.color = "red";
  }
  if (cpass.value.length == 0) {
    e5.innerHTML = emptymsg;
    e5.style.color = "red";
  }

  // check if name contains numbers
  if (fname.value.match(num)) e1.innerHTML = nummsg;
  if (lname.value.match(num)) e2.innerHTML = nummsg;

  // check if email is valid
  if (
    mail.value.match(/^\d+/) ||
    mail.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)
  ) {
    e3.innerHTML = "Invalid Email Address";
    e3.style.color = "red";
  }

  //check password
  if (pass.value.length < 8) {
    e4.innerHTML += "*Should have 8 or more characters";
    e4.style.color = "red";
  }
  if (!pass.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
    e4.innerHTML += "*Should contain special symbols";
    e4.style.color = "red";
  }
  if (!pass.value.match(/\d/)) {
    e4.innerHTML += " *Should contain number";
    e4.style.color = "red";
  }

  if (pass.value != cpass.value) {
    e5.innerHTML = "*Dosen't match password";
    e5.style.color = "red";
  }
}

// code for question 8
function process() {
  var str = document.getElementById("input").value;
  var array = str.split(" ");
  let pattern1 = /[aprs]/g;
  let pattern2 = /\b[apros]/gi;
  var inbtw = document.getElementById("inbtw");
  var beg = document.getElementById("beg");
  var replace = document.getElementById("replace");

  inbtw.style.display = "block";
  beg.style.display = "block";
  replace.style.display = "block";
  inbtw.innerHTML = "<h4>Words containing 'a','p','r' or 's'</h4>";
  beg.innerHTML = "<h4>Words beginning with 'a','p','r','o' or 's'</h4>";
  replace.innerHTML =
    "<h4>Words containing 'a','p','r' or 's' to be replaced by 123CSDEPARTMENT</h4>";

  for (let i in array) {
    if (array[i].match(pattern1)) {
      inbtw.innerHTML += array[i] + " | ";
    }
  }
  for (let i in array) {
    if (array[i].match(pattern2)) {
      beg.innerHTML += array[i] + " | ";
    }
  }
  for (let i in array) {
    if (array[i].match(pattern1)) {
      array[i] = "123CSDEPARTMENT";
    }

    replace.innerHTML += array[i] + " ";
  }
}

// code for question 9
const year = [];
const ages = [];
var curr = new Date().getFullYear();
var i = 0;
function age() {
  var count = parseInt(document.getElementById("countage").value);
  if (count <= 10) {
    count = count + 1;
    document.getElementById("countage").value = count;
    year[i] = parseInt(document.getElementById("inputage").value);
    i++;
    document.getElementById("inputage").value = "";
  }

  if (count > 10) {
    for (var k = 0; k < 10; k++) {
      ages[k] = curr - year[k] + " ";
    }

    ages.sort();

    document.getElementById("storedate").style.display = "none";
    document.getElementById("showroll").style.display = "block";
    var ot = document.getElementById("others");
    ot.style.display = "block";
    ot.innerHTML +=
      "<p>Minimum age: " +
      Math.min(...ages) +
      "</p> <p>Sorted Order of ages: " +
      ages +
      "</p>";
    var t = document.getElementById("ages");
    for (var j = 0; j < 10; j++) {
      t.innerHTML += '<td onclick="getage(this)">' + (j + 1) + "</td>";
    }
  }
}

function getage(e) {
  var value = e.innerHTML;
  var show = document.getElementById("showage");
  show.style.display = "block";
  show.innerHTML = "Age: " + (curr - year[value - 1]);
}
