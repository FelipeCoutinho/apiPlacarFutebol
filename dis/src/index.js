"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var server_1 = require("./confg/server");
var router_1 = require("../router");
server_1.default.use(router_1.default);
server_1.default.listen(3000, function () { console.log("server on"); });
typeorm_1.createConnection();
//# sourceMappingURL=index.js.map