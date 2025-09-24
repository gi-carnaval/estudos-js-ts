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