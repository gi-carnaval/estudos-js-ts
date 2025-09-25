//Promise que resolve

const login = new Promise((resolve, reject) => {
  const user = "Giovani"

  const randomSuccess = Math.floor(Math.random() * 2)

  if (user && randomSuccess) {
    resolve(`Usuário ${user} logado!`)
  } else {
    reject("Erro: usuário não encontrado")
  }
})

login
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Login finalizado"))

//Encadeamento de .then()
const fetchUser = new Promise((resolve) => {
  setTimeout(() => resolve({ id: 1, name: "Giovani" }), 1000);
})

fetchUser
  .then(user => {
    console.log("Usuário: ", user);
    return user.name
  })
  .then(name => {
    console.log("Nome em maiúsculas: ", name.toUpperCase())
    return name.length
  })
  .then(length => console.log(("Tamanho do nome: ", length)))
  .catch(err => console.error("Erro: ", err))
  .finally(() => console.log("Fluxo finalizado"))

//Promise com rejeição
const getData = new Promise((resolve, reject) => {
  const success = false
  setTimeout(() => {
    if (success) resolve("Dados recebidos!")
    else reject("Falha ao buscar dados")
  }, 1000)
})

getData
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Requisição concluída"))