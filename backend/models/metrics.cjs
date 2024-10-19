const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
        clientID: {
            type: String,
            required: true
        },
        bw_requested: {
            type: Number,
            required: true
        },
        IP:{
            type: String,
            required: true
        },
        bytes_requested:{
            type: Number,
            required: true
        },
        bytes_send:{
            type: Number,
            required: true
        },
        timestamp: { type: Date, default: Date.now }
    });

const Metric = mongoose.model('Metric', metricSchema); // Export the model
module.exports = Metric;