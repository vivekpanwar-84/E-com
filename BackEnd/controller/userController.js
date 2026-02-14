import dotenv from 'dotenv';
dotenv.config();
import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    console.log(id);
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//***************login user 
const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check for user existence
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}

//***************register user
const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check for user existence
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        //validate email or password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
        }
        if (!name) {
            return res.status(400).json({ success: false, message: "Name is required" });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // save user to database

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        // console.log("data was saved in db", user);

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


//***************admin login
const adminlogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {

            const token = jwt.sign({ email: email, password: password }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ success: true, token });
        } else {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }

}




// const adminlogin = async (req, res) => { 
//     try {
//         const { email, password } = req.body;
// console.log(email , password);
//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//             const token = jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: '1h' });
// console.log(token)
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
// console.log(decodedToken);
//             res.status(200).json({ 
//                 success: true, 
//                 token,
//                 user: { email, password } 
//             });
//         } else {
//             return res.status(400).json({ success: false, message: "Invalid credentials" });
//         }

//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };


// Add to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if (cartData[req.body.itemId]) {
            if (cartData[req.body.itemId][req.body.size]) {
                cartData[req.body.itemId][req.body.size] += 1;
            } else {
                cartData[req.body.itemId][req.body.size] = 1;
            }
        } else {
            cartData[req.body.itemId] = {};
            cartData[req.body.itemId][req.body.size] = 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// get user cart data
const getUserCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// User Profile
const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                cartData: user.cartData // Include cart data if needed
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export { loginuser, registeruser, adminlogin, addToCart, getUserCart, getUserProfile };