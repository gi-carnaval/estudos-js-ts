/*
Exercício 4 – Agrupamento por chave

Dada a lista de funcionários:

Crie uma função que agrupe os funcionários por departamento, retornando um objeto onde a chave é o nome do departamento e o valor é uma lista com os nomes dos funcionários daquele departamento.
*/

const funcionarios = [
  { nome: "Gi", departamento: "TI" },
  { nome: "Maria", departamento: "RH" },
  { nome: "José", departamento: "TI" },
  { nome: "Carla", departamento: "Financeiro" },
  { nome: "Ana", departamento: "RH" }
];

function groupEmployeesByDepartment(employees) {
  return employees.reduce((acc, employee) => {
    const department = employee.departamento

    if (!acc[department]) {
      acc[department] = []
    }

    acc[department].push(employee.nome)

    return acc

  }, {})
}

const groupedEmployees = groupEmployeesByDepartment(funcionarios)

console.log(groupedEmployees)

/*Relatório de vendas por categoria

Você recebe uma lista de produtos vendidos no mês

Tarefa:
Agrupar os produtos por categoria e calcular o faturamento total de cada categoria.
*/
const vendas = [
  { produto: "Notebook", categoria: "Eletrônicos", preco: 3500 },
  { produto: "Mouse", categoria: "Eletrônicos", preco: 120 },
  { produto: "Teclado", categoria: "Eletrônicos", preco: 200 },
  { produto: "Camisa", categoria: "Vestuário", preco: 80 },
  { produto: "Calça", categoria: "Vestuário", preco: 150 },
  { produto: "Tênis", categoria: "Vestuário", preco: 300 }
];

function getValueByCategory(vendas) {
  return vendas.reduce((acc, product) => {
    const category = product.categoria

    acc[category] = (acc[category] || 0) + product.preco
    return acc

  }, {})
}

const productByCategory = getValueByCategory(vendas)

console.log({ productByCategory })
