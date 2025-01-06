const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport(config.emailConfig);

exports.sendAppointmentConfirmation = async (userEmail, appointmentDetails) => {
    try {
        await transporter.sendMail({
            from: config.emailConfig.auth.user,
            to: userEmail,
            subject: 'Appointment Confirmation',
            text: `Your appointment has been scheduled for ${appointmentDetails.dateTime}`
        });
    } catch (error) {
        console.error('Email sending failed:', error);
    }
};