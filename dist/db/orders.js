"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderByOrderId = exports.updateByOrderId = exports.getByOrderId = exports.createOrder = exports.getOrders = exports.OrderModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CartSchema = new mongoose_1.Schema({
    pizzaId: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit_price: { type: Number, required: true },
    total_price: { type: Number, required: true }
});
const OrderSchema = new mongoose_1.Schema({
    order_id: { type: String, unique: true },
    address: { type: String, required: true },
    cart: { type: [CartSchema], required: true },
    customer: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String },
    priority: { type: Boolean, required: true },
    estimated_delivery: { type: String },
    order_price: { type: Number },
    priority_price: { type: Number },
    status: { type: String }
});
exports.OrderModel = mongoose_1.default.model("order", OrderSchema);
/**
 * Obtener todos los pedidos
 * @returns {Promise<OrderDocument[]>}
 */
const getOrders = () => exports.OrderModel.find().select('-_id order_id address customer phone position priority estimated_delivery order_price priority_price status cart.name cart.quantity cart.unit_price cart.total_price');
exports.getOrders = getOrders;
/**
 * Crear un nuevo pedido
 * @param {Record<string, any>} values - Order values
 * @returns {Promise<OrderDocument>}
 */
const createOrder = (values) => new exports.OrderModel(values)
    .save().then((order) => order.toObject());
exports.createOrder = createOrder;
/**
 * Obtener un pedido por id
 * @param {string} order_id - Order ID
 * @returns {Promise<OrderDocument | null>}
 */
const getByOrderId = (order_id) => exports.OrderModel.findOne({ order_id }).select('-_id order_id address customer phone position priority estimated_delivery order_price priority_price status cart.name cart.quantity cart.unit_price cart.total_price');
exports.getByOrderId = getByOrderId;
/**
 * Actualizar un pedido por id
 * @param {string} order_id - Order ID
 * @param {Record<string, any>} values - Order values
 * @returns {Promise<UpdateWriteOpResult>}
 */
const updateByOrderId = (order_id, values) => exports.OrderModel.updateOne({ order_id }, values);
exports.updateByOrderId = updateByOrderId;
/**
 * Eliminar un pedido por id
 * @param {string} order_id - Order ID
 * @returns {Promise<OrderDocument | null>}
 */
const deleteOrderByOrderId = (order_id) => exports.OrderModel.findOneAndDelete({ order_id });
exports.deleteOrderByOrderId = deleteOrderByOrderId;
//# sourceMappingURL=orders.js.map