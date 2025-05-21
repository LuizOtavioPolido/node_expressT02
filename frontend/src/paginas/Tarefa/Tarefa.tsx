import { TarefaStyled } from "./TarefaStyle";

export default function Tarefa() {
  return (
    <TarefaStyled.Container>
      <TarefaStyled.Card>
        <TarefaStyled.Input placeholder="Digite o nome da tarefa" />
        <TarefaStyled.Input placeholder="Digite a descrição da tarefa" />
        <TarefaStyled.Select>
            <option value={'Completo'}>Completo</option>
            <option value={'Incompleto'}>Incompleto</option>
        </TarefaStyled.Select>

        <TarefaStyled.ContinueButton>Continuar</TarefaStyled.ContinueButton>
      </TarefaStyled.Card>
    </TarefaStyled.Container>
  );
}
