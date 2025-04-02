import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
import { config } from 'dotenv';

/**
 * @description API para manipular pedidos y pizzas
 * @author Alvaro Montáns
 * @version 1.0.0
 * @license MIT
 * @see https://github.com/alvaromontans/api-pizza
*/

config();
const mongoUrl = process.env.MONGODB_URI;
if (!mongoUrl) {
    throw new Error('MONGO_URL no está definida');
}
const app = express();
app.use(express.json());

app.use(cors({
    origin: "*",
}));

app.use('/api/rueda-queso', routes);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Servidor alojado en http://localhost:3000/");
});


mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on("error", (error: Error) => console.log(error));
export default app;