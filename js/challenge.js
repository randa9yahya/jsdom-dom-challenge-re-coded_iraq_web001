const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const heart=document.getElementById('heart');
const pause=document.getElementById('pause');
const form=document.getElementById('comment-form');
const counter= document.getElementById('counter');
intCounter=parseInt(counter.innerText);
let paused=false;
function timerStart(){
  intCounter++;
  counter.innerText=intCounter;
}
function increment(){

    intCounter++;
    counter.innerText=intCounter;

}
function decrement(){
  if(intCounter>0 ){
    intCounter--;
    counter.innerText=intCounter
  }
}

function disableBtns(bool){
  heart.disabled=bool;
  plus.disabled=bool;
  minus.disabled=bool;
  submit.disabled=bool;
}
function stop(){
  if(paused===false){
      clearInterval(timer);
      pause.innerText='resume';
      paused=true;
      disableBtns(true);


  }
  else{
    timer=setInterval(timerStart,1000);
    paused=false;
    pause.innerText='pause';
    disableBtns(false);
  }
}
 function heartFunc () {
    var a = document.getElementById("counter"),
      b = parseInt(a.innerText),
      c = document.querySelector(".likes"),
      d = void 0;
    if ([].concat(_toConsumableArray(c.children)).map(function (a)
    {
      return parseInt(a.dataset.num);
    })
        .includes(b)
    ) {
      d = document.querySelector('[data-num="' + b + '"]');
      var e = parseInt(d.children[0].innerText);
      d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
  }
  function _toConsumableArray(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c;
    }
    return Array.from(a);
  }
form.addEventListener("submit", function (a) {
     a.preventDefault();
     var b = this.children[0],
       c = b.value;
     b.value = "";
     var d = document.querySelector(".comments"),
       e = document.createElement("p");
     (e.innerText = c), d.appendChild(e);
   });

heart.addEventListener('click',heartFunc);
plus.addEventListener('click',increment);
minus.addEventListener('click',decrement);
pause.addEventListener('click',stop)
let timer=setInterval(timerStart,1000);
