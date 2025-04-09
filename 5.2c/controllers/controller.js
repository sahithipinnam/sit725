const { Project, User } = require('../models/model.js');
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};
const submitForm = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const newUser = new User({ first_name, last_name, email });
    await newUser.save();
    res.json({ statusCode: 200, message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: 'Error submitting form', error });
  }
};
module.exports = { getProjects, submitForm };
