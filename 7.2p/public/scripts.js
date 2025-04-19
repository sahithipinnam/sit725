const socket = io();

socket.on('time', (timeString) => {

  console.log('Live time:', timeString);
  document.getElementById('clock').innerText = timeString;
  
});
