const express = require("express");
const router = express.Router();

// @route   GET api/test

router.get("/", (req, res )=>{
    res.json({
        msg: "Here are all the jobs."
    })
})


// post a job

router.post("/", (req, res)=>{

    res.json({
        msg: "You posted a job."
    })

})

// delete a job
router.delete("/:id", (req, res)=>{
    res.json({
        msg: "You deleted a job."
    })
})


// update a job
router.patch("/:id", (req, res)=>{
    res.json({
        msg: "You updated a job."
    })
})


// get a job
router.get("/:id", (req, res)=>{
    res.json({
        msg: "You got a job."
    })
})

module.exports = router;