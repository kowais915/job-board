

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


// update a job
function updateAJob(req, res){
    res.json({
        msg: "You updated a job."
    })
}

// delete a job
function deleteAJob(req, res){
    res.json({
        msg: "You deleted a job."
    })
}

// get a job
function getAJob(req, res){
    res.json({
        msg: "You got a job."
    })
}



module.exports = {
    getAllJobs,
    postAJob,
    updateAJob,
    getAJob,
    deleteAJob
}