const express = require('express');
const Level = require('../../models/Level.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//create level
router.post("/create", async (req, res) => {
    const level = await Level.findOne({id: req.body.id});

    if (level) {
        return res.status(400).send({
            message: "The level already exists"
        })
    }
    else {
        const newLevel = new Level(req.body)
        newLevel.save().catch(err => console.log(err));
        return res.status(201).send(newLevel);
    }
});

//Get User
router.get("/get/id:id", async (req, res) => {
    const level = await Level.findOne({id: req.params.id});
    console.log(level);
    if (!level) {
        res.status(400).send({
            message: "You sent an invalid id."
        })
    }
    else{
        return res.status(200).send(level);
    }
});

//Edit level by id
router.put('/edit/id:id', async (req, res) => {
    
    var query = {id: req.body.id};

    User.findOneAndUpdate(query, {
        currentLevel: req.body.currentLevel,
        exp: req.body.exp,
    }).then(level => {
        if (!level) {
            res.status(404).send({
                message: 'User not found. cannot update!'
            })
        } else {
            res.status(200).send(level);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Edit level by id
router.put('/edit/addEXP/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    User.findOneAndUpdate(query, {
        exp: req.body.exp,
    }).then(level => {
        if (!level) {
            res.status(404).send({
                message: 'User not found. cannot update!'
            })
        } else {
            res.status(200).send(level);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Delete level by id
router.delete('/delete/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Level.findOne(query).then(level => {
        if (!level) {
            res.status(404).send({
                message: 'Level not found, cannot delete!'
            })
        } else {
        level.remove().then(() => res.status(200).send({
            message: 'Deleted level with the current level: ' + req.body.currentLevel
        }))
    }}).catch(err => res.status(400).json(err));
})

module.exports = router;