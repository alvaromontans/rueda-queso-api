import express from 'express';
import { getAllPizzas } from './controllers/pizzaController';
import { createNewOrder, deleteOrder, getAllOrders, getOrderById, updateOrderById } from './controllers/orderController';

const routes = express.Router();

routes.get('/menu', getAllPizzas);
routes.get('/orders', getAllOrders);
routes.post('/order', createNewOrder);
routes.get('/order/:order_id', getOrderById);
routes.patch('/order/:order_id', updateOrderById);
routes.delete('/order/:order_id', deleteOrder);

export default routes;
