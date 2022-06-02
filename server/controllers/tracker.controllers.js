const {Bug, User} = require("../models/tracker.models")

module.exports.allUsers = (req, res) => {
    res.json("Hello World")
}

module.exports.createUser = (req, res) => {
    console.log(req.body)
    res.json("POST request")
}

//Create Bug
module.exports.createBug = (req, res) => {
    Bug.create(req.body)
        .then(newBug => res.json(newBug))
        .catch(err => res.status(400).json(err))
}

//Reead Bug
module.exports.allBugs = (req, res) => {
    Bug.find()
        .then(allBugs => res.json(allBugs))
        .catch(err => res.json(err))
}

module.exports.oneBug = (req, res) => {
    const {id} = req.params
    Bug.findOne({_id: id})
        .then(oneBugs => res.json(oneBugs))
        .catch(err => res.status(400).json(err))
}

//Update
module.exports.updateBug = (req, res) => {
    const {id} = req.params
    Bug.findByIdAndUpdate({_id: id}, req.body, {new: true})
        .then(updateBug => res.json(updateBug))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteBug = (req, res) => {
    const {id} = req.params
    Bug.findByIdAndDelete({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}