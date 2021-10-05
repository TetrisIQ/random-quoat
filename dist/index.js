"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("./Server"));
var Logger_1 = __importDefault(require("./shared/Logger"));
var port = Number(process.env.PORT || 3000);
Server_1.default.listen(port, function () {
    Logger_1.default.info('Express server started on port: ' + port);
});
//# sourceMappingURL=index.js.map