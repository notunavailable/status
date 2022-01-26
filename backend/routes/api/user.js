const express = require('express');
const User = require('../../models/User.js');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

//User registration
router.post("/register", async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (user) {
        return res.status(400).send({
            message: "The user already registered"
        })
    }
    else {
        const newUser = new User(req.body)
        newUser.save().catch(err => console.log(err));
        return res.status(201).send(newUser);
    }
});

//Get User
router.get("/get/email:email", async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    console.log(user);
    if (!user) {
        res.status(400).send({
            message: "You sent an invalid email."
        })
    }
    else{
        return res.status(200).send(user);
    }
});

//Edit user by id
router.put('/edit/id:id', async (req, res) => {
    
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

//Delete User by id
router.delete('/delete/id:id', async (req, res) => {
    
    var query = {id: req.body.id};

    User.findOne(query).then(user => {
        if (!user) {
            res.status(404).send({
                message: 'User not found, cannot delete!'
            })
        } else {
        user.remove().then(() => res.status(200).send({
            message: 'Deleted user with the username: ' + req.body.username
        }))
    }}).catch(err => res.status(400).json(err));
})

module.exports = router;