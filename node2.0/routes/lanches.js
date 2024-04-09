const express = require('express')
const Lanches = require('./../models/Lanches')

const router = express.Router()
// Buscar dados - GET
router.get('/', (req, resposta) => {

    // Buscar
    Lanches.findAll({
        where: {
            id: 2
        }
    })
        .then((dados) => {
            console.log(dados)
            resposta.send(dados)
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })

})

// Criar dados - POST
router.post('/', (req, res) => {
    let objSalvar = req.body

    Lanches.create(objSalvar)
        .then(() => {
            res.send('Criado novo lanche :p')
        })
        .catch((erro) => {
            console.log('erro')
            console.log(erro)
            res.send('Deu ERRO!!  ;(')
        })
})

// Atualizar dados - PUT
router.put('/', (req, resposta) => {
    let objSalvar = {
        nome: 'X-Tudo'
    }

    // Atualizar
    Lanches.update(objSalvar, {
        where: {
            id: 2
        }
    })
        .then((res) => {
            resposta.send('Atualizado Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

// Deletar dados - DELETE
router.delete('/', (req, resposta) => {

    // Deletar
    Lanches.destroy({
        where: {
            id: 2
        }
    })
        .then((data) => {
            resposta.send('Deletado Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

module.exports = router