/*
Exercício 5 – Contagem de ocorrências

Dado o array de produtos:

Crie uma função que conte quantos produtos existem em cada categoria, retornando um objeto no formato:
*/

const estoque = [
  { produto: "Notebook", categoria: "Eletrônicos" },
  { produto: "Camisa", categoria: "Vestuário" },
  { produto: "Celular", categoria: "Eletrônicos" },
  { produto: "Calça", categoria: "Vestuário" },
  { produto: "Microondas", categoria: "Eletrodomésticos" },
  { produto: "Fone de ouvido", categoria: "Eletrônicos" }
];

function countProductsByCategory(stock) {
  return stock.reduce((acc, product) => {
    const category = product.categoria

    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})
}

const productsByCategory = countProductsByCategory(estoque)

console.log({ productsByCategory })