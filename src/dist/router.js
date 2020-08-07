"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var placar_controller_1 = require("./src/controllers/placar/placar_controller");
var express_1 = require("express");
var Routes = express_1.Router();
Routes.get('/', placar_controller_1.getPartida);
Routes.post('/create', placar_controller_1.createPartida);
Routes.delete('/delete/:id', placar_controller_1.deletePartida);
exports.default = Routes;
//# sourceMappingURL=router.js.map