let x;
let isFav = false
function check_length(obj) {
  x = obj.value.length;

  if (x == 0) {
    document.querySelector(".max-symbol").style.color = "gray";
    document.querySelector(".max-symbol").innerHTML = "Макс. 1000 символов";
    document.querySelector(".button").style.backgroundColor = "gray";
    document.querySelector(".err_sms").style.visibility = "hidden";
  } else if (x >= 0 && obj.value.length < 1000) {
    document.querySelector(".max-symbol").style.color = "gray";
    document.querySelector(".max-symbol").innerHTML = "Макс. 1000 символов";
    document.querySelector(".button").style.backgroundColor = "#ABD873";
    document.querySelector(".err_sms").style.visibility = "hidden";
  } else if (x >= 1000) {
    document.querySelector(".button").style.backgroundColor = "gray";
    document.querySelector(".max-symbol").style.color = "red";
    document.querySelector(".max-symbol").innerHTML =
      obj.value.length + "/1000";
    document.querySelector(".err_sms").style.visibility = "visible";
  }
}

function saveComment() {
  if (x == null || x == 0) {
    return;
  } else if (x > 1000) {
    return;
  }

  let c = document.querySelector("textarea").value;
  let user = document.querySelector(".user").innerHTML;

  let date = new Date();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let raiting = 0;
  Coment.c = c;
  Coment.user = user;
  Coment.date = date;
  Coment.month = month;
  Coment.day = day;
  Coment.hours = hours;
  Coment.mins = mins;
  Coment.raiting = 0;
  Coment.favorits = false;
  Coment.resp = false;

  Coment.saveLc();
  location.reload();
}

function showComments() {
  if (localStorage.user) {
    c = localStorage.getItem("c");
    user = localStorage.getItem("user");
    date = localStorage.getItem("date");
    month = +localStorage.getItem("month") + 1;
    day = localStorage.getItem("day");
    hours = localStorage.getItem("hours");
    mins = localStorage.getItem("mins");

    if (month.toString().length == 1) {
      month = "0" + month;
    }
    if (day.toString().length == 1) {
      day = "0" + day;
    }
    if (mins.toString().length == 1) {
      mins = "0" + mins;
    }
    if (hours.toString().length == 1) {
      hours = "0" + hours;
    }
  }
}

function raitingMinus(i) {
  loc = document.querySelectorAll(".num-raiting")[i - 1];
  r = +loc.innerHTML;
  r--;
  loc.innerHTML = r;
  localStorage.setItem("raiting" + i, r);
}

function raitingPlus(i) {
  loc = document.querySelectorAll(".num-raiting")[i - 1];
  r = +loc.innerHTML;
  r++;
  loc.innerHTML = r;
  localStorage.setItem("raiting" + i, r);
}

function changeFavorite(i) {
  if (document.querySelectorAll(".heart")[i - 1].src.includes("full-heart")) {
    document.querySelectorAll(".heart")[i - 1].src = "img/heart.svg";
    document.querySelectorAll(".favor-comm")[i - 1].innerHTML = "В избранном";
  } else {
    document.querySelectorAll(".heart")[i - 1].src = "img/full-heart.svg";
    document.querySelectorAll(".favor-comm")[i - 1].innerHTML = "В избранное";
  }

  if (document.querySelectorAll(".heart")[i - 1].src.includes("full")) {
    localStorage.setItem("favorits" + i, false);
  } else {
    localStorage.setItem("favorits" + i, true);
  }
}

function changeFavoriteResponse(i) {
  if (document.querySelectorAll(".heart")[i].src.includes("full-heart")) {
    document.querySelectorAll(".heart")[i].src = "img/heart.svg";
    document.querySelectorAll(".favor-comm")[i].innerHTML = "В избранном";
  } else {
    document.querySelectorAll(".heart")[i].src = "img/full-heart.svg";
    document.querySelectorAll(".favor-comm")[i].innerHTML = "В избранное";
  }

  if (document.querySelectorAll(".heart")[i].src.includes("full")) {
    localStorage.setItem("afavorits" + i, false);
  } else {
    localStorage.setItem("afavorits" + i, true);
  }
}

