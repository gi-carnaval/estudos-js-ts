/*
Mini - desafio: Sistema de Pedidos com Async/Await
Enunciado
Você precisa simular um fluxo de chamadas assíncronas com Async/Await para:

1. Buscar um usuário pelo id.
2. Buscar os pedidos do usuário.
3. Calcular o valor total dos pedidos.
4. Exibir o resultado ou o erro, sempre finalizando o fluxo.

*/

// Simulação de "banco de dados"
const users = [{ id: 1, name: "Giovani" }, { id: 2, name: "Vitoria" }];
const orders = {
  1: [{ product: "Notebook", price: 3500 }, { product: "Mouse", price: 120 }],
  2: [{ product: "Camisa", price: 80 }, { product: "Tênis", price: 300 }]
};

// 1. Função que busca usuário
function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      user ? resolve(user) : reject("Usuário não encontrado");
    }, 500);
  });
}

// 2. Função que busca pedidos do usuário
function getOrdersByUserId(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userOrders = orders[userId];
      userOrders ? resolve(userOrders) : reject("Nenhum pedido encontrado");
    }, 500);
  });
}

// 3. Função que calcula total de pedidos
function calculateTotal(orders) {
  return new Promise((resolve) => {
    const total = orders.reduce((sum, order) => sum + order.price, 0);
    resolve(total);
  });
}

async function getOrders() {
  try {
    const user = await getUserById(3)

    console.log(`Usuário encontrado: ${user.name}`)

    const userOrders = await getOrdersByUserId(user.id)

    console.log(`Pedidos do usuário: ${JSON.stringify(userOrders)}`)

    const total = await calculateTotal(userOrders)

    console.log(`Valor total: R$ ${total}`)
  } catch (error) {
    console.error(error)
  } finally {
    console.log("Fluxo finalizado")
  }
}

getOrders()