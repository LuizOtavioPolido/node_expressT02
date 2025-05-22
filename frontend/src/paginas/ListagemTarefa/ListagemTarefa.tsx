import { useNavigate } from "react-router";
import Task from "../../components/Task/Task";
import { ListagemTarefaStyled } from "./ListagemTarefaStyle";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  id: number;
  nome: string;
  descricao: string;
  status: string
}

export default function ListagemTarefa() {
  const [listTask, setListTask] = useState<Task[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    getData()
  }, [])
  
  function removeTask(id:number){
    axios.delete(`http://localhost:3000/tarefas/${id}`).then((response) => {
      alert('Tarefa deletada com sucesso!')
      getData()
    })
  }

  function getData(){
    axios.get('http://localhost:3000/tarefas').then((response) => {
      setListTask(response.data)
    })
  }

  function renderList() {
    return listTask.map((item) => <Task onClick={() => navigate(`/tarefa/${item.id}`)} onRemove={() => removeTask(item.id)} titleTask={item.nome} />);
  }

  return (
    <ListagemTarefaStyled.Container>
      <h1>Listagem de Tarefa</h1>
      <ListagemTarefaStyled.Card>
        <ListagemTarefaStyled.AddButtonContainer>
          <ListagemTarefaStyled.AddButton onClick={() => navigate('/tarefa')}>
            <FaPlus size={20} />
          </ListagemTarefaStyled.AddButton>
        </ListagemTarefaStyled.AddButtonContainer>
        <ListagemTarefaStyled.ListContainer>
          {renderList()}
        </ListagemTarefaStyled.ListContainer>
      </ListagemTarefaStyled.Card>
    </ListagemTarefaStyled.Container>
  );
}
