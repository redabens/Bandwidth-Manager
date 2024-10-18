const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const metricSchema = new mongoose.Schema({
        clientID: {
            type: String,
            required: true
        },
        bw_requested: {
            type: String,
            required: true
        },
        timestamp: { type: Date, default: Date.now }
    });

const Metric = mongoose.model('Metric', metricSchema); // Export the model
module.exports = Metric;