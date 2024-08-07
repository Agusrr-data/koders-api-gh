const express = require("express");

const router = express.Router();

router.use((request, response, next) => {
    console.log("Middleware de router koders");
    next();
});

// Ppodemos montar otros routers, ejempmplo:
//router.use("/attendance", attendanceRouter);

// GET /koders
router.get("/", (request, response, next) => {
    console.log("GET koders middleware");
    next();
}, (request, response) => {
    response.json({ message: "GET koders"});
});

// POST /koders
router.post("/", (request, response) => {
    response.json({ message: "POSTS koders"});
});

// DELETE /koders/:name
router.delete("/:name" , (request, response) => {
    response.json({ message: "DELETE koders"});
});
 

module.exports = router;



