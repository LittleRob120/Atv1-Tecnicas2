"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    clonar() {
        const clone = new Endereco();
        clone.rua = this.rua;
        clone.bairro = this.bairro;
        clone.cidade = this.cidade;
        clone.estado = this.estado;
        clone.pais = this.pais;
        clone.codigoPostal = this.codigoPostal;
        return clone;
    }
}
exports.default = Endereco;
