
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const router = require('./routes/routes')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SIT725DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
