function generateOTP(length = 6, options = { type: 'numeric' }) {
    let characters = '';

    if (options.type === 'numeric') {
        characters = '0123456789';
    } else if (options.type === 'alphabet') {
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (options.type === 'alphanumeric') {
        characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
        throw new Error('Invalid OTP type. Choose numeric, alphabet, or alphanumeric.');
    }

    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += characters[Math.floor(Math.random() * characters.length)];
    }
    return otp;
}

module.exports = { generateOTP };
