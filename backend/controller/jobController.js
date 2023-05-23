

// get all jobs
function getAllJobs(req, res ){
    res.json({
        msg: "Here are all the jobs."
    })
}


// post a job
function postAJob(req, res){

    res.json({
        msg: "You posted a job."
    })

}


// delete a job


// update a job

// get a job




module.exports = {
    getAllJobs,
    postAJob
}