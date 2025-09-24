/*
Exercício 3 – Conversão e transformação em lote

Dada a lista de produtos

Crie uma função que converta todos os preços de reais (R$) para dólares (US$), arredondando para duas casas decimais, considerando que 1 dólar = 5,20 reais.
O retorno deve ser um novo objeto no mesmo formato, mas com os valores já convertidos.
*/

const produtos = {
  arroz: 25,
  feijao: 18,
  carne: 70,
  leite: 6
};

function convertToDolar(obj, tax) {
  return Object.entries(obj)
    .map(([product, price]) => {
      const dolarPrice = price / tax

      return [product, Number(dolarPrice.toFixed(2))]
    })
    .reduce((acc, [product, price]) => {
      acc[product] = price
      return acc
    }, {})
}

const productsInDolar = convertToDolar(produtos, 5.20)

console.log({ productsInDolar })