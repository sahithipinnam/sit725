const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SIT725DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "SPORTS CAR",
    image: "images/image2.jpg.webp",
    link: "About this Car",
    description: "The nw model of Ferrari 296 GTB",
  },
  {
    title: "McLaren",
    image: "images/image3.jpg",
    link: "About this Car",
    description: "The latest MP4/4.",
  },
  {

  title: "LAMBORGHINI",
  image: "images/image4.jpg.webp",
  link: "About this Car",
  description: "The NEW HURACAN sterrato.",
},
  
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));