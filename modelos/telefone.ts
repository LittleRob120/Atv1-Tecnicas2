import Prototipo from '../interfaces/prototipo'

export default class Telefone implements Prototipo<Telefone> {
  private ddd: string
  private numero: string

  constructor(ddd: string, numero: string) {
    this.ddd = ddd
    this.numero = numero
  }

  public get getDdd(): string {
    return this.ddd
  }

  public get getNumero(): string {
    return this.numero
  }

  public set setDdd(valor: string) {
    this.ddd = valor
  }

  public set setNumero(valor: string) {
    this.numero = valor
  }

  // Implementação do padrão Protótipo para Telefone
  public clonar(): Telefone {
    return new Telefone(this.ddd, this.numero)
  }
}