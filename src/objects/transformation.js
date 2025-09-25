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

/*
Você tem um array de alunos, cada um com suas notas:

Tarefa:
Calcular a média de cada aluno e retornar um objeto no formato:
*/
const alunos = [
  { nome: "Ana", notas: [8, 7.5, 9] },
  { nome: "João", notas: [6, 5.5, 7] },
  { nome: "Maria", notas: [9, 9.5, 10] }
];

function calculateAverageScore(students) {
  return students.reduce((acc, student) => {

    const name = student.nome

    const sumScore = student.notas.reduce((acc, score) => acc + score)
    const avgScore = sumScore / student.notas.length

    acc[name] = Number(avgScore.toFixed(2))

    return acc
  }, {})
}

const avgScoreByStudent = calculateAverageScore(alunos)

console.log({ avgScoreByStudent })

/*Inventário com quantidade

Você tem um inventário de produtos (com estoque).

Tarefa:

1.Calcular o valor total do estoque (preço × quantidade).
2.Retornar também o produto mais caro em estoque (considerando valor total do item).
*/

const estoque = [
  { produto: "Notebook", preco: 3500, quantidade: 2 },
  { produto: "Mouse", preco: 120, quantidade: 10 },
  { produto: "Teclado", preco: 200, quantidade: 5 },
  { produto: "Monitor", preco: 900, quantidade: 3 }
];

function inventoryWithQuantity(stock) {
  const totalValueiInStockByProduct = stock.map((product) => {
    const result = {
      product: product.produto,
      totalValue: product.preco * product.quantidade
    }
    return result

  })

  const totalValueInStock = totalValueiInStockByProduct.reduce((acc, product) => {
    acc = acc + product.totalValue
    return acc
  }, 0)

  const mostExpensiveProduct = totalValueiInStockByProduct.reduce((prev, current) => {
    return prev.totalValue > current.totalValue ? prev : current
  })

  return {
    totalValue: totalValueInStock,
    mostExpensiveProduct: mostExpensiveProduct.product
  }
}

const totalValueInventory = inventoryWithQuantity(estoque)

console.log({ totalValueInventory })

/*
Normalização de dados

Você recebe uma lista de pedidos em formato aninhado:

Tarefa:
Transformar a lista em uma estrutura achatada, retornando todos os itens vendidos, mas preservando o nome do cliente.
*/

const pedidos = [
  {
    id: 1,
    cliente: "Ana",
    itens: [
      { produto: "Notebook", preco: 3500 },
      { produto: "Mouse", preco: 120 }
    ]
  },
  {
    id: 2,
    cliente: "João",
    itens: [
      { produto: "Teclado", preco: 200 },
      { produto: "Monitor", preco: 900 }
    ]
  }
];

function dataNormalize(orders) {
  const newOrders = orders.map((order) => {
    const productOrders = order.itens.map((item) => {
      return {
        client: order.cliente,
        produto: item.produto,
        preco: item.preco
      }
    })
    return [...productOrders]
  })

  return newOrders.flat()
}

const resultOrders = dataNormalize(pedidos)

console.log({ resultOrders })
