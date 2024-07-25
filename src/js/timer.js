let displayTime = (hours, minutes, seconds) => {
    let addZero = (num) => (num < 10 ? `0${num}` : num);
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  };
  
  const clock = document.querySelector(".clock");
  const start = document.querySelector(".start");
  const reset = document.querySelector(".reset");
  
  let totalSeconds = 0;
  let timer;
  
  function startClock() {
    timer = setInterval(function () {
      totalSeconds++;
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let displaySeconds = totalSeconds % 60;
      clock.innerHTML = displayTime(hours, minutes, displaySeconds);
    }, 1000);
  }
  
  start.addEventListener("click", function() {
    if (!timer) {
      startClock();
      start.classList.add('pause')
      start.textContent = 'Pausar';
    } else {
      clearInterval(timer);
      timer = null;
      start.classList.remove('pause')
      start.textContent = 'Iniciar';
    }
  });
  
  reset.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    clock.innerHTML = displayTime(0, 0, 0);
    start.textContent = 'Iniciar';
  });
  