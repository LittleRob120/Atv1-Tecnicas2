import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from '../modelos/telefone'

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = cliente.endereco.clonar()
dependente.titular = cliente
cliente.dependentes.push(dependente)

// Demonstração rápida do Protótipo de Telefone
const original = new Telefone('11', '999999999')
const copia = original.clonar()

console.log('Original:', original.getDdd, original.getNumero)
console.log('Cópia:', copia.getDdd, copia.getNumero)
console.log('São instâncias diferentes?', original !== copia)

console.log(cliente);
console.log(dependente);
