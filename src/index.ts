import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

/**
 * @description API para manipular pedidos y pizzas
 * @author Alvaro Montáns
 * @version 1.0.0
 * @license MIT
 * @see https://github.com/alvaromontans/api-pizza
 */

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use('/rueda-queso', routes);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Servidor alojado en http://localhost:8080/");
});

const MONGO_URL = "mongodb+srv://alvaro:RUvEkr2AWcWnggUa@clusterpizza.onrbwue.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPizza";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));