let code = true;

let secInt = 0;

let counter = 0;

let inp = document.getElementById('number');

let disp = document.querySelector('.display');

let setup = document.getElementById('set');

let mode = document.getElementById('mode');

let start = document.getElementById('start');

let stop = document.getElementById('stop');

let clear = document.getElementById('clear');

let circleLamp = document.querySelectorAll('.cicle');

let circle = {

    currentIdx: 0,

    lamps: [],

    init() {
        this.lamps = circleLamp;
        this.showCurrentLamp();
        ifClockActive();
    },

    showCurrentLamp() {
        this.lamps[this.currentIdx].classList.add('active');
    },

    HideVisibleLamp() {
        this.lamps[this.currentIdx].classList.remove("active");
    },

};

circle.init();

setup.addEventListener('click', function () {
    if (circle.lamps[circle.currentIdx].classList.contains('active') && circle.lamps[circle.currentIdx].classList.contains('c2')) {
        counter++;
        disp.innerText = counter;
    }

});

clear.addEventListener('click', function () {
    counter = 0;
    disp.innerText = counter;
});

mode.addEventListener('click', function () {
    circle.HideVisibleLamp();
    counter = 0;
    disp.innerText = counter;
    if (circle.currentIdx == circle.lamps.length - 1) {
        circle.currentIdx = 0;
    } else {
        circle.currentIdx++;
    }
    circle.showCurrentLamp();

    ifClockActive();

});

start.addEventListener('click', function () {
    if (circle.lamps[circle.currentIdx].classList.contains('active') && circle.lamps[circle.currentIdx].classList.contains('c2')) {
        startTimer();
    } else if (circle.lamps[circle.currentIdx].classList.contains('active') && circle.lamps[circle.currentIdx].classList.contains('c3')) {
        start.classList.add('invisibleBtn');
        stop.classList.remove('invisibleBtn');
        code = true;
        startSec(code);
    }
});

stop.addEventListener('click', function () {
    stop.classList.add('invisibleBtn');
    start.classList.remove('invisibleBtn');
    code = false;
    startSec(code);
});




function startTimer() {
    let stopTime = counter * 1000;
    let timer = setInterval(() => {
        if (counter > 0) {
            --counter;
            disp.innerText = counter;
        }
    }, 1000);

    setTimeout(function () {
        clearInterval(timer);
    }, stopTime);
};

function startSec(code) {

    if (code) {
        secInt = setInterval(() => {
            counter++;
            disp.innerText = counter;
        }, 1000);
    } else {
        clearInterval(secInt);
    }
};


function ifClockActive() {
    if (circle.lamps[circle.currentIdx].classList.contains('active') && circle.lamps[circle.currentIdx].classList.contains('c1')) {
        clock.start();
    } else {
        clock.stop();
    }
};