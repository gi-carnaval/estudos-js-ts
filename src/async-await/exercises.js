function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function test() {
  console.log("Início do async")
  await esperar(1000)
  console.log("Fim do await")
}

// test()

/*
Requisições em paralelo (Promise.all)
Descrição

Você tem uma lista de 3 endpoints da API pública JSONPlaceholder.
O desafio é buscar os dados em paralelo e retornar o tempo total de execução (dica: use console.time() e console.timeEnd()).

Objetivo
- Buscar /posts, /users, /comments simultaneamente.
- Logar quantos itens cada um retornou.
- Mostrar o tempo gasto (deve ser próximo ao tempo da requisição mais lenta, e não a soma de todas).*/

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/'

const repos = ['posts/', 'users/', 'comments/']

async function getDatas() {
  console.time('exe-1')
  const promises = repos.map((promise) => fetch(`${BASE_API_URL}${promise}`))

  const [posts, users, comments] = await Promise.all(promises)
  const postsQuantity = await posts.json()
  const usersQuantity = await users.json()
  const commentsQuantity = await comments.json()

  console.log("Posts quantity: ", postsQuantity.length)
  console.log("Users quantity: ", usersQuantity.length)
  console.log("Comments quantity: ", commentsQuantity.length)
  console.timeEnd('exe-1')

  return true
}

// getDatas()

/*
Requisições em corrida (Promise.race)
Descrição

Simule três servidores diferentes que podem responder a mesma requisição (use setTimeout com tempos aleatórios).
Use Promise.race para pegar a resposta do servidor mais rápido.

Objetivo
Criar três funções server1(), server2(), server3() que retornam Promises resolvidas após um tempo aleatório entre 500–1500ms.
Rodar uma corrida com Promise.race.
Exibir no log qual servidor venceu a corrida.
*/

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  console.log({ randomNumber })
  return randomNumber
}

function server1() {
  const randomNumber = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return new Promise(res => setTimeout(() => {
    res(`Servidor 1 respondeu em ${randomNumber}ms`)
  }, randomNumber))
}
function server2() {
  const randomNumber = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return new Promise(res => setTimeout(() => {
    res(`Servidor 2 respondeu em ${randomNumber}ms`)
  }, randomNumber))
}
function server3() {
  const randomNumber = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return new Promise(res => setTimeout(() => {
    res(`Servidor 3 respondeu em ${randomNumber}ms`)
  }, randomNumber))
}

async function raceCondition() {
  const result = await Promise.race([
    server1(),
    server2(),
    server3(),
  ])
  console.log({ result })
  return result
}

raceCondition()

/*
Requisições sequenciais (for await...of)
Descrição

Você precisa processar uma lista de IDs de posts (ex: [1,2,3,4,5]) e buscar cada post na API /posts/:id, um por vez, respeitando a ordem.

Objetivo

Criar uma função getPost(id) que retorna o post (fetch).
Iterar sobre os IDs com for await...of (dica: use map para transformar os IDs em Promises primeiro).
Logar o título de cada post na ordem correta.
No final, mostre o tempo total e compare com uma versão em paralelo (Promise.all) para perceber a diferença.
*/

const postIdList = [1, 2, 3, 4, 5]

async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
      throw new Error(`Erro ${response.status}`)
    }

    const post = await response.json()
    return post

  } catch (error) {
    console.error(error)
  }
}

async function getPostsByList(postIdList) {
  const promises = postIdList.map(id => getPost(id))

  for await (const post of promises) {
    console.log(`Título: ${post.title}\n `)
  }

}

getPostsByList(postIdList)