"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pizzaController_1 = require("./controllers/pizzaController");
const orderController_1 = require("./controllers/orderController");
const routes = express_1.default.Router();
routes.get('/menu', pizzaController_1.getAllPizzas);
routes.get('/orders', orderController_1.getAllOrders);
routes.post('/order', orderController_1.createNewOrder);
routes.get('/order/:order_id', orderController_1.getOrderById);
routes.patch('/order/:order_id', orderController_1.updateOrderById);
routes.delete('/order/:order_id', orderController_1.deleteOrder);
exports.default = routes;
//# sourceMappingURL=routes.js.map