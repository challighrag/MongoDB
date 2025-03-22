const express = require("express");
const router = express.Router();
const Student = require("../models/studentsModel");

router.post("/", async (req, res) => {
    const {name,surname} = req.body;
    await Student.create({name, surname});
    res.json();
});
router.get("/", async (req, res) => {
    const data = await Student.find({})
    res.json(data);
})
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Student.findByIdAndDelete(id);
    res.json();
});

module.exports = router;