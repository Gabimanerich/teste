"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo_1 = require("./Zoo");
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nome = '';
        return _this;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return Animal;
}(Zoo_1.Zoo));
exports.Animal = Animal;
