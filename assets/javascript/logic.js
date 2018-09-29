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
