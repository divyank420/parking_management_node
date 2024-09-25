import mongoose from "mongoose";
import VehicleSchema from "./Vehicle.model.js";

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
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    vehicles: [VehicleSchema]
});

const User = mongoose.model('User', userSchema);

export default User;