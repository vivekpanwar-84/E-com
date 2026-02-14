import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default: {},
    },
    
}, { minimize: false });
// { minimize: false } is used to store empty objects in MongoDB

const User = mongoose.model("User", userSchema) || mongoose.model.User;
export default User;
