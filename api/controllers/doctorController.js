const Doctor = require('../models/Doctor');

exports.createDoctor = async (req, res) => {
    try {
        const userId = req.user._id; // Extract userId from middleware
        
        const doctor = new Doctor({
            userId: userId,
            specialization: req.body.specialization,
            experience: req.body.experience,
            contactInfo: req.body.contactInfo,
            availability: req.body.availability
        });

        await doctor.save();
        res.status(201).json({ message: 'Doctor profile created successfully', doctor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.getDoctors = async (req, res) => {
    try {
        const { specialization } = req.query; 
        const filter = specialization ? { specialization } : {};

        const doctors = await Doctor.find(filter).populate('userId', 'name email');
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
