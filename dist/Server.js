"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var helmet_1 = __importDefault(require("helmet"));
var express_1 = __importDefault(require("express"));
var http_status_codes_1 = require("http-status-codes");
var Logger_1 = __importDefault(require("./shared/Logger"));
var morgan_1 = __importDefault(require("morgan"));
var QuotsController_1 = __importDefault(require("./controller/QuotsController"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use((0, helmet_1.default)());
}
app.use('/api/quot', QuotsController_1.default);
app.use(function (err, req, res, next) {
    Logger_1.default.error(err.message, err);
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        error: err.message,
    });
});
exports.default = app;
//# sourceMappingURL=Server.js.map