 const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const express = require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoute")


const atlas_string = "mongodb+srv://adeyemianuoluwapo97_db_user:adeyemianuoluwapo97_db_user@cluster0.nh5rihi.mongodb.net/cohort8_db?appName=Cluster0"

mongoose.connect(atlas_string)
.then(() => console.log("Database connection successful"))
.catch((err) => console.log("Connection error: ", err));

const app = express()
const port = 5555
//const  compass_string = "mongodb://localhost:27017"
//const atlas_string = "mongodb+srv://adeyemianuoluwapo97_db_user:adeyemianuoluwapo97_db_user@cluster0.nh5rihi.mongodb.net/cohort8_db?appName=Cluster0"

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is active and running")
})
app.use("/students", userRoute)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})