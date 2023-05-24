const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
PORT = process.env.PORT || 5000;


// imports from other directories
const router = require("./routes/apiRoutes");

const app = express();

// middle wares
app.use(express.json());
app.use("/api", router);


// connect to the database
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to the database.")
    // start the server
    
      app.listen(PORT, ()=>{
        console.log("Server is running on port 5000")
        
      })
})
.catch((err)=>{
    console.log("Error: ", err.message)
})




app.get("/", (req, res )=>{
  res.json({
    msg: "The server is up and running. You are on the root page."
  })
})

