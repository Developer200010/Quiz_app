const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  description: String,
  difficulty_level: String,
  duration: Number,
  questions: [
    {
      id: Number,
      description: String,
      options: [
        {
          id: Number,
          description: String,
          is_correct: Boolean
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Quiz", quizSchema);
