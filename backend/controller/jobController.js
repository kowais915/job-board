const JobModel = require('../models/jobModel');


// get all jobs
function getAllJobs(req, res ){
    res.json({
        msg: "Here are all the jobs."
    })
}


// post a job
async function postAJob(req, res){

    const {title, description} = req.body;

    try{

        const job = await JobModel.create({title, description});
        res.status(200).json(job)

    }catch(err){
        res.status(400).json({error: err.message})
        

    }

   
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