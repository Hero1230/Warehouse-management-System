"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// error middlewares
const not_found_1 = __importDefault(require("../middleware/not-found"));
const error_handler_1 = __importDefault(require("../middleware/error-handler"));
// import routes
const productsRouter_1 = require("./productsRouter");
const router = express_1.default.Router();
// routes
router.use("/products", productsRouter_1.router);
router.use(not_found_1.default);
router.use(error_handler_1.default);
// Export the router
exports.default = router;