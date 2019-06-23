const express = require('express');
const router = express.Router();
const User = require('./../models/User');

// Only when user is logged in else 403
router.get('/userinfo', (req, res) => {
    User.findById(req.session.userID, (err, user) => {
        if (err){
            res.status('404');
            res.json({error: 'Cant find user'});
        } else if (user){
            res.status('200');
            res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                availability: user.availability
            })
        }
    })
    
})

module.exports = router;