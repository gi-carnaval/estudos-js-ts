//1. Calcular valor total de pedidos pagos
const orders = [
  { id: 1, customer: 'Ana', value: 200, status: 'paid' },
  { id: 2, customer: 'João', value: 450, status: 'pending' },
  { id: 3, customer: 'Maria', value: 700, status: 'paid' },
  { id: 4, customer: 'Pedro', value: 120, status: 'canceled' },
];

// TODO: filtrar apenas pedidos "paid", mapear apenas os valores
// e somar tudo com reduce → resultado esperado: 900

const paidOrdersTotal = orders.filter((order) => order.status === 'paid').reduce((acc, order) => acc + order.value, 0)

console.log({ paidOrdersTotal })

//2. Criar lista de nomes de usuários maiores de 18 anos
const users = [
  { id: 1, name: 'Carlos', age: 17 },
  { id: 2, name: 'Lucia', age: 22 },
  { id: 3, name: 'Fernanda', age: 19 },
  { id: 4, name: 'Paulo', age: 15 },
];

// TODO: filtrar maiores de idade, mapear só os nomes
// → resultado esperado: ['Lucia', 'Fernanda']

const userOver18 = users.filter((user) => user.age >= 18).map((user) => user.name)

console.log({ userOver18 })