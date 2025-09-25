/*
Mini - desafio: Sistema de Pedidos com Promises
Enunciado
Você precisa simular um fluxo de chamadas assíncronas com Promises para:

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

// 🚨 Desafio: encadear essas funções usando then/catch/finally
getUserById(1)
  .then(user => {
    console.log(`Usuário encontrado: ${user.name}`)
    return getOrdersByUserId(user.id)
  })   // buscar pedidos
  .then(userOrders => {
    console.log(`Pedidos do usuário: ${JSON.stringify(userOrders)}`)
    return calculateTotal(userOrders)
  })   // calcular total
  .then((total) => console.log(`Valor total: R$ ${total}`))   // mostrar nome + total
  .catch(err => console.error(err))  // tratar erro
  .finally(() => console.log("Fluxo finalizado")); // sempre executar