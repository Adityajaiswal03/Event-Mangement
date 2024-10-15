import mongoose from "mongoose";
import validator from "validator";

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name should be atleast 3 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    subject: {
        type: String,
        required: [true, "Subject is required"],
        minLength: [3, "Subject should be atleast 3 characters long"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minLength: [10, "Message should be atleast 10 characters long"],
    }
});

export const  Message=mongoose.model("Message", MessageSchema);