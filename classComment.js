class Comment {
  constructor(c, user, date, month, day, hours, mins, favorits, resp) {
    this.c = c;
    this.user = user;
    this.date = date;
    this.month = month;
    this.day = day;
    this.hours = hours;
    this.mins = mins;
    this.favorits = favorits;
    this.resp = resp;
  }

  saveLc() {
    let countComment;
    if (localStorage.countComment) {
      countComment = localStorage.getItem("countComment");
      countComment = +countComment;
      countComment++;
    } else {
      countComment = 1;
    }
    let raiting = 0;
    localStorage.setItem("c" + countComment, this.c);
    localStorage.setItem("user" + countComment, this.user);
    localStorage.setItem("date" + countComment, this.date);
    localStorage.setItem("month" + countComment, this.month);
    localStorage.setItem("day" + countComment, this.day);
    localStorage.setItem("hours" + countComment, this.hours);
    localStorage.setItem("mins" + countComment, this.mins);
    localStorage.setItem("raiting" + countComment, this.raiting);
    localStorage.setItem("countComment", countComment);
    localStorage.setItem("favorits" + countComment, this.favorits);
    localStorage.setItem("resp" + countComment, this.resp);
  }
  clearAll() {
    const arr = document.querySelectorAll(".input_comments_child");
    for (let index = 0; index < arr.length; index++) {
      arr[index].remove();
    }
  }
  printComment(filter = null) {
    let section;
    let countComment;

    section = document.createElement("section");
    countComment = localStorage.getItem("countComment");
    document.querySelector(".num_comment").innerHTML = countComment;
    let arrComList = [];
    if (filter == "rate") {
      let arr = [];
      for (let i = 1; i <= countComment; i++) {
        let rateComment = localStorage.getItem("raiting" + i);
        const onj = {
          id: i,
          name: "raiting" + i,
          count: JSON.parse(rateComment),
        };
        arr = [...arr, onj];
      }
      arr.sort((a, b) => b.count - a.count);
      console.log("arr", arr);
      arr.forEach((el) => {
        arrComList = [...arrComList, el.id];
      });
    } 
    if(filter == "date") {
      let arr = [];
      for (let i = 1; i <= countComment; i++) {
        let dateComment = localStorage.getItem("date" + i);
        const onj = {
          id: i,
          name: "raiting" + i,
          count: new Date(dateComment),
        };
        arr = [...arr, onj];
      }
      arr.sort((a, b) => b.count - a.count);
      arr.forEach((el) => {
        arrComList = [...arrComList, el.id];
      });
    }
    if(filter == "answer") {
      let arr = [];
      for (let i = 1; i <= countComment; i++) {
        let asnwComment = localStorage.getItem("resp" + i);
        const onj = {
          id: i,
          name: "raiting" + i,
          count: JSON.parse(asnwComment),
        };
        arr = [...arr, onj];
      }
      arr.sort((a, b) => b.count - a.count);
      console.log(arr);
      arr.forEach((el) => {
        arrComList = [...arrComList, el.id];
      });
    }
    if(filter == "nofilter" || filter == null) {
      for (let i = 1; i <= countComment; i++) {
        arrComList = [...arrComList, i];
      }
    }
    
    arrComList.forEach((el) => {
      let favorite = JSON.parse(localStorage.getItem("favorits" + el));
      if (filter == "fav") {
        if (favorite) this.createElemComment(el, section);
      } else {
        this.createElemComment(el, section);
      }
    });
  }
  createElemComment(i, section) {
    let resp = localStorage.getItem("resp" + i);

    let comments;
    let avatar;
    let mainComment;
    let divComment;
    let pUser;
    let user;
    let pDate;
    let day;
    let month;
    let commDiv;
    let interFace;
    let arrowLeft;
    let answerC;
    let heartC;
    let favorC;
    let minusC;
    let numRaiting;
    let plusC;
    let c;
    let hours;
    let mins;
    let r;
    let favorits;
    let placeforResponse;
    let ac;
    let a;
    let comment_wrapper = document.createElement("div");
    comment_wrapper.classList.add("comment-wrapper");

    comments = document.querySelector(".sections");
    comments.appendChild(section);
    section.classList.add("input_comments");
    section.classList.add("input_comments_child");

    section.appendChild(comment_wrapper);
    avatar = document.createElement("img");
    avatar.src = `https://picsum.photos/id/${i}/200/300`;
    comment_wrapper.appendChild(avatar);
    avatar.classList.add("avatar");
    avatar.classList.add("avatar_child");

    mainComment = document.createElement("div");
    mainComment.classList.add("main-comment");
    comment_wrapper.appendChild(mainComment);
    divComment = document.createElement("div");
    divComment.classList.add("child_div");
    mainComment.appendChild(divComment);
    pUser = document.createElement("p");
    pUser.classList.add("user");
    user = localStorage.getItem("user" + i);
    pUser.innerHTML = user;
    divComment.appendChild(pUser);

    pDate = document.createElement("div");
    pDate.classList.add("Date-time");
    day = localStorage.getItem("day" + i);
    month = +localStorage.getItem("month" + i) + 1;
    hours = localStorage.getItem("hours" + i);
    mins = localStorage.getItem("mins" + i);
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
    month = month + " " + hours + ":" + mins;
    pDate.innerHTML = day + "." + month;
    divComment.appendChild(pDate);

    commDiv = document.createElement("div");
    commDiv.classList.add("child-comment");
    c = localStorage.getItem("c" + i);
    commDiv.innerHTML = c;
    mainComment.appendChild(commDiv);

    //INTERFACE!!!

    interFace = document.createElement("div");
    interFace.classList.add("interface-div");
    mainComment.appendChild(interFace);

    if (resp != "true") {
      arrowLeft = document.createElement("img");
      arrowLeft.src = "img/left.svg";
      arrowLeft.classList.add("arrow-left");
      interFace.appendChild(arrowLeft);
      arrowLeft.setAttribute("onclick", `responseComment(${i})`);
      answerC = document.createElement("p");
      answerC.classList.add("answer-comm");
      answerC.innerHTML = "Ответить";
      interFace.appendChild(answerC);
    }

    heartC = document.createElement("img");
    heartC.classList.add("heart");
    interFace.appendChild(heartC);
    heartC.setAttribute("onclick", `changeFavorite(${i})`);

    favorC = document.createElement("p");
    favorC.classList.add("favor-comm");

    interFace.appendChild(favorC);
    favorits = localStorage.getItem("favorits" + i);
    if (favorits == "true") {
      heartC.src = "img/heart.svg";
      favorC.innerHTML = "В избранном";
    } else {
      heartC.src = "img/full-heart.svg";
      favorC.innerHTML = "В избранное";
    }

    //COUNTER!!!

    minusC = document.createElement("img");
    minusC.src = "img/minus.svg";
    minusC.classList.add("minus");
    interFace.appendChild(minusC);
    r = localStorage.getItem("raiting" + i);
    minusC.setAttribute("onclick", `raitingMinus(${i})`);

    numRaiting = document.createElement("div");
    numRaiting.classList.add("num-raiting");
    numRaiting.innerHTML = r;
    interFace.appendChild(numRaiting);

    plusC = document.createElement("img");
    plusC.src = "img/plus.svg";
    plusC.classList.add("plus");
    interFace.appendChild(plusC);
    plusC.setAttribute("onclick", `raitingPlus(${i})`);

    placeforResponse = document.createElement("div");
    mainComment.appendChild(placeforResponse);
    let objresp = new Response();
    if (resp == "true") {
      let o = document.querySelectorAll(".main-comment");
      // console.log(o);
      objresp.o = o;
      objresp.printResponse(i);
    }
  }
}
