// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { ProductController } from '../controllers/productcontroller';
//import passport from 'passport';

const router = Router();
const productcontroller = new ProductController();
//const authenticateJwt = passport.authenticate('jwt', { session: false });

router.get('/:id', async (req, res) => productcontroller.getProductById(req, res));
router.get('/name/:name', async (req, res) => productcontroller.getProductByName(req, res));
router.get('/', async (req, res) => productcontroller.getAllProduct(req, res));
router.post('/', async (req, res) => productcontroller.createProduct(req, res));
router.put('/:id', async (req, res) => productcontroller.updateProduct(req, res));
router.delete('/:id', async (req, res) => productcontroller.deleteProduct(req, res));

export default router;