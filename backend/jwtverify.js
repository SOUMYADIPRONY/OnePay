const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRkYTczZTVjNzJlNDRmZjcxY2Y1MWIiLCJpYXQiOjE3MjU4MDIzMzF9.Bg-KOrrWsq2jdCgNwFjDzu-HP1kp1h3MtjNvP7eWkoA'
const JWT_SECRET = 'indiewalletsecret'; // Ensure this matches the signing key

// Verify the token
jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
        console.error('Invalid Token:', err.message);
    } else {
        console.log('Decoded Token:', decoded);
    }
});
