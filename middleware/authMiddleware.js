const jwt = require('jsonwebtoken');
const  User  = require('../models/userSchema');



const JWT_SECRET = process.env.JWT_SECRET || '89ads1n29045321n9sa(*Qsdj'; 

const verifyUser = async (req, res, next) => { 
    try {
      // Checking if token exist or not
      const token = req.cookies.token
      if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' }) 
      
        const decoded = jwt.verify(token, JWT_SECRET)

        // Optional: Fetch the user from DB (to get fresh info)
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) return res.status(401).json({ message: 'Unauthorized: User not found' });

        
        req.user = user; // Add user data to request for downstream use
        next();
  } catch (error) {
        console.error('Auth Error:', error.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }

}

module.exports = verifyUser;