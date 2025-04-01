var express = require("express");
var app = express();
var port = process.env.PORT || 3004;
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/SIT725DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});
const Project = mongoose.model("Project", ProjectSchema);

// Define Schema for User Form Data
const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

// Fetch projects from DB
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects); // ✅ Not { projects: projects }
});

// API Route to Handle Form Submission
app.post("/api/submit-form", async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const newUser = new User({ first_name, last_name, email });
    await newUser.save();
    res.json({ statusCode: 200, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error submitting form", error });
  }
});

// Route to Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 App listening on port ${port}`);
});
