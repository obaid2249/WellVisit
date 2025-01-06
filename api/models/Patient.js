const mongoose = require('mongoose');

// Define the Patient schema
const patientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    contactInfo: {
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    medicalHistory: [
        {
            condition: { type: String, required: true },
            dateDiagnosed: { type: Date }
        }
    ],
    appointments: [
        {
            appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' } // Reference to Appointment model
        }
    ]
}, { timestamps: true });

// Export the Patient model
module.exports = mongoose.model('Patient', patientSchema);
