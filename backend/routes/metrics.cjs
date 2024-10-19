const express = require('express');
const Metrics= require('../models/metrics.cjs'); // Adjust the path as necessary

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const response=await Metrics.find({});
        res.json(response);
     }catch(err){
        res.json(err)
     }
});



module.exports = router;