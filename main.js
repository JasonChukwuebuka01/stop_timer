window.onload = () => {
  const play = document.querySelector(".btn1");
  const pause = document.querySelector(".btn2");
  const reset = document.querySelector(".btn3");
  const h1 = document.querySelector("#time");

  let timeBegan = null;
  let timeStopped = null;
  let timeElapsed = null;
  let stopDuration = 0;
  let stopInterval;

  play.addEventListener("click", () => {
    startTimer();
  });

  pause.addEventListener("click", () => {
    stopTimer();
  });

  reset.addEventListener("click", () => {
    resetTimer();
  });

  // (start button clicks activates this (). at an instance, it saves the current time it began. then proceeds to call timeRunning() every 10milliseconds. BUT when you press pause button, it also gets the exact time you paused and save it in timeStopped variable. whenever you click start again it minus the current time - timeStopped then adds it to stopDuration variable. the whole logic of this code is timeElapsed = currentTime - time began - stopDuration);
  function startTimer() {
    if (timeBegan === null) {
      timeBegan = new Date();
    }

    if (timeStopped !== null) {
      stopDuration += new Date() - timeStopped;
    }

    stopInterval = setInterval(timeRunning, 10);
  }

  function stopTimer() {
    clearInterval(stopInterval);
    if (timeBegan === null) {
      timeStopped = null;
    } else {
      timeStopped = new Date();
    }
  }

  function resetTimer() {
    clearInterval(stopInterval);
    timeBegan = null;
    timeStopped = null;
    stopDuration = 0;
    timeElapsed = null;
    h1.innerHTML = "00:00:00:00";
  }

  function timeRunning() {
    let currentTime = new Date();

    timeElapsed = new Date(currentTime - timeBegan - stopDuration);
    let hour = timeElapsed.getUTCHours();
    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);
    h1.innerHTML = `
      ${(hour = hour < 10 ? "0" + hour : hour)}:${(minutes =
      minutes < 10 ? "0" + minutes : minutes)}:${(seconds =
      seconds < 10 ? "0" + seconds : seconds)}:${(milliseconds =
      milliseconds < 10 ? "0" + milliseconds : milliseconds)}`;
  }
}; // General ()✅
