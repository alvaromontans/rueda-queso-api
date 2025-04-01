/**
 * Controller para obtener todas las pizzas
 */
import { getPizzas, PizzaModel } from "../db/pizzas";
import { Request, Response } from 'express';

/**
 * Obtiene todas las pizzas
 * @param {Request} req
 * @param {Response} res
 */
export const getAllPizzas = async (req: Request, res: Response): Promise<void> => {
    try {
        const pizzas = await getPizzas();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo pizzas' });
    }
};
