const mongoose = require("mongoose");
const express = require("express");

const Schema = mongoose.Schema;

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    
    }, 
    description: {
        type: String,
        required: true
    },
    
}, {timestamps: true})

module.exports = mongoose.model("Job", JobSchema);