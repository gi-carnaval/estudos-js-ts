/*
Exercício 2 – Combinação de objetos

Você tem duas fontes de dados distintas

Crie uma função que combine os dois objetos em um único, mas que adicione também uma propriedade calculada: localizacao no formato "cidade/estado".
*/

const dadosPessoais = {
  id: 101,
  nome: "João",
  idade: 30
};

const endereco = {
  cidade: "Curitiba",
  estado: "PR",
  cep: "80000-000"
};

function combineObject(dadosPessoais, endereco) {
  return {
    ...dadosPessoais,
    ...endereco,
    localizacao: endereco.cidade.concat("/").concat(endereco.estado)
  }
}

console.log(combineObject(dadosPessoais, endereco))
