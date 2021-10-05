"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var File = winston_1.transports.File, Console = winston_1.transports.Console;
var logger = (0, winston_1.createLogger)({
    level: 'info',
});
var errorStackFormat = (0, winston_1.format)(function (info) {
    if (info.stack) {
        console.log(info.stack);
        return false;
    }
    return info;
});
var consoleTransport = new Console({
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple(), errorStackFormat()),
});
logger.add(consoleTransport);
exports.default = logger;
//# sourceMappingURL=Logger.js.map