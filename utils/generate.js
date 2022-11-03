const jwt = require("jsonwebtoken");

const access = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const refresh = (phoneNumber) => {
    const token = jwt.sign({ phoneNumber }, process.env.REFRESH_JWT_SECRET, {
        expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
    });

    return token;
};


module.exports = { access, refresh };