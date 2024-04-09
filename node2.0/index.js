const express = require('express')
const db = require('./bancoDeDados/conexao')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const Jobs = require('./models/Jobs')


db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log(
            'Erro ao conectar' +
            'no Banco de Dados' + erro
        )
    })

const PORT = 3001

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))


  

app.get('/', (req, res) => {

    Jobs.findAll({
        order: [
            ['createdAT', 'DESC']
        ]
    }).then((vagas) =>{ 
        
        res.render('index', {
            jobs: vagas
        })
    })
    .catch((err) => console.log(err))
})



app.use('/jobs', require('./routes/jobs'))
app.use('/lanches', require('./routes/lanches'))

app.listen(PORT, () => {
    console.log(
        'Express esta rodando na porta: ' +
        PORT
    )
})