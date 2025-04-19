const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  
  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    socket.emit('time', now);
  }, 1000);
});

http.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
