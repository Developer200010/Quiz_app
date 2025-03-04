const mongoose = require("mongoose");
const  quizData  = require("../data.js");
const quizData2 = require("../data2.js")
const quizModel = require("../models/Quiz-Model.js")
const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/quizdb")
    .then(async() => {
        console.log("local db is connected");
    }
)
    .catch((error) => console.log(error.message));
};

module.exports = dbConnect;
