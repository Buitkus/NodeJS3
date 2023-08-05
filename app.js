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

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

// createCourse("html","64ce794a7d66ae6ccbd98e37");
// createCourse("CSS","64ce794a7d66ae6ccbd98e38");
// createCourse("Javascript","64ce794a7d66ae6ccbd98e37");
// createCourse("REACT","64ce794a7d66ae6ccbd98e38");
// createCourse("Angular","64ce794a7d66ae6ccbd98e3a");
// createCourse("REACT","64ce794a7d66ae6ccbd98e39");


async function listCourses() {
  const courses = await Course.find().populate("author").select("name");
  console.log(courses);
}

listCourses();
