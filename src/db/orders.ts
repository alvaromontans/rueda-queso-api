import mongoose, { Schema } from "mongoose";

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

export const OrderModel = mongoose.model("order", OrderSchema);

export const getOrders = () => OrderModel.find();
export const createOrder = (values: Record<string, any>) => new OrderModel(values)
    .save().then((order) => order.toObject());
export const getByOrderId = (order_id: string) => OrderModel.findOne({ order_id });
export const updateByOrderId = (order_id: string, values: Record<string, any>) =>
    OrderModel.updateOne({ order_id }, values);
export const deleteOrderByOrderId = (order_id: string) => OrderModel.findOneAndDelete({ order_id })
