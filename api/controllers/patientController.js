const Patient = require('../models/Patient');

// Create a new patient
exports.createPatient = async (req, res) => {
    try {
        const { userId, age, gender, contactInfo, medicalHistory } = req.body;

        const patient = new Patient({
            userId,
            age,
            gender,
            contactInfo,
            medicalHistory
        });

        await patient.save();
        res.status(201).json({ message: 'Patient created successfully', patient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get details of a specific patient
exports.getPatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id).populate('userId', 'name email');

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update patient details
exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({ message: 'Patient updated successfully', patient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a patient record
exports.deletePatient = async (req, res) => {
    try {
        const { id } = req.params;

        const patient = await Patient.findByIdAndDelete(id);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a list of all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find().populate('userId', 'name email');

        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
