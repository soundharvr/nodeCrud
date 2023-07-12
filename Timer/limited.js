function startTimer(duration, display) {
    let timer = duration;
    const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
  
      display.querySelector('#minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
      display.querySelector('#seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
  
      if (--timer < 0) {
        clearInterval(interval);
        display.innerHTML = "Time's up! Limited period offer has ended.";
      }
    }, 1000);
  }
  
  const countdownMinutes = 01;
  const countdownSeconds = countdownMinutes * 60;
  const display = document.querySelector('.timer');
  
  startTimer(countdownSeconds, display);
  