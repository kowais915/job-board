const express = require("express");
const router = express.Router();
const {
    getAllJobs,
    postAJob,
    updateAJob,
    getAJob,
    deleteAJob

} = require("../controller/jobController.js");

// @route   GET api/test

router.get("/", getAllJobs)


// post a job

router.post("/", postAJob )

// delete a job
router.delete("/:id", deleteAJob)


// update a job
router.patch("/:id", updateAJob)


// get a job
router.get("/:id", getAJob)

module.exports = router;