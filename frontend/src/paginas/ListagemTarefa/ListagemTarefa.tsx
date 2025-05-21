import { useNavigate } from "react-router";
import Task from "../../components/Task/Task";
import { ListagemTarefaStyled } from "./ListagemTarefaStyle";
import { FaPlus } from "react-icons/fa";

export default function ListagemTarefa() {
  const navigate = useNavigate();

  const list = [
    {
      taskName: "Tarefa1",
    },
    {
      taskName: "Tarefa2",
    },
    {
      taskName: "Tarefa3",
    },
    {
      taskName: "Tarefa4",
    },
    {
      taskName: "Tarefa5",
    },
  ];

  function renderList() {
    return list.map((item) => <Task titleTask={item.taskName} />);
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
