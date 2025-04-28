const { generateOTP } = require('otp-generator-bro');

console.log(generateOTP(6, { type: 'numeric' }));       // e.g., 392047
console.log(generateOTP(6, { type: 'alphabet' }));      // e.g., aBdEfG
console.log(generateOTP(8, { type: 'alphanumeric' }));  // e.g., a1b2c3D4
