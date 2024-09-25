import express from 'express';
import userController from '../controller/user.controller.js';
const userRoutes = express.Router();



// Define a route for GET /users
userRoutes.get('/', userController.userList);
userRoutes.post('/create', userController.createUser);
userRoutes.get('/:id', userController.userDetail);
userRoutes.post('/:id/vehicle', userController.addVehicle);


export default userRoutes;
