const express = require('express');
const Skill = require('../../models/Skill.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//create new skill
router.post("/create", async (req, res) => {
    const skill = await Skill.findOne({ name: req.body.name });

    if (skill) {
        return res.status(400).send({
            message: "The skill has already been created"
        })
    }
    else {
        const newSkill = new Skill(req.body)
        newSkill.save().catch(err => console.log(err));
        return res.status(201).send(newSkill);
    }
});

//Get skill by ID
router.get("/get/id:id", async (req, res) => {
    const skill = await Skill.findOne({ id: req.params.id });
    console.log(skill);
    if (!skill) {
        res.status(400).send({
            message: "You sent an invalid id."
        })
    }
    else {
        return res.status(200).send(skill);
    }
});

//Get all skills
router.get('/get/all', async (req, res) => {

    const skills = await Skill.find();

    if (skills.length == 0) {
        return res.status(404).send({ message: 'No skills found' })
    } else {
        return res.status(201).send(skills);
    }
})

//Edit skill by id
router.put('/edit/id:id', async (req, res) => {

    var query = { id: req.body.id };

    Skill.findOneAndUpdate(query, {
        name: req.body.name,
        description: req.body.description,
        affectedAttributes: req.body.affectedAttributes,
        milestones: req.body.milestones
    }).then(skill => {
        if (!skill) {
            res.status(404).send({
                message: 'Skill not found. cannot update!'
            })
        } else {
            res.status(200).send(skill);
        }
    })
        .catch(err => res.status(400).json(err));
});

//Delete skill by id
router.delete('/delete/id:id', async (req, res) => {

    var query = { id: req.body.id };

    Skill.findOne(query).then(skill => {
        if (!skill) {
            res.status(404).send({
                message: 'Skill not found, cannot delete!'
            })
        } else {
            skill.remove().then(() => res.status(200).send({
                message: 'Deleted skill with the name: ' + req.body.name
            }))
        }
    }).catch(err => res.status(400).json(err));
})

module.exports = router;