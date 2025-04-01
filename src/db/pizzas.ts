import mongoose, { Document, Model, Schema } from "mongoose";

export interface PizzaDocument extends Document {
    image_url: string;
    name: string;
    ingredients: string[];
    sold_out: boolean;
    unit_price: number;
}

const PizzaSchema = new Schema<PizzaDocument>({
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    sold_out: { type: Boolean, required: true },
    unit_price: { type: Number, required: true },
});

export const PizzaModel = mongoose.model<PizzaDocument>("pizza", PizzaSchema);

/**
 * Obtiene todas las pizzas
 * @returns {Promise<PizzaDocument[]>}
 */
export const getPizzas = (): Promise<PizzaDocument[]> => PizzaModel.find();