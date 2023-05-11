

 
window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");

    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
    function init() {
      box.addEventListener("click", openBox, false);
    }
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {
      }
      if (step === 4) {
        reveal();
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
  
  };
  
function reveal() {
   let imagen = document.querySelector('.merrywrap')
  
   imagen.style.backgroundImage= 'url(vengadores.jpg)';
  imagen.style.backgroundSize= ' 100% 100vh';
   imagen.style.backgroundRepeat= 'no-repeat';
  
     var w, h;
    if (window.innerWidth >= 1000) {
      w = 295;h = 185;
    } else
    {
      w = 255;h = 155;
    }

    const play = document.querySelector('#play');
    play.addEventListener('click', musica);

  }

  function musica() {
    const play = document.querySelector('#play');
    const audio = document.querySelector('#audio')
   
    if (audio.paused) {
      audio.play();
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');
      
    } else {
      audio.pause();
      play.classList.remove('fa-pause');
      play.classList.add('fa-play');
    }
  }
  
