
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');


exports.createAppointment = async (req, res) => {
    try {
        const { doctorId, availabilitySlot, notes } = req.body;
        const patientId = req.user._id; // Assuming `req.user` has patient information from middleware.
       

        // Fetch doctor availability
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Check if the requested slot is part of the doctor's availability
        const isValidSlot = doctor.availability.some(slot => 
            slot.day === availabilitySlot.day && slot.time === availabilitySlot.time
        );

        if (!isValidSlot) {
            return res.status(400).json({ message: 'Invalid availability slot' });
        }

        // Create the appointment
        const appointment = new Appointment({
            patientId,
            doctorId,
            availabilitySlot,
            status: 'Scheduled',
            notes
        });
        console.log(appointment);
        await appointment.save();
        res.status(201).json({ message: 'Appointment scheduled successfully', appointment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const appointment = await Appointment.findById(id)
            .populate('patientId', 'name age') // Ensure that the correct path is populated
            .populate('doctorId', 'name specialization'); // Ensure doctor is populated correctly

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Update an appointment
exports.updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const appointment = await Appointment.findByIdAndUpdate(id, updates, { new: true });

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment updated successfully', appointment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const appointment = await Appointment.findByIdAndDelete(id);

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all appointments for a specific patient
exports.getAppointmentsByPatient = async (req, res) => {
    try {
        const { patientId } = req.params;

        const appointments = await Appointment.find({ patientId })
            .populate('doctorId', 'name specialization');

        if (!appointments.length) {
            return res.status(404).json({ message: 'No appointments found for this patient' });
        }

        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all appointments for a specific doctor
exports.getAppointmentsByDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;

        const appointments = await Appointment.find({ doctorId })
            .populate('patientId', 'name age');

        if (!appointments.length) {
            return res.status(404).json({ message: 'No appointments found for this doctor' });
        }

        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
