const express = require('express');
const Metrics= require('../models/metrics.cjs'); // Adjust the path as necessary

const router = express.Router();

router.get("/", async (req, res) => {
   try {
       const response = await Metrics.find({})
           .sort({ timestamp: -1 }) // Tri par timestamp en ordre décroissant
           .limit(50); // Limite à 24 résultats
       res.json(response);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
});


module.exports = router;