const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bancoDeDados/app.db'
})

module.exports = sequelize