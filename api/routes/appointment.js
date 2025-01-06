const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/auth'); // Authentication middleware

// Appointment routes
router.post('/', auth, appointmentController.createAppointment); // Create a new appointment
router.get('/:id', auth, appointmentController.getAppointment); // Get details of a specific appointment
router.put('/:id', auth, appointmentController.updateAppointment); // Update an appointment
router.delete('/:id', auth, appointmentController.deleteAppointment); // Delete an appointment
router.get('/patient/:patientId', auth, appointmentController.getAppointmentsByPatient); // Get all appointments for a patient
router.get('/doctor/:doctorId', auth, appointmentController.getAppointmentsByDoctor); // Get all appointments for a doctor

module.exports = router;
