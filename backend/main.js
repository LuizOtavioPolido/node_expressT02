const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let listaTarefas = []

app.use(cors())
app.use(express.json())

app.get('/tarefas', (req, res) => {
    res.send(listaTarefas)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id

    const index = listaTarefas.findIndex((item) => item.id == id)

    if(index != -1){
        res.status(200).send(listaTarefas[index])
    } else {
        res.status(404).send({
            mensagem: "Item não existe"
        })
    }

    
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const novaListaFiltrada = listaTarefas.filter((item) => item.id != id)

    listaTarefas = novaListaFiltrada

    res.status(200).send({
        mensagem: `Item com id ${id} removido com sucesso!`
    })
})

app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const {nome, descricao, status} = req.body 

    const item = {
        id,
        nome,
        descricao,
        status
    }

    const index = listaTarefas.findIndex((item) => item.id == id)

    if(index != -1){
        listaTarefas[index] = item

        res.status(200).send({
            mensagem: "Item atualizado com sucesso!"
        })
    } else {
        res.status(404).send({
            mensagem: "Item não encontrado"
        })
    }
})

app.post('/tarefas', (req, res) => {
    console.log(req.body)

    const {nome, descricao, status} = req.body 

    const item = {
        id: listaTarefas.length + 1,
        nome,
        descricao,
        status
    }

    listaTarefas.push(item)

    res.status(201).send({
        mensagem: "Tarefa criada com sucesso!"
    })
})

app.listen(port, () => {
    console.log('servidor tá rodando')
})
