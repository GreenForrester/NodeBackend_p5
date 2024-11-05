// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { CustomerController } from '../controllers/customercontroller';
//import passport from 'passport';

//Use passport-jwt strategy defined in authentication.ts 
//const authenticateJwt = passport.authenticate('jwt', { session: false });

const router = Router();
const customerController = new CustomerController();

router.get('/:id', async (req, res) => customerController.getCustomerById(req, res));
router.get('/name/:name', async (req, res) => customerController.getCustomerByName(req, res));
router.get('/', async (req, res) => customerController.getAllCustomer(req, res));
router.post('/', async (req, res) => customerController.createCustomer(req, res));
router.delete('/:id', async (req, res) => customerController.deleteCustomer(req, res));
router.put('/:id', async (req, res) => customerController.updateCustomer(req, res));

export default router;