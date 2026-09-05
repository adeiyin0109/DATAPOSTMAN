import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    RegNo:{
        type: Number,
        required: true
    } 
});

const userModel= mongoose.model('User', userSchema);
export default userModel;
