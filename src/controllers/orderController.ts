import { Request, Response } from 'express';
import { createOrder, deleteOrderByOrderId, updateByOrderId, getByOrderId, getOrders } from "db/orders";

/**
 * Crear un nuevo pedido
 * @param {Request} req
 * @param {Response} res
 */
export const createNewOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        const order = await createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el pedido' });
        console.log(error);
    }
};

/**
 * Obtener todos los pedidos
 * @param {Request} req
 * @param {Response} res
 */
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
};

/**
 * Obtener un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { order_id } = req.params;
        const order = await getByOrderId(order_id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};

/**
 * Actualizar un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
export const updateOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { order_id } = req.params;
        const updatedOrder = await updateByOrderId(order_id, req.body);
        if (updatedOrder) {
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el pedido' });
    }
};

/**
 * Eliminar un pedido por id
 * @param {Request} req
 * @param {Response} res
 */
export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { order_id } = req.params;
        const deletedOrder = await deleteOrderByOrderId(order_id);

        res.json(deletedOrder);
    }
    catch (error) {
        console.log(error);
        res.status(400);
    }
}
