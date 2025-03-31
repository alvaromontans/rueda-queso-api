import { getPizzas, PizzaModel } from "../db/pizzas";
import { Request, Response } from 'express';

export const getAllPizzas = async (req: Request, res: Response): Promise<void> => {
    try {
        const pizzas = await getPizzas();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo pizzas' });
    }
};
