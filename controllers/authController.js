const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');
const jwt = require('jsonwebtoken');


// bcrypt configuration
const saltRounds = 10;

const JWT_SECRET = process.env.JWT_SECRET || '89ads1n29045321n9sa(*Qsdj'; 


const register = async (req, res) => {
   try {
       const { username, email, password } = req.body;

       // Validate input
       if (!username || !email || !password) {
           return res.status(400).json({ message: 'Please provide all required fields' });
       }


       //checking if user already exists
       const existingUser = await User.findOne({ $or: [{ email }, { username }] });
       if (existingUser) {
           return res.status(400).json({ message: 'Email or username already in use' });
       }

       // Hash the password
       const hashedPassword= await bcrypt.hash(password, saltRounds);
   
        

       // Create a new user
       const user = await User.create({ username, email, password: hashedPassword })
         if (!user) {
              return res.status(500).json({ message: 'Error creating user' });
         }
       res.status(201).json({message:"user created!",user})
   } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Server error' });
   }
}

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if ((!email && !username) || !password) {
            return res.status(400).json({ message: 'Username or email and password are required' });
        }
        const findUser = await User.findOne({ $or: [{ email }, { username }] })
        if (!findUser) return res.status(400).json({ message: "User Don't Exist!, Sign up first" })
   
        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }
      

        // Generating Token 
        const token = jwt.sign({ userId: findUser._id, email: findUser.email }, JWT_SECRET,{expiresIn:"1d"})

          

        // Set token in cookie (httpOnly for security)
        res.cookie('token', token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }).status(200).json({ message: 'Login success', token });
        
        const { password: _, ...safeUser } = findUser.toObject(); //removing password before sending user
        // Logic to handle successful login (e.g., generating a token)
        res.status(200).json({ message: 'User logged in successfully', user: safeUser });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
}


const logout = async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
}


module.exports = {
    registerUser: register,
    loginUser: login,
    logoutUser: logout
};