document.addEventListener("DOMContentLoaded", function() {
    var timerShow = document.getElementById("timerShow");
    var startBtn = document.getElementById("startBtn");
    var stopBtn = document.getElementById("stopBtn");
    var resetBtn = document.getElementById("resetBtn");
    var timerInput = document.getElementById("timerInput");
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");

    
    var timerInterval;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    startBtn.addEventListener("click", function() {
        if (!timerInterval) {
    
            timerInput.style.display = "none";

            hours = parseInt(hoursInput.value) || 0;
            minutes = parseInt(minutesInput.value) || 0;
            seconds = parseInt(secondsInput.value) || 0;

            timerInterval = setInterval(function() {
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timerInterval);
                    timerInput.style.display = "block";
                    alert("타이머가 종료되었습니다!");
                } else {
                    if (seconds > 0) {
                        seconds--;
                    } else {
                        if (minutes > 0) {
                            minutes--;
                            seconds = 59;
                        } else {
                            if (hours > 0) {
                                hours--;
                                minutes = 59;
                                seconds = 59;
                            }
                        }
                    }
                    timerShow.textContent = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                }
            }, 1000);
        }
    });
    
    stopBtn.addEventListener("click", function() {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    resetBtn.addEventListener("click", function() {
        clearInterval(timerInterval);
        timerInterval = null;
        hoursInput.value = "";
        minutesInput.value = "";
        secondsInput.value = "";
        timerShow.textContent = "00:00:00";

        timerInput.style.display = "block";
    });
});