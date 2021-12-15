const express = require('express');
const Attribute = require('../../models/Attribute.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//create new attribute
router.post("/create", async (req, res) => {
    const attribute = await Attribute.findOne({name: req.body.name});

    if (attribute) {
        return res.status(400).send({
            message: "The attribute has already been created"
        })
    }
    else {
        const newAttribute = new Attribute(req.body)
        newAttribute.save().catch(err => console.log(err));
        return res.status(201).send(newAttribute);
    }
});

//Get attribute by ID
router.get("/get/:id", async (req, res) => {
    const attribute = await Attribute.findOne({id: req.params.id});
    console.log(attribute);
    if (!attribute) {
        res.status(400).send({
            message: "You sent an invalid id."
        })
    }
    else{
        return res.status(200).send(attribute);
    }
});

//Edit attribute by id
router.put('/edit/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    User.findOneAndUpdate(query, {
        email: req.body.email,
        username: req.body.username,
        status: req.body.status
    }).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found. cannot update!'
            })
        } else {
            res.status(200).send(user);
        }
    })
    .catch(err => res.status(400).json(err));
});

//Delete Attribute by id
router.delete('/delete/:id', async (req, res) => {
    
    var query = {id: req.body.id};

    Attribute.findOne(query).then(attribute => {
        if (!attribute) {
            res.status(404).send({
                message: 'Attribute not found, cannot delete!'
            })
        } else {
        attribute.remove().then(() => res.status(200).send({
            message: 'Deleted attribute with the name: ' + req.body.name
        }))
    }}).catch(err => res.status(400).json(err));
})



module.exports = router;