/*Exercício 1 – Extração e transformação de propriedades

Dado o objeto abaixo, crie uma função que receba a lista de usuários e retorne apenas id, nomeCompleto (concatenando nome + sobrenome) e email em letras minúsculas. */

const usuarios = [
  { id: 1, nome: "Giovani", sobrenome: "Carnaval", email: "Gi@DEV.com", senha: "12345" },
  { id: 2, nome: "Ana", sobrenome: "Silva", email: "ANA.SILVA@MAIL.com", senha: "abc" },
  { id: 3, nome: "Pedro", sobrenome: "Souza", email: "p.souza@company.com", senha: "teste" }
];

function formattedUser(users) {
  return users.map((user) => {
    return {
      id: user.id,
      nomeCompleto: user.nome.concat(" ").concat(user.sobrenome),
      email: user.email.toLowerCase()
    }
  })
}

console.log(formattedUser(usuarios))