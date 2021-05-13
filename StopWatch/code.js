//VARIABLE INITIZLATION
minutes = 0;
seconds = 0;
mili = 0;
timer = null;

//SHOWS THE CLOCK
function base(){
    let time = minutes + ":" + seconds + ":" + mili ;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
}
base();


//ADDS TO THE CLOCK
function start(){
  
    if (mili != 10){
        mili = mili+1;
    }
    //AFTER EVERY 1000 MILISECONDS ONE SECOND IS ADDED AND MILI IS SET BACK TO ZERO
    if (mili == 10){
        
            seconds ++;
        mili = 0;
    }
    //AFTER 60 SECONDS A 1 IS ADDED TO MINUTE AND SECONDS IS SET BACK TO ZERO
    if (seconds == 60){
        minutes++;
        seconds = 0;
    }
    //ALERT WHEN STOP WATCH REACH ONE HOUR
    if (minutes == 60 && seconds == 60 && mili ==10){
        alert("You have reached the maximum time limit of one hour.")
    }

    
    console.log(seconds);
    //DISPLAY
    let time = minutes + ":" + seconds + ":" + mili;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
    timer = setTimeout(start,100);
    timer ;
}

function reset(){
    //SETS MINUTES SECONDS AND MILISECONDS TO ZERO AND DISPLAYS THAT
    minutes = 0;
    seconds = 0;
    mili = 0;
    let time = minutes + ":" + seconds + ":" + mili ;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
}

//CANCELS THE TIMEOUT FUNCTIONS AND STORES VALUES BEFORE THE UNTIMELY DEMISE OF THE FUCNTION
function stop(){
    clearTimeout(timer);
    let currentMinute = minutes;
    let currentSeconds = seconds;
    let currentMili =mili;


    console.log("Trying to pause")
    let time = currentMinute + ":" + currentSeconds + ":" + currentMili ;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    mili = currentMili;
    seconds = currentSeconds;
    minutes = currentMinute;
}
