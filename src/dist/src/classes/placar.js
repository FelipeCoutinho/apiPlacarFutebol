"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Placar = /** @class */ (function () {
    function Placar() {
    }
    Placar.prototype.Placar = function (n) {
        this.nome = n;
    };
    Placar.prototype.mudaNome = function (nome) {
        var n = "123-" + nome;
        return n;
    };
    return Placar;
}());
exports.default = Placar;
//# sourceMappingURL=placar.js.map