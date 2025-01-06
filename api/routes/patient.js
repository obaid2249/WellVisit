const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const auth = require('../middlewares/auth'); // Authentication middleware

// Routes for patient operations
router.post('/', auth, patientController.createPatient); // Create a new patient
router.get('/:id', auth, patientController.getPatient); // Get details of a specific patient
router.put('/:id', auth, patientController.updatePatient); // Update patient details
router.delete('/:id', auth, patientController.deletePatient); // Delete a patient record
router.get('/', auth, patientController.getAllPatients); // Get a list of all patients

module.exports = router;
