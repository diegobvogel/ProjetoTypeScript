"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OlaMundo = /** @class */ (function () {
    function OlaMundo() {
    }
    OlaMundo.prototype.digaOlaTodos = function () {
        console.log("Olá mundo!!!!");
    };
    return OlaMundo;
}());
exports.OlaMundo = OlaMundo;
var olaMundo = new OlaMundo(); // let declara variável
olaMundo.digaOlaTodos();
