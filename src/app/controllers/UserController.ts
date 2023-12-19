import { Request, Response } from 'express';
import UserRepository from "../repositories/UserRepository";

class UserController {
    async index(req: Request, res: Response) {
        const result = await UserRepository.findAll();
        res.json(result);
    };
    
    async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await UserRepository.findById(id);
        res.json(result);
    };

    async store(req: Request, res: Response) {
        const result = await UserRepository.create(req.body);
        res.json(result);
    };

    async update(req: Request, res: Response)  {
        const id = parseInt(req.params.id);
        const result = await UserRepository.update(id, req.body);
        res.json(result);
    };

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await UserRepository.delete(id);
        res.json(result);
    };
}

export default new UserController();
