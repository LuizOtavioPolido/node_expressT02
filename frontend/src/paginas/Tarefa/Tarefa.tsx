import { useEffect, useState } from "react";
import { TarefaStyled } from "./TarefaStyle";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function Tarefa() {
  const [nameTask, setNameTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [statusTask, setStatusTask] = useState("");

    const params = useParams()

  const navigate = useNavigate()

    useEffect(() => {
        if(params.id){
            axios.get(`http://localhost:3000/tarefas/${params.id}`).then((response) => {
                setNameTask(response.data.nome)
                setDescriptionTask(response.data.descricao)
                setStatusTask(response.data.status)
              })
        }
    }, [])

    function updateTask() {
        const body = {
          nome: nameTask,
          descricao: descriptionTask,
          status: statusTask,
        };
    
        axios.put(`http://localhost:3000/tarefas/${params.id}`, body).then((response) => {
            alert('Tarefa criada com sucesso!')
            console.log(response.data)
    
            setTimeout(() => {
                navigate('/listagemTarefas')
            }, 2000)
        })
      }

  function createTask() {
    const body = {
      nome: nameTask,
      descricao: descriptionTask,
      status: statusTask,
    };

    axios.post('http://localhost:3000/tarefas', body).then((response) => {
        alert('Tarefa criada com sucesso!')
        console.log(response.data)

        setTimeout(() => {
            navigate('/listagemTarefas')
        }, 2000)
    })
  }

  return (
    <TarefaStyled.Container>
      <TarefaStyled.Card>
        <TarefaStyled.Input
          placeholder="Digite o nome da tarefa"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
        />
        <TarefaStyled.Input
          placeholder="Digite a descrição da tarefa"
          value={descriptionTask}
          onChange={(e) => setDescriptionTask(e.target.value)}
        />
        <TarefaStyled.Select
          value={statusTask}
          onChange={(e) => setStatusTask(e.target.value)}
        >
          <option value={"Completo"}>Completo</option>
          <option value={"Incompleto"}>Incompleto</option>
        </TarefaStyled.Select>

        <TarefaStyled.ContinueButton onClick={params.id ? updateTask : createTask}>Continuar</TarefaStyled.ContinueButton>
      </TarefaStyled.Card>
    </TarefaStyled.Container>
  );
}
