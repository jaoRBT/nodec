const Sequelize = require('sequelize')
const db = require('./../bancoDeDados/conexao')

const Lanches = db.define('lanche', {
    nome: {
        type: Sequelize.STRING
    }
})

module.exports = Lanches