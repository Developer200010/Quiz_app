const router = require("express").Router()
const QuizModel = require("../models/Quiz-Model")

router.get("/", async (req,res)=>{
    console.log("inside route")
    try {
        const quizData = await QuizModel.find();
        res.status(200).json(quizData);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"there is an error!"})
    }
})

module.exports = router