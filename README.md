# Project1

**MULTIUSER NOISE MANIPULATOR**

Audo APIs:
> https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
> http://www.sonicapi.com/
> https://developer.spotify.com/documentation/web-api/

x,y touch interface:
> mostly touchpad
> parameter assigner (i.e. x=frequency; y=amplitude)
	
interface converter functions
> ratio of x or y of touch/click range to ratio of parameter range
	
Firebase:
> play along with other connected users 

 
HELPFUL REFERENCE CODE:

// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();



