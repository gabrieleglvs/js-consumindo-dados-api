var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/')
.then(resposta => resposta.json())
.then(rJSON => {
    if (rJSON.erro) {
        throw Error('Esse cep não existe!') //O erro do cep inválido vem no próprio Then, por isso tratamos aqui.
    } else 
    console.log(rJSON)
})
.catch(erro => console.log(erro)); //esse é um erro de rejected.

console.log(consultaCEP)