import { ListagemTarefaStyled } from "./ListagemTarefaStyle";

export default function ListagemTarefa(){
    return(
        <ListagemTarefaStyled.Container>
            <h1>Listagem de Tarefa</h1>
            <ListagemTarefaStyled.Card>
                <ListagemTarefaStyled.AddButtonContainer>div do botão</ListagemTarefaStyled.AddButtonContainer>
                <ListagemTarefaStyled.ListContainer>div da listagem</ListagemTarefaStyled.ListContainer>
            </ListagemTarefaStyled.Card>
        </ListagemTarefaStyled.Container>
    )
}