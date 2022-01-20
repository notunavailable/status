const express = require('express');
const LevelProgression = require('../../models/LevelProgression.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//create level
router.post("/create", async (req, res) => {
    const levelProgression = await LevelProgression.findOne({id: req.body.id});

    if (levelProgression) {
        return res.status(400).send({
            message: "The level progression already exists"
        })
    }
    else {
        const newLevelProgression = new LevelProgression(req.body)
        newLevel.save().catch(err => console.log(err));
        return res.status(201).send(newLevelProgression);
    }
});

//Get User
router.get("/get/:id", async (req, res) => {
    const levelProgression = await LevelProgression.findOne({id: req.params.id});
    console.log(levelProgression);
    if (!levelProgression) {
        res.status(400).send({
            message: "You sent an invalid id."
        })
    }
    else{
        return res.status(200).send(levelProgression);
    }
});

//Edit level by id
router.put('/edit/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    LevelProgression.findOneAndUpdate(query, {
        name: req.body.name,
        nextEXP: req.body.nextEXP
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