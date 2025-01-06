const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const auth = require('../middlewares/auth');

router.post('/', auth, doctorController.createDoctor);
router.get('/', doctorController.getDoctors);

module.exports = router;
