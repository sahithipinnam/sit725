const socket = io();
 
socket.on('time', (msg) => {
  console.log('Live time:', msg);
});
 
socket.on('time', (timeString) => { 
  document.getElementById('clock').innerText = timeString;
});