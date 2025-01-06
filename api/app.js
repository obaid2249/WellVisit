const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const errorHandler = require('./middlewares/errorHandler');

// Import routes
const patientRoutes = require('./routes/patient');
const authRoutes = require('./routes/auth');
const doctorRoutes=require('./routes/doctor');
const appointmentRoutes=require("./routes/appointment")
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patient',patientRoutes);
app.use('/api/appointment',appointmentRoutes)
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});