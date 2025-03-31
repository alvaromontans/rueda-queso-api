import mongoose, { Schema } from "mongoose";

const PizzaSchema: Schema = new Schema({
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    sold_out: { type: Boolean, required: true },
    unit_price: { type: Number, required: true },
});

export const PizzaModel = mongoose.model("pizza", PizzaSchema);
export const getPizzas = () => PizzaModel.find();