"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPizzas = void 0;
/**
 * Controller para obtener todas las pizzas
 */
const pizzas_1 = require("../db/pizzas");
/**
 * Obtiene todas las pizzas
 * @param {Request} req
 * @param {Response} res
 */
const getAllPizzas = async (req, res) => {
    try {
        const pizzas = await (0, pizzas_1.getPizzas)();
        res.status(200).json(pizzas);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo pizzas' });
    }
};
exports.getAllPizzas = getAllPizzas;
//# sourceMappingURL=pizzaController.js.map