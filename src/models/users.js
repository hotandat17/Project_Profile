import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    dataTime: {
        type: String,
        default: new Date(),
    },
});

export const User = mongoose.models['users'] || mongoose.model('users', userSchema);
