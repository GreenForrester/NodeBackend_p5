// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/usercontroller'
//import passport from 'passport';

//middleware function
//const authenticateJwt = passport.authenticate('jwt', { session: false });

const router = Router();
const userController = new UserController();

router.get('/', async (req, res) => userController.getAllUsers(req, res));
router.get('/id/:id', async (req, res) => userController.getUserById(req, res));
router.get('/name/:name', async (req, res) => userController.getUserByName(req, res));

router.delete('/:id', async (req, res) => userController.deleteUser(req, res));
router.put('/:id', async (req, res) => userController.updateUser(req, res));

//Put login route, disabled JWT and Custom Authentication
//router.post('/login',  async (req, res) => userController.login(req, res));
//router.get('/logout/:id',async (req, res) => userController.logout(req, res));
//router.post('/register', async (req, res) => userController.register(req, res));
//router.post('/refreshtoken',async (req, res) => userController.refreshtoken(req, res));

export default router;