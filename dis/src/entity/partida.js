"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Partida = /** @class */ (function () {
    function Partida() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Partida.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Partida.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Partida.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Partida.prototype, "hora", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Partida.prototype, "timeCasa", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Partida.prototype, "timeVisitante", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Partida.prototype, "gols", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Partida.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Partida.prototype, "updated_at", void 0);
    Partida = __decorate([
        typeorm_1.Entity()
    ], Partida);
    return Partida;
}());
exports.default = Partida;
//# sourceMappingURL=partida.js.map