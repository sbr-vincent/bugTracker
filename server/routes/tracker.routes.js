const TrackerController = require("../controllers/tracker.controllers")

module.exports = app => {
    // List of routes will be used here
    // Example
    app.get("/api/users", TrackerController.allUsers)
    app.post("/api/users", TrackerController.createUser)
    app.post("/api/bug", TrackerController.createBug)
    app.get("api/bug", TrackerController.allBugs)
    app.get("api/bug/:id", TrackerController.oneBug)
    app.put("api/bug/:id/edit", TrackerController.updateBug)
    app.delete("api/bug/:id", TrackerController.deleteBug)
}