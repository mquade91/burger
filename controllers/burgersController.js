//config/connection.js

var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//GET route to get burger data
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST route to create burger 
router.post("/api/burgers", function(req, res) {
    burger.create([
       "burger_name", "devoured"
       ], [
          req.body.name, req.body.devoured
            ], function(result) {
        //send back ID of new burger
        res.json({ id: result.insertId });
    });
});


//PUT route to update burger status
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            //if no rows changed, then the ID must not exist so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//DELETE  burger route
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});
//exporting the routes
module.exports = router;
