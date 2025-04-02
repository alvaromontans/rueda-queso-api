"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = require("dotenv");
/**
 * @description API para manipular pedidos y pizzas
 * @author Alvaro Montáns
 * @version 1.0.0
 * @license MIT
 * @see https://github.com/alvaromontans/api-pizza
*/
(0, dotenv_1.config)();
const mongoUrl = process.env.MONGODB_URI;
if (!mongoUrl) {
    throw new Error('MONGO_URL no está definida');
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use('/api/rueda-queso', routes_1.default);
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
server.listen(3000, () => {
    console.log("Servidor alojado en http://localhost:3000/");
});
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(mongoUrl);
mongoose_1.default.connection.on("error", (error) => console.log(error));
exports.default = app;
//# sourceMappingURL=index.js.map