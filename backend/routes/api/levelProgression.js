const express = require('express');
const LevelProgression = require('../../models/LevelProgression.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//create level
router.post("/create", async (req, res) => {
    const levelProgression = await LevelProgression.findOne({level: req.body.level});

    if (levelProgression) {
        return res.status(400).send({
            message: "The level progression already exists"
        })
    }
    else {
        const newLevelProgression = new LevelProgression(req.body)
        newLevelProgression.save().catch(err => console.log(err));
        return res.status(201).send(newLevelProgression);
    }
});

//Get level by level
router.get("/get/level:level", async (req, res) => {
    const levelProgression = await LevelProgression.findOne({level: req.params.level});
    console.log(levelProgression);
    if (!levelProgression) {
        res.status(400).send({
            message: "You sent an invalid level."
        })
    }
    else{
        return res.status(200).send(levelProgression);
    }
});

router.get("/get/all", async (req, res) => {
    const levelProgression = await LevelProgression.find();

    if (levelProgression.length == 0) {
        return res.status(404).send({ message: 'No level progression found' })
    } else {
        return res.status(201).send(levelProgression);
    }
})

//Edit level by id
router.put('/edit/level:level', async (req, res) => {
    
    var query = {level: req.body.level};

    LevelProgression.findOneAndUpdate(query, {
        level: req.body.level,
        requiredEXP: req.body.requiredEXP
    }).then(levelProgression => {
        if (!levelProgression) {
            res.status(404).send({
                message: 'Level progression not found. cannot update!'
            })
        } else {
            res.status(200).send(levelProgression);
        }
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;