import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    vehicle_type:{
        type:String,
        required:true
    },
    vehicle_no:{
        type:String,
        required:true
    }
});

export default VehicleSchema;