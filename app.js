const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const Author = require("./models/Author");
const Course = require("./models/Course");

connectDB();

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

// createAuthor("maybachas", "Tiktok", "Tiktok.com");
// createAuthor("Petras", "Youtube", "Google.com");
// createAuthor("Kopustas", "Darzas", "darzas.com");
// createAuthor("movie", "facebook", "facebook.com");

async function createCourse(name, author, description) {
  const course = new Course({
    name,
    author,
    description
  });

  const result = await course.save();
  console.log(result);
}

// createCourse("html","64ce9e0a8b3d55155093366d", "easy as 1");
// createCourse("CSS","64ce9e0a8b3d55155093366e", "very pretty");
// createCourse("Javascript","64ce9e0a8b3d55155093366f", "hardest of 3");
// createCourse("REACT","64ce9e0a8b3d551550933670", "Evil stuff");
// createCourse("Angular","64ce9e0a8b3d55155093366e", "Dont know anything");
// createCourse("Typescript","64ce9e0a8b3d55155093366d", "Have cool name");

async function listCourses() {
  const courses = await Course.find().populate("author").select("name");
  console.log(courses);
}

listCourses();
