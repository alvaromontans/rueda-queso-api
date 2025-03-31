import mongoose, { Schema } from "mongoose";

const CartSchema: Schema = new Schema({
    pizza_id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit_price: { type: Number, required: true },
    total_price: { type: Number, required: true },
});

export const CartModel = mongoose.model("cart", CartSchema);

export const createCart = (values: Record<string, any>) => new CartModel(values)
    .save().then((cart) => cart.toObject());
