const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/clientes/:id', (req, res) => {
    res.send({
        id: req.params.id,
        nome: 'Node Jr Da Silva'
    })
})

app.get('/', (req, res) => {
    res.send({
        mensagem: 'eae bão ?'
    })
})

app.listen(port, () => {
    console.log('servidor tá rodando')
})
