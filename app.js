let gameseq = [];
let userseq = [];


let start = false ;
let level = 0;

let btns = ["red" , "green" , "yellow" , "purple"];

let h3 = document.querySelector("h3");
document.addEventListener("keypress" , function () {
   if(start == false) {
        console.log("game is started");
        start = true ;
   }
   levelup();
});

function levelup() {
  userseq = [];
    level++;
h3.innerText = `level ${level}`;

let randidx = Math.floor(Math.random () * 3);
let randcolor = btns[randidx];
let randbtn = document.querySelector(`.${randcolor}`);

//console.log(randidx);
//console.log(randcolor);
//console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
   btnflash(randbtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
      btn.classList.remove("flash");
    }, 250)
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout( function () {
      btn.classList.remove("userflash");
    }, 250)
}

function checkans (idx) {
  if(userseq[idx] === gameseq[idx]) {
     if(userseq.length == gameseq.length) {
      setTimeout(levelup , 1000);
     }
  } else {
    h3.innerHTML = `Game Over! your score was <b> ${level} </b> <br> press any key to start game.`;
    reset();
  }
}

function btnpress() {
   console.log(this);
   let btn = this;
   userflash(btn);

   usercolor = btn.getAttribute("id");
   userseq.push(usercolor);

   checkans(userseq.length - 1);

}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
  started = false ;
  gameseq= [];
  userseq = [];
  level = 0;
}