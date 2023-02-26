class Response extends Comment {
    constructor(iparent, o){
        super()
        this.iparent = iparent
        this.o = o
    }



    saveResponse(i) {

        let countComment = i
        

        localStorage.setItem("auser" + countComment, this.user)
        localStorage.setItem("adate" + countComment, this.date)
        localStorage.setItem("aday" + countComment, this.day)
        localStorage.setItem("ahours" + countComment, this.hours)
        localStorage.setItem("amins" + countComment, this.mins)
        localStorage.setItem("araiting" + countComment, this.raiting)
        localStorage.setItem("afavorits" + countComment, this.favorits)

    }




    showResponse(){
        let section
        let countComment 
        let comments
        let divavatar
        let avatar
        let mainComment
        let divComment
        let pUser
        let user
        let pDate
        let day
        let month
        let commDiv
        let interFace
        let arrowLeft
        let answerC
        let heartC
        let favorC
        let minusC
        let numRaiting
        let plusC
        let c
        let hours
        let mins
        let r
        let favorits
        let resp
        let iparent
        iparent = this.iparent
        let divMain
        let sendA
        let placeforResponse

        let sections = document.querySelector(".input_comments_child")
        section = document.createElement("section")
        section.classList.add("response_input_comments")
        o.insertBefore(section,o.lastChild)

        divMain = document.createElement("div")
        divMain.classList.add("input_comments")
        section.appendChild(divMain)

        divavatar = document.createElement("div")
        divMain.appendChild(divavatar)
        avatar = document.createElement("img")
        avatar.src = `https://picsum.photos/id/${this.iparent}/200/300`
        divavatar.appendChild(avatar)
        avatar.classList.add("avatar")
        avatar.classList.add("avatar_child")
        
        mainComment = document.createElement("div")
        mainComment.classList.add("response_main-comments")
        divMain.appendChild(mainComment)
        divComment = document.createElement("div")
        divComment.classList.add("response_child_div")
        mainComment.appendChild(divComment)
        pUser = document.createElement("p")
        pUser.classList.add("user")
        user = document.querySelector(".user").innerHTML
        

        pUser.innerHTML = user
        divComment.appendChild(pUser)
    

        pDate = document.createElement("div")
        pDate.classList.add("response_Date-time")
        date = new Date()
        month = date.getMonth()
        day = date.getDate()
        hours = date.getHours()
        mins = date.getMinutes()

        if(month.toString().length == 1) {
            month = "0" + month
        }
        if(day.toString().length == 1) {
            day = "0" + day
        }
        if(mins.toString().length == 1) {
            mins = "0" + mins
        }
        if(hours.toString().length == 1) {
            hours = "0" + hours
        }
        month = month + " " + hours + ":" + mins
        pDate.innerHTML = day + "." + month 
        divComment.appendChild(pDate)


        let textarea = document.createElement("textarea")
        textarea.classList.add("responseText")
        mainComment.appendChild(textarea)
       

        interFace = document.createElement("div")
        interFace.classList.add("interface-div")
        section.appendChild(interFace)

        heartC = document.createElement("img")
        heartC.classList.add("heart")
        interFace.appendChild(heartC)
        heartC.setAttribute ('onclick', `changeFavoriteResponse(${i})`)

        favorC = document.createElement("p")
        favorC.classList.add("favor-comm")
 
        interFace.appendChild(favorC)
        favorits = localStorage.getItem("favorits" + i)
        if (favorits == "true"){
            heartC.src = "img/heart.svg"
            favorC.innerHTML = "В избранном"
        } else {
            heartC.src = "img/full-heart.svg"
            favorC.innerHTML = "В избранное"
        }


    //COUNTER!!!

    
        minusC = document.createElement("img")
        minusC.src = "img/minus.svg"
        minusC.classList.add("minus")
        interFace.appendChild(minusC)

        if (localStorage.getItem('response-raiting' + i) !== null) {
        
            r = localStorage.getItem("response-raiting" + i)
        
        }else {
            localStorage.setItem("response-raiting" + i, 0) 
            r = 0  
        }

        minusC.setAttribute ('onclick', `raitingResponseMinus(${i})`)
       
        numRaiting = document.createElement("div")
        numRaiting.classList.add("response-num-raiting")
        numRaiting.innerHTML = r
        interFace.appendChild(numRaiting)
        


        plusC = document.createElement("img")
        plusC.src = "img/plus.svg"
        plusC.classList.add("plus")
        interFace.appendChild(plusC)
        plusC.setAttribute ('onclick', `raitingResponsePlus(${i})`)

        // SEND ANSWER
        
        sendA = document.createElement("img")
        sendA.src = "img/send.png"
        sendA.classList.add("send")
        interFace.appendChild(sendA)
        sendA.setAttribute ('onclick', `sendAnswer(${i})`)
     
        

    }

    saveLc(){

        let countComment
        if(localStorage.a){
            countComment = localStorage.getItem("a")
            countComment = +countComment
            
        } else {
            countComment = 1
        }
        let raiting = 0
        localStorage.setItem("c" + countComment, this.c)
        localStorage.setItem("user" + countComment, this.user)
        localStorage.setItem("date" + countComment, this.date)
        localStorage.setItem("month" + countComment, this.month)
        localStorage.setItem("day" + countComment, this.day)
        localStorage.setItem("hours" + countComment, this.hours)
        localStorage.setItem("mins" + countComment, this.mins)
        localStorage.setItem("raiting" + countComment, this.raiting)
        localStorage.setItem("favorits" + countComment, this.favorits)


    }
 
    
    printResponse(i){
        let section
        let countComment 
        let comments
        let divavatar
        let avatar
        let mainComment
        let divComment
        let pUser
        let user
        let pDate
        let day
        let month
        let commDiv
        let interFace
        let arrowLeft
        let answerC
        let heartC
        let favorC
        let minusC
        let numRaiting
        let plusC
        let c
        let hours
        let mins
        let r
        let favorits
        let resp
        let iparent
        iparent = this.iparent
        let divMain
        let sendA
        let placeforResponse
        let ac
        let a

        let sections = document.querySelector(".input_comments_child")
        section = document.createElement("section")
        section.classList.add("response_input_comments")
        let o = document.querySelectorAll(".main-comment")[i]
        console.log(o);
        o && o.insertBefore(section,o.lastChild)

        divMain = document.createElement("div")
        divMain.classList.add("input_comments")
        section.appendChild(divMain)

        divavatar = document.createElement("div")
        divMain.appendChild(divavatar)
        avatar = document.createElement("img")
        avatar.src = `https://picsum.photos/id/${i}/200/300`
        divavatar.appendChild(avatar)
        avatar.classList.add("avatar")
        avatar.classList.add("avatar_child")
        
        mainComment = document.createElement("div")
        mainComment.classList.add("response_main-comments")
        divMain.appendChild(mainComment)
        divComment = document.createElement("div")
        divComment.classList.add("response_child_div")
        mainComment.appendChild(divComment)
        pUser = document.createElement("p")
        pUser.classList.add("user")
        user = localStorage.getItem("auser" + i)
        

        pUser.innerHTML = user
        divComment.appendChild(pUser)


        pDate = document.createElement("div")
        pDate.classList.add("response_Date-time")
        day = localStorage.getItem("aday" + i) || 0
        month = +localStorage.getItem("amonth" + i)  || 0
        hours = localStorage.getItem("ahours" + i)  || 0
        mins = localStorage.getItem("amins" + i) || 0
        if(month.toString().length == 1) {
            month = "0" + month
        }
        if(day.toString().length == 1) {
            day = "0" + day
        }
        if(mins.toString().length == 1) {
            mins = "0" + mins
        }
        if(hours.toString().length == 1) {
            hours = "0" + hours
        }
        month = month + " " + hours + ":" + mins
        pDate.innerHTML = day + "." + month 
        divComment.appendChild(pDate)


        ac = localStorage.getItem("ac" + i)

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let textarea = document.createElement("textarea")
        textarea.classList.add("responseText")
        textarea.style.border = "none"
        textarea.style.boxShadow = "none"
        textarea.style.height = "100px"
        textarea.setAttribute("readonly", "")
        mainComment.appendChild(textarea)
        textarea.value = ac
       

        interFace = document.createElement("div")
        interFace.classList.add("interface-div")
        section.appendChild(interFace)

        heartC = document.createElement("img")
        heartC.classList.add("heart")
        interFace.appendChild(heartC)
        heartC.setAttribute ('onclick', `changeFavoriteResponse(${i})`)

        favorC = document.createElement("p")
        favorC.classList.add("favor-comm")
 
        interFace.appendChild(favorC)
        favorits = localStorage.getItem("afavorits" + i)
        if (favorits == "true"){
            heartC.src = "img/heart.svg"
            favorC.innerHTML = "В избранном"
        } else {
            heartC.src = "img/full-heart.svg"
            favorC.innerHTML = "В избранное"
        }


    //COUNTER!!!

    
        minusC = document.createElement("img")
        minusC.src = "img/minus.svg"
        minusC.classList.add("minus")
        interFace.appendChild(minusC)

        if (localStorage.getItem('araiting' + i) !== null) {
        
            r = localStorage.getItem("araiting" + i)
        
        }else {
            localStorage.setItem("araiting" + i, 0) 
            r = 0  
        }

        minusC.setAttribute ('onclick', `raitingResponseMinus(${i})`)
       
        numRaiting = document.createElement("div")
        numRaiting.classList.add("response-num-raiting")
        numRaiting.innerHTML = r
        interFace.appendChild(numRaiting)
        


        plusC = document.createElement("img")
        plusC.src = "img/plus.svg"
        plusC.classList.add("plus")
        interFace.appendChild(plusC)
        plusC.setAttribute ('onclick', `raitingResponsePlus(${i})`)

    }
    
}












