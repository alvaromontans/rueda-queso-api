import mongoose from "mongoose";
import { Schema } from "mongoose";

const PositionSchema: Schema = new Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    status: { type: String, required: true },
    position: { type: PositionSchema, required: true },
    address: { type: String, required: true },
});

export const UserModel = mongoose.model("user", UserSchema);

export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save().then((user) => user.toObject());

export const deleteUserById = (id: number) => UserModel.findByIdAndDelete({ _id: id })
