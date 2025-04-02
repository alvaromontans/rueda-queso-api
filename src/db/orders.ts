import mongoose, { Schema, Document, UpdateWriteOpResult } from "mongoose";

interface Cart {
    pizzaId: string;
    name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
}

export interface OrderDocument extends Document {
    order_id: string;
    address: string;
    cart: Cart[];
    customer: string;
    phone: string;
    position: string;
    priority: boolean;
    estimated_delivery: string;
    order_price: number;
    priority_price: number;
    status: string;
}

const CartSchema: Schema = new Schema({
    pizzaId: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit_price: { type: Number, required: true },
    total_price: { type: Number, required: true }
});

const OrderSchema: Schema = new Schema({
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

export const OrderModel = mongoose.model<OrderDocument>("order", OrderSchema);

/**
 * Obtener todos los pedidos
 * @returns {Promise<OrderDocument[]>}
 */
export const getOrders = (): Promise<OrderDocument[]> => OrderModel.find().select('-_id');

/**
 * Crear un nuevo pedido
 * @param {Record<string, any>} values - Order values
 * @returns {Promise<OrderDocument>}
 */
export const createOrder = (values: Record<string, any>): Promise<OrderDocument> => new OrderModel(values)
    .save().then((order) => order.toObject());

/**
 * Obtener un pedido por id
 * @param {string} order_id - Order ID
 * @returns {Promise<OrderDocument | null>}
 */
export const getByOrderId = (order_id: string): Promise<OrderDocument | null> => OrderModel.findOne({ order_id });

/**
 * Actualizar un pedido por id
 * @param {string} order_id - Order ID
 * @param {Record<string, any>} values - Order values
 * @returns {Promise<UpdateWriteOpResult>}
 */
export const updateByOrderId = (order_id: string, values: Record<string, any>): Promise<UpdateWriteOpResult> =>
    OrderModel.updateOne({ order_id }, values);

/**
 * Eliminar un pedido por id
 * @param {string} order_id - Order ID
 * @returns {Promise<OrderDocument | null>}
 */
export const deleteOrderByOrderId = (order_id: string): Promise<OrderDocument | null> => OrderModel.findOneAndDelete({ order_id });
