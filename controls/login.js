const express = require('express');
const router = express.Router();
router.use(express.json());
const mongoose = require('mongoose');
const User = require('./../models/User');
const bcrypt = require('bcrypt');


router.post('/login', (req, res) => {
    User.find({email: req.body.email}, (err, docs) => {
        if (docs.length){
            bcrypt.compare(req.body.password, docs[0].password, (err, valid) => {
                if (valid){
                    res.status('200');
                    res.json({message: 'Succesfully loged in!'})
                } if (!valid){
                    res.status('401');
                    res.json({message: 'Wrong email or password'})
                } if (err){
                    res.status('500');
                    res.json({error: 'Internal server error'}); 
                }
            })
        }else if (err) {
            res.status('500');
            res.json({error: 'Internal server error'}); 
        }else{
            res.status('401');
            res.json({message: 'Wrong email or password'})
        }
    })
})

module.exports = router;