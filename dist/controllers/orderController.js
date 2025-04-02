"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrderById = exports.getOrderById = exports.getAllOrders = exports.createNewOrder = void 0;
const orders_1 = require("../db/orders");
/**
 * Crear un nuevo pedido
 * @param {Request} req
 * @param {Response} res
 */
const createNewOrder = async (req, res) => {
    try {
        const order = await (0, orders_1.createOrder)(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el pedido' });
        console.log(error);
    }
};
exports.createNewOrder = createNewOrder;
/**
 * Obtener todos los pedidos
 * @param {Request} req
 * @param {Response} res
 */
const getAllOrders = async (req, res) => {
    try {
        const orders = await (0, orders_1.getOrders)();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
};
exports.getAllOrders = getAllOrders;
/**
 * Obtener un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
const getOrderById = async (req, res) => {
    try {
        const { order_id } = req.params;
        const order = await (0, orders_1.getByOrderId)(order_id);
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};
exports.getOrderById = getOrderById;
/**
 * Actualizar un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
const updateOrderById = async (req, res) => {
    try {
        const { order_id } = req.params;
        const updatedOrder = await (0, orders_1.updateByOrderId)(order_id, req.body);
        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        }
        else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el pedido' });
    }
};
exports.updateOrderById = updateOrderById;
/**
 * Eliminar un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
const deleteOrder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const deletedOrder = await (0, orders_1.deleteOrderByOrderId)(order_id);
        res.json(deletedOrder);
    }
    catch (error) {
        console.log(error);
        res.status(400);
    }
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orderController.js.map