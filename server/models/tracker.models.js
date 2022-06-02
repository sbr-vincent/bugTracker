//Mongoose is a library that allows us to create a schema for MongoDB
const mongoose = require("mongoose")

//Defining the schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long."]
    },
}, {timestamps: true})

const BugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long."]
    },
    comment: {
        type: String,
        required: [true, "Please leave a comment about the bug."],
    },
    priority: {
        type: String,
        required: [true, "Please choose the priority level."],
    },
    resolved: {
        type: Boolean
    },
}, {timestamps: true})

//Registering the schema
module.exports.Bug = mongoose.model("Bug", BugSchema)
module.exports.User = mongoose.model("User", UserSchema)