// import express //
const express = require("express");
// import router //
const router = express.Router();
// collection linked to model in js file //
const SuperHeroCollection = require("../models/superHero");


// router to find superhero //
router.get("/", (request, response) => {
    SuperHeroCollection.find({}, (errors, results) => {
        if(errors){
            response.send(errors)
        }
        else{
            response.send(results)
        }
    });
});
router.get("/SHData", (request, response) => {
    const currentSH = [
        {
            id:1,
            name:"Batman",
            "power.intelligence":400,
            "power.strength":400,
            "power.speed":1000,
            "power.combat":600,
            "power.wealth":89,
            "power.image":"https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=3RkYenfT",

        },
        {
            id:2,
            name:"Superman",
            "power.intelligence":300,
            "power.strength":800,
            "power.speed":1100,
            "power.combat":700,
            "power.wealth":809,
            "power.image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQMLvTVYyHZnVDkWU6uU5YlhlL6-xvq3TGY9cAPW5hlM8196q",
        }

    ];

    SuperHeroCollection.create(currentSH, (errors, results) => {
        if(errors){
            response.send(errors)
        }
        else{
            response.send(results)
        }
    })
});


router.get("/findSH/:id",(request, response) => {
    response.send("finding user requires id")
});


router.get("/addSH", (request, response) => {
    response.send("Adding super hero")
});


router.get("/editSh", (request, response) => {
    response.send("editing user")
});

router.get("/deleteSH", (request, response) => {
    response.send("he cant save the planet ")
});


module.exports=router;