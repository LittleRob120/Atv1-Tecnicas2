"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get getDdd() {
        return this.ddd;
    }
    get getNumero() {
        return this.numero;
    }
    set setDdd(valor) {
        this.ddd = valor;
    }
    set setNumero(valor) {
        this.numero = valor;
    }
    // Implementação do padrão Protótipo para Telefone
    clonar() {
        return new Telefone(this.ddd, this.numero);
    }
}
exports.default = Telefone;
