// AULA 01
// hello world!
/*const mensagem = "Olá eu"

{
   const mensagem = "olá, mundo!"
   
console.log(mensagem)
}

console.log(mensagem);*/

// AULA 02

// arrays, objetos
/*let metas = [",","Oie", "Renan!", "Me chamo Giovanna! Tudo bem?", "Respondendo a sua pergunta, eu tenho", 26, "anos!"]
console.log(metas[1] + metas[0] + " " + metas[2] + " " + metas[3] + " " + metas[4] + " " + metas[5] + " " + metas[6])*/

// AULA 03

// arrays, objetos
let meta = {
   value: 'ler um livro por mês',
   checked: false,
   log: (info) => {
      console.log(info)
    }
}

meta.value = "Não é mais ler um livro"
meta.log(meta.value)

// arrow function
// const criarMeta = () => {}

// function 
// function criarMeta() {}