let r;

function responseComment(i) {
  o = document.querySelectorAll(".main-comment")[i];

  localStorage.setItem("resp" + i, true);
  user = localStorage.getItem("user" + i);
  date = localStorage.getItem("date" + i);
  month = +localStorage.getItem("month" + i) + 1;
  day = localStorage.getItem("day" + i);
  hours = localStorage.getItem("hours" + i);
  mins = localStorage.getItem("mins" + i);
  favorits = false;
  resp = true;

  r = new Response();

  r.o = o;
  r.user = user;
  r.date = date;
  r.month = month;
  r.day = day;
  r.hours = hours;
  r.mins = mins;
  r.favorits = favorits;

  r.iparent = i;
  r.showResponse();
}

let nameU;
let Coment;
function randomName() {
  if (localStorage.countComment) {
    i = +localStorage.getItem("countComment");
    let names = [
      "Алексей Мякишев",
      "Павел Корсаков",
      "Денис Барсов",
      "Сергей Иванов",
      "Анна Марка",
    ];
    nameU = names[i % 5];
    document.querySelector(".user").innerHTML = nameU;
  } else {
    nameU = "Максим Авдеенко";
  }
  Coment = new Comment("", nameU, "", "", "", "", "");
  Coment.printComment();
}

function sendAnswer(i) {
  localStorage.setItem("a", i);
  let localindex = i - 1
  const reswrapper = document.querySelectorAll(".comment-wrapper")[localindex]
  const resArea = reswrapper.querySelector(".responseText").value
  const valN = localStorage.setItem("ac" + i, resArea);

  user = document.querySelector(".user").innerHTML;

  date = new Date();
  month = date.getMonth();
  month = +month + 1;
  day = date.getDate();
  hours = date.getHours();
  mins = date.getMinutes();

  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (mins.toString().length == 1) {
    mins = "0" + mins;
  }
  if (hours.toString().length == 1) {
    hours = "0" + hours;
  }

  r.user = user;
  r.date = date;
  r.month = month;
  r.day = day;
  r.hours = hours;
  r.mins = mins;
  r.favorits = favorits;

  localStorage.setItem("amonth" + i, month);

  localStorage.setItem("auser" + i, user);
  localStorage.setItem("adate" + i, date);
  localStorage.setItem("aday" + i, day);
  localStorage.setItem("ahours" + i, hours);
  localStorage.setItem("amins" + i, mins);
  localStorage.setItem("afavorits" + i, favorits);

  location.reload();
}

function raitingResponseMinus(i) {
  if (localStorage.getItem("araiting" + i) != null) {
    r = localStorage.getItem("araiting" + i);
  } else {
    r = 0;
  }

  loc = document.querySelectorAll(".response-num-raiting")[i - 1];
  loc.innerHTML = r;
  r = +loc.innerHTML;
  r--;
  loc.innerHTML = r;
  localStorage.setItem("araiting" + i, r);
}

function raitingResponsePlus(i) {
  if (localStorage.getItem("araiting" + i) != null) {
    r = localStorage.getItem("araiting" + i);
  } else {
    r = 0;
  }

  loc = document.querySelectorAll(".response-num-raiting")[i - 1];
  loc.innerHTML = r;
  r = +loc.innerHTML;
  r++;
  loc.innerHTML = r;
  localStorage.setItem("araiting" + i, r);
}
function showFav(){
    isFav = !isFav
    const fav = document.querySelector('.par_line')
    fav.classList.toggle('pink')
    if(isFav){
        Coment.clearAll()
        Coment.printComment('fav');
    } else{
        Coment.clearAll()
        Coment.printComment();
    }
}
function sortFilter(){
  var x = document.querySelector(".select-menu").value;
  Coment.clearAll()
  Coment.printComment(x);
}