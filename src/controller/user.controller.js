import User from "../models/User.model.js";
import userService from "../service/user.service.js"

const userList = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
}
const userDetail = async (req, res) => {
    try {
        const {id} = req.params;
        console.log('id--------',id);
        
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }   
}

const createUser = async (req, res) => {

    const { name, email, age } = req.body;

    // Validate request
    if (!name || !email || !age) {
        return res.status(400).json({ message: 'Name, email, and age are required' });
    }

    try {
        // Create a new user
        const newUser = new User({ name, email, age });
        console.log(newUser);
        // Save the user to the database
        await newUser.save();

        // Send a success response with the created user
        res.status(201).json(newUser);
    } catch (error) {
        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Catch any other errors
        res.status(500).json({ message: 'Error creating user', error });
    }
};
const addVehicle = async (req, res) => {
    console.log(res.body);
    return false;
    const { name, vehicle_type, vehicle_no } = req.body;
    // Validate request
    if (!name || !vehicle_type || !vehicle_no) {
        return res.status(400).json({ message: 'Name, vehicle_no, and vehicle_type are required' });
    }
    try {
        // Create a new user
        const newUser = new User({ name, vehicle_type, vehicle_no });
        console.log(newUser);
        // Save the user to the database
        await newUser.save();

        // Send a success response with the created user
        res.status(201).json(newUser);
    } catch (error) {
        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Catch any other errors
        res.status(500).json({ message: 'Error creating user', error });
    }
}
export default { userList, userDetail, createUser, addVehicle };