window.onload = function () {

    // create web audio api context
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime) // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.detune.setValueAtTime(80, audioCtx.currentTime);
    oscillator.start();


    var audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node2
    var oscillator2 = audioCtx2.createOscillator();

    oscillator2.type = 'sawtooth';
    oscillator2.frequency.setValueAtTime(400, audioCtx2.currentTime); // value in hertz
    oscillator2.connect(audioCtx2.destination);
    oscillator2.detune.setValueAtTime(150, audioCtx2.currentTime);
    oscillator2.start();

}

// synthpad function
var SynthPad = function () {
    myCanvas = $('#touchpad');
    frequency = $('#frequency');
    volume = $('#volume');

    // Create an audio context.
    myAudioContext = new webkitAudioContext();

    myCanvas.onmousemove = (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
        console.log(x);
        console.log(y);
    }
    

    SynthPad.setupEventListeners = function() {
        doocument.body.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);

        myCanvas.addEventListener('mousedown', SynthPad.playSound);
        myCanvas.addEventListener('touchstart', SynthPad.playSound);

        myCanvas.addEventListener('mouseup', SynthPad.stopSound);
        document.addEventListener('mouseleave', SynthPad.stopSound);
        myCanvas.addEventListener('touchend', SynthPad.stopSound); 
    };

    SynthPad.playSound = function(event) {

    }

};

// Export SynthPad.
return SynthPad;
