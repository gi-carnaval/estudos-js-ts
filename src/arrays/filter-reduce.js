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

//3. Calcular média de notas apenas dos alunos aprovados
const students = [
  { id: 1, name: 'Ana', grade: 8 },
  { id: 2, name: 'João', grade: 5 },
  { id: 3, name: 'Maria', grade: 7 },
  { id: 4, name: 'Pedro', grade: 4 },
];

// TODO: filtrar alunos com grade >= 6, usar reduce para média
// → resultado esperado: média = (8 + 7) / 2 = 7.5

const approvedStudents = students.filter((student) => student.grade >= 6)
const approvedAverageScore = approvedStudents.reduce((acc, student) => (acc + student.grade), 0) / approvedStudents.length

console.log({ approvedAverageScore })

//4. Contar quantos produtos em estoque custam mais de 100
const products = [
  { id: 1, name: 'Mouse', price: 80, inStock: true },
  { id: 2, name: 'Teclado', price: 120, inStock: true },
  { id: 3, name: 'Monitor', price: 800, inStock: true },
  { id: 4, name: 'Cadeira', price: 300, inStock: true },
];

// TODO: filtrar produtos com price > 100 e inStock === true,
// depois usar reduce para contar quantos existem
// → resultado esperado: 2

const productsWithPriceGreaterThan100 = products.filter((product) => product.price > 100 && product.inStock).reduce((acc, _product) => acc + 1, 0)

console.log({ productsWithPriceGreaterThan100 })

//5. Agrupar leads por status (contatado/não contatado)
const leads = [
  { id: 1, name: 'Carlos', contacted: true },
  { id: 2, name: 'Lucia', contacted: false },
  { id: 3, name: 'Fernanda', contacted: false },
  { id: 4, name: 'Rafael', contacted: true },
];

// TODO: usar reduce para criar um objeto com 2 arrays: 
// { contacted: ['Carlos', 'Rafael'], uncontacted: ['Lucia', 'Fernanda'] }

const leadsByStatus = leads.reduce((acc, lead) => {
  const crrStatus = lead.contacted ? 'contacted' : 'uncontacted'

  if (!acc[crrStatus]) {
    acc[crrStatus] = []
  }

  acc[crrStatus].push(lead.name)

  return acc
}, {})

console.log({ leadsByStatus })