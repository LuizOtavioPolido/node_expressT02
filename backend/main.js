const express = require('express')
const cors = require('cors')
const {DatabaseSync} = require('node:sqlite')
const app = express()
const port = 3000

const database = new DatabaseSync('./database.db')

function createTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS tarefa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            status TEXT NOT NULL
        )
    `

    database.exec(query)
}

app.use(cors())
app.use(express.json())

app.get('/tarefas', (req, res) => {
    const query = `
        SELECT * FROM tarefa
    `

    const stmt = database.prepare(query)
    const result = stmt.all()

    res.send(result)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id

    const query = `
        SELECT * FROM tarefa WHERE id = ?
    `   

    const stmt = database.prepare(query)
    const result = stmt.get(id)

    res.status(200).send(result)
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const query = `
        DELETE FROM tarefa WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.run(id)

    res.status(200).send({
        mensagem: `Item com id ${id} removido com sucesso!`,
        result
    })
})

app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)
    const {nome, descricao, status} = req.body 

    const query = `
        UPDATE tarefa SET nome = ?, descricao = ?, status = ? WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status, id)

    res.status(200).send({
        mensagem: "Item atualizado com sucesso!",
        result
    })
})

app.post('/tarefas', (req, res) => {
    console.log(req.body)

    const {nome, descricao, status} = req.body 

    const query = `
        INSERT INTO tarefa (nome, descricao, status) VALUES (?, ?, ?)
    `

    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status)

    res.status(201).send({
        mensagem: "Tarefa criada com sucesso!",
        result
    })
})

app.listen(port, () => {
    createTable()
    console.log('servidor tá rodando')
})
