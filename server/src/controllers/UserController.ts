import { Request, Response } from 'express';
import { User } from '../models/User'; // Sequelize modelini import ediyoruz

class UserController {
    // Kullanıcıları listele
    public async listUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).send({
                message: 'Error retrieving users',
                details: error.message
            });
        }
    }

    // Kullanıcı oluştur
    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).send({
                message: 'Error creating user',
                details: error.message
            });
        }
    }

    // Kullanıcı bilgilerini güncelle
    public async updateUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await User.update(req.body, { where: { id } });
            if (updated) {
                const updatedUser = await User.findOne({ where: { id } });
                res.status(200).json(updatedUser);
            } else {
                res.status(404).send({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).send({
                message: 'Error updating user',
                details: error.message
            });
        }
    }

    // Kullanıcı sil
    public async deleteUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await User.destroy({ where: { id } });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).send({
                message: 'Error deleting user',
                details: error.message
            });
        }
    }
}

export default new UserController();
