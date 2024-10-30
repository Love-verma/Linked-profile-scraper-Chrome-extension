const express = require('express')
const router = express.Router();
const Profile = require('../models/Profile');


router.post('/profile', async (req, res) =>{
    try {
        console.log(req.body);
        
        const { name, url, about, bio, location, followerCount, connectionCount } = req.body;

        const profile = await Profile.create({
            name,
            url,
            about,
            bio,
            location,
            followerCount,
            connectionCount,     

        });

        res.status(201).json({message:"Profile saved successfully", profile});

    } catch (error) {
        res.status(500).json({error: "Failed to save profile"});
    }
})


module.exports = router;

