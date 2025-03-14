const express = require("express");
const router = express.Router();
const Student = require("../models/studentsModel");

router.post("/", async (req, res) => {
    const {name,surname} = req.body;
    await Student.create({name, surname});
    res.json();
});

module.exports = router;