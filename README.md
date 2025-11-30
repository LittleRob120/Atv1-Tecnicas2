# Atlantis - Atividade I

Projeto em TypeScript com exemplos de modelos e protótipo de clonagem para clientes, endereços, documentos e telefones. Inclui scripts de teste em Node usando prompt-sync.

## Estrutura

- [enumeracoes/tipoDocumento.ts](atvi-atlantis/enumeracoes/tipoDocumento.ts) — Enum de tipos de documento.
- [interfaces/prototipo.ts](atvi-atlantis/interfaces/prototipo.ts) — Interface de protótipo com método [`interfaces.Prototipo.clonar`](atvi-atlantis/interfaces/prototipo.ts).
- Modelos:
  - [`modelos.Cliente`](atvi-atlantis/modelos/cliente.ts)
  - [`modelos.Documento`](atvi-atlantis/modelos/documento.ts)
  - [`modelos.Endereco`](atvi-atlantis/modelos/endereco.ts)
  - [`modelos.Telefone`](atvi-atlantis/modelos/telefone.ts)
- Testes (entrada/execução):
  - [teste/entrada.ts](atvi-atlantis/teste/entrada.ts)
  - [teste/index.ts](atvi-atlantis/teste/index.ts)
- Saída compilada em JavaScript:
  - [js/modelos](atvi-atlantis/js/modelos)
  - [js/teste/index.js](atvi-atlantis/js/teste/index.js)

## Destaques

- Clonagem de endereço via [`modelos.Endereco.clonar`](atvi-atlantis/modelos/endereco.ts) usando o padrão Protótipo ([`interfaces.Prototipo`](atvi-atlantis/interfaces/prototipo.ts)).
- Enum de documento: [`enumeracoes.TipoDocumento`](atvi-atlantis/enumeracoes/tipoDocumento.ts).

## Pré-requisitos

- Node.js 16+
- npm
- TypeScript (`tsc`)

## Instalação

```sh
npm install
```

## Build

Compila TypeScript para a pasta js:

```sh
npx tsc
```

## Execução

Você pode executar a versão compilada:

```sh
node js/teste/index.js
```

Ou executar direto os fontes se preferir configurar ts-node.

## Arquivos principais

- Cliente: [`modelos.Cliente`](atvi-atlantis/modelos/cliente.ts)
- Endereço com clonagem: [`modelos.Endereco`](atvi-atlantis/modelos/endereco.ts)
- Documento: [`modelos.Documento`](atvi-atlantis/modelos/documento.ts)
- Telefone: [`modelos.Telefone`](atvi-atlantis/modelos/telefone.ts)
- Fluxo de teste: [teste/index.ts](atvi-atlantis/teste/index.ts), [teste/entrada.ts](atvi-atlantis/teste/entrada.ts)
