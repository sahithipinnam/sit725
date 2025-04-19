const socket = io();

socket.on('time', (msg) => {

  console.log('Live time:', msg);
  document.getElementById('clock').innerText = msg;
  
});
