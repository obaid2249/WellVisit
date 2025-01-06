module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: '24h',
    emailConfig: {
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    }
};
