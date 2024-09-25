import { Router } from 'express';
import userRoutes from './user.js';
const router = Router();

const allRoutes = [
    {
        "path":"/user",
        "route":userRoutes
    }
];
router.use('/user',userRoutes);
// console.log('user Route',userRoutes);
// allRoutes.forEach((route)=>{
//     router.use(route.path,route.route);
// });
export default router;