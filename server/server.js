//Import Express and create an instance of express server
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//Connect Mongoose to MongoDB
require("./config/mongoose.config")

//Configure your server 
app.use(cors())
app.use(express.json()) //This helps to return in json format all the time
app.use(express.urlencoded({extended: true})) // Helps with pull requests

//Attach routes to your express server
const trackerRoutes = require("./routes/tracker.routes")
trackerRoutes(app)
//Run your express server
app.listen(port, () => console.log(`EXPRESS SERVER RUNNING ON ${port}`)) // Executes and starts up the server




