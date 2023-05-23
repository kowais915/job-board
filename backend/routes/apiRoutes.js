const express = require("express");
const router = express.Router();
const {
    getAllJobs,
    postAJob,

} = require("../controller/jobController.js");

// @route   GET api/test

router.get("/", getAllJobs)


// post a job

router.post("/", postAJob )

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