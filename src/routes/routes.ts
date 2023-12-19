import { Router } from "express";
import UserController from "../app/controllers/UserController";

const router = Router();

router.get('/', (req, res) => {
    res.send('API RODANDO!');
});
router.get('/users', UserController.index)
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;
