const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
});
const Project = mongoose.model('Project', ProjectSchema);


const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
const User = mongoose.model('User', UserSchema);
module.exports = { Project, User };
