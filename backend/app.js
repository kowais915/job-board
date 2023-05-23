const express = require("express");
const mongoose = require("mongoose");

// imports from other directories
const router = require("./routes/apiRoutes");

const app = express();

// middle wares
app.use(express.json());
app.use("/api", router);


app.listen(5000, ()=>{
  console.log("Server is running on port 5000")
  
})



app.get("/", (req, res )=>{
  res.json({
    msg: "The server is up and running. You are on the root page."
  })
})

