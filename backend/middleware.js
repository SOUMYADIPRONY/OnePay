const JWT_SECRET= "secret"
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    console.log('Entering authentication')
    const authHeader = req.headers.authorization;
    console.log('Headers receivered')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log("Headers wrong")
        return res.status(401).json({message: 'Authorization header missing or malformed' });
        
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded)
        if (decoded.userId){  
          req.userId = decoded.userId;  
          next();
        }
        else{
            return res.status(403).json({message: "Unable to fetch balance"});
        }
        

        
    } catch (err) {
        console.log("Here")
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
    authMiddleware
}