const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    contactInfo: {
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    availability: [
        {
            day: { type: String, required: true },
            time: { type: String, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
