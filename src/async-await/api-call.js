async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

    const users = await response.json();
    console.log(users)
  } catch (error) {
    console.error("Falha na requisição: ", err.mensage)
  } finally {
    console.log("Requisição finalizada")
  }
}

getUsers()

function getPostsByUserId(id, posts) {
  return posts.filter((post) => post.userId === id).slice(0, 3)
}

async function getPosts(userId) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

    const posts = await response.json()

    if (posts.length === 0) {
      throw new Error(`Nenhum post encontrado`)
    }

    const userPosts = getPostsByUserId(userId, posts)

    if (userPosts.length === 0) {
      throw new Error(`Nenhum post do usuário encontrado`)
    }

    console.log(`Posts do usuário ${userId}: `, userPosts)

  } catch (error) {
    console.error(error)
  } finally {
    console.log("Fluxo finalizado")
  }
}

getPosts(1)

// simula fetch
function getUser(id) {
  return Promise.resolve({ id, name: 'Gi' });
}
function getOrders(userId) {
  return Promise.resolve([{ price: 10 }, { price: 5 }]);
}
function sumOrders(orders) {
  return orders.reduce((s, o) => s + o.price, 0);
}

getUser(1)
  .then(user => {
    console.log("user (then): ", user.name)
    return getOrders(user.id)
  })
  .then(orders => {
    const total = sumOrders(orders);
    console.log(`Total (then): `, total)
  })
  .catch(err => {
    console.error(`erro (then): `, err)
  })

async function flowAwait() {
  try {
    const user = await getUser(1)
    console.log("user (await): ", user.name)
    const orders = await getOrders(user.id)
    const total = sumOrders(orders)
    console.log("total (await): ", total)
  } catch (error) {
    console.error("erro (await):", error)
  }
}

flowAwait